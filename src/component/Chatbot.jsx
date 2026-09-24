import { useState } from "react";
import { askGemini } from "../services/gemini";
export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const [remainingMessages, setRemainingMessages] = useState(() => {
    const saved = localStorage.getItem("chatbotMessages");

    return saved !== null ? Number(saved) : 20;
  });

 const handleSend = async () => {
  if (!message.trim()) return;

  if (remainingMessages === 0) {
    setMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        text: "لقد وصلت للحد الأقصى من الرسائل المتاحة حاليًا.",
      },
    ]);

    return;
  }

  const userMessage = message;
  setMessages((prev) => [
    ...prev,
    {
      sender: "user",
      text: userMessage,
    },
  ]);
  setMessage("");
  setLoading(true);

  try {
    const result = await askGemini(userMessage);

    setMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        text: result,
      },
    ]);
    const newRemaining = remainingMessages - 1;
    setRemainingMessages(newRemaining);
    localStorage.setItem(
      "chatbotMessages",
      newRemaining
    );

  } catch (error) {
    console.error(error);
    if (error?.status === 429) {

      const errorMessage = error?.message || "";

      const match = errorMessage.match(/retry in (\d+)s/);

      const seconds = match ? Number(match[1]) : null;

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: seconds
            ? `لقد وصلت للحد المؤقت من الرسائل. حاول مرة أخرى بعد ${seconds} ثانية.`
            : "لقد وصلت للحد الأقصى من الرسائل حاليًا. حاول مرة أخرى لاحقًا.",
        },
      ]);

    } else {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "حدث خطأ أثناء الاتصال بالمساعد.",
        },
      ]);
    }
  }

  setLoading(false);
};

  return (
    <>
      {isOpen && (
        <div className="chatbotWindow">

          <h5>Movie Assistant</h5>

          <p className="messageLimit">
            Remaining messages: {remainingMessages}
          </p>

          <div className="chatMessages">

            {messages.map((msg, index) => (
              <p key={index}>
                <strong>
                  {msg.sender === "user" ? "You: " : "AI: "}
                </strong>

                {msg.text}
              </p>
            ))}

            {loading && (
              <div className="typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}

          </div>

          <div className="chatInput">

            <input
              type="text"
              placeholder="Ask about movies..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
            />

            <button
              onClick={handleSend}
              disabled={loading}
            >
              Send
            </button>

          </div>

        </div>
      )}

      <button
        className="chatbotBtn"
        onClick={() => setIsOpen(!isOpen)}
      >
        💬
      </button>
    </>
  );
}