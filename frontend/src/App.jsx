// import React from "react";
// import "./App.css";
// import { useState } from "react";
// import chatbotImage from './images/robot_1.webp';
// import chatbotSound from './sounds/bye_message_5_josh.mp3';
// import chatbotStartSound from './sounds/adam_intro_1.mp3';
// import chatbotBackgroundSound from './sounds/background_1.mp3';


// function App() {
//   const [message, setMessage] = useState('');
//   const [response, setResponse] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//       fetch('http://localhost:4000/', {

//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ message }),
//     })
//     .then((res) => res.json())
//     .then((data) => setResponse(data.message));
//   }

//   const playBackgroundSound = () => {
//     backgroundAudio = new Audio(chatbotBackgroundSound);
//     backgroundAudio.loop = true;
//     backgroundAudio.play();
//   };

//   return (
//     <div className="App">
//     <h1>Brand Craft Pro Robot App</h1>
//     <img src={chatbotImage} alt="Chatbot" />
//     <form onSubmit={handleSubmit}>
//       <textarea
//         value={message}
//         placeHolder="Ask BrandCraftPro Robot about creating a name, logo, or an 'About Us' story for your business. Write here..., then click on Submit."
//         onChange={(e) => setMessage(e.target.value)}
//       ></textarea>
//       <button type="submit">Submit</button>
//       <br />
//       <button id='play-button' onClick={playBackgroundSound}>Play Background Sound</button>
//     </form>
//     <div>{response}</div>

    
//     <form onSubmit={handleSubmit}>
//       <textarea
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       ></textarea>
//       <button type='submit'>Submit</button>
//       <div>{response}</div>
//     </form>
//   </div>

//   )

// }

// export default App;



import React, { useState, useEffect } from 'react';
import './App.css';
import chatbotImage from './images/robot_1.webp';
import chatbotSound from './sounds/bye_message_5_josh.mp3';
import chatbotStartSound from './sounds/adam_intro_1.mp3';
import chatbotBackgroundSound from './sounds/background_1.mp3';

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  let backgroundAudio; 

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
      .then((res) => res.json())
      .then((data) => {
        setResponse(data.message);
        playSound(); 
        stopBackgroundSound(); 
      })
      .catch((error) => console.error("there is an error", error)); 
  };

  const playSound = () => {
    const audio = new Audio(chatbotSound);
    audio.play();
  };

  const playBackgroundSound = () => {
    backgroundAudio = new Audio(chatbotBackgroundSound);
    backgroundAudio.loop = true;
    backgroundAudio.play();
  };

  const stopBackgroundSound = () => {
    if (backgroundAudio) {
      backgroundAudio.pause();
      backgroundAudio = null;
    }
  };

  useEffect(() => {
    const audio = new Audio(chatbotStartSound);
    audio.play();

    return () => {
      if (backgroundAudio) {
        backgroundAudio.pause();
        backgroundAudio = null;
      }
    };
  }, []); 

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
  );
}

export default App;

