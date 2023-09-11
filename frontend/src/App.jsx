import React from "react";
import "./App.css";
import { useState } from "react";


function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

      fetch('http://localhost:4000/', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
    })
    .then((res) => res.json())
    .then((data) => setResponse(data.message));
  }

  return (
    <div className="App">
    <h1>Brand Craft Pro Robot App</h1>
    <img src={chatbotImage} alt="Chatbot" />
    <form onSubmit={handleSubmit}>
      <textarea
        value={message}
        placeHolder="Ask BrandCraftPro Robot about creating a name, logo, or an 'About Us' story for your business. Write here..., then click on Submit."
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button type="submit">Submit</button>
      <br />
      <button id='play-button' onClick={playBackgroundSound}>Play Background Sound</button>
    </form>
    <div>{response}</div>
  </div>

  )

}

export default App;