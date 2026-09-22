import Navbar from './component/Navbar';
import './App.css'
import { Outlet } from 'react-router';
import Chatbot from './component/Chatbot';


export default function App() {
  return (
    <div>
      <Navbar /> 
      <Outlet/>
      <Chatbot />
    </div>
  )
}
