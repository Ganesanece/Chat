import React, { useState } from 'react';
import "./style.css";
import Chat from "./Chat";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  function showChatWindow() {
    setIsOpen((isOpen) => !isOpen);
  }

  
  
  return (
    <div className="mainSection">
      <div className="heading">
      <button onClick={showChatWindow}>Click to Chat</button>
      </div>      
      { isOpen && <Chat />}
    </div>
  );
}
