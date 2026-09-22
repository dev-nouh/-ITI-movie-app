import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!query.trim()) return;

    navigate(`/search?query=${query}`);
  };
  return (
<div>
  <div className="mb-3 d-flex justify-content-center mt-3 w-100">
    <input
      type="search"
      value={query}
      onChange={(e)=> setQuery(e.target.value)}
      className="form-control w-75"
      placeholder="Search and explore...."
        onKeyDown={(e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  }}
    />

    <button className="btn searchBtn ms-4" onClick={handleSearch} >
      Search
    </button>
  </div>
</div>
  )
}
