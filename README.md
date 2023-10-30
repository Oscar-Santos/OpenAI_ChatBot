![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)
# OpenAI CHATBOT APP

## Overview 🟣
OpenAI Chatbot App is a small, yet complete full-stack application. For this App, I utilized various technologies such as Javascript, OpenAI Integrations, React, React libraries, CSS, Node packages, and a Node.js server with the Express framework to create a web server.

The highlight of this application is an interactive chatbot that leverages the powerful "Text-DaVinci-oo3" model from OpenAI. Through API calls, the chatbot engages in conversations with users, simulating interactions with a real person. To ensure security, I have implemented the Dotenv module to load environment variables and conceal my API key, as OpenAI prioritizes data protection.

You can ask this chatbot for name suggestions, logo designs, or even an "about us" story for any type of business. It provides prompt-based responses, generating creative and relevant suggestions based on the input. Additionally, I have incorporated AI voice to deliver a greeting and a thank-you message to the user.

Developing this application has been exciting but also challenging. I thoroughly enjoyed working on it and overcoming the various complexities that arose along the way.

![Screen Shot 2023-10-30 at 11 49 09 AM](https://github.com/Oscar-Santos/OpenAI_ChatBot/assets/83252572/e5b879e3-7995-4d72-991c-eb3403db0745)

![Screen Shot 2023-10-30 at 11 50 28 AM](https://github.com/Oscar-Santos/OpenAI_ChatBot/assets/83252572/133ea83e-4125-4df3-be24-274d7e1d55f8)


![Screen Shot 2023-10-30 at 11 51 36 AM](https://github.com/Oscar-Santos/OpenAI_ChatBot/assets/83252572/059e0262-d748-40b1-a71c-35b0dc350fa1)




## To set up this app locally, please follow these steps:🟣

- Clone this repository using `git clone`. 
- Navigate to the root directory by running `cd OpenAI_ChatBot`.
- Open two terminals simultaneously for the `OpenAI_ChatBot`.
- In one terminal cd into `frontend` and run `npm install` (This will install all the dependencies listed in the package.json file, including @vitejs/plugin-react.).
- Now this frontend folder run `npm run dev `, and now you have the frontend side running!!


- Then ensure that you have Node.js and npm (Node Package Manager) installed on your system. You can check this by running the following commands in your terminal or command prompt:
  </br>
  `node -v`
  </br>
  `npm -v`

- If these commands return the version numbers, it means Node.js and npm are installed. If not, you will need to install them from the official Node.js website [Node](https://nodejs.org).
  
- After this, in your second terminal cd into the backend folder and run `node server.js`
- if you get this error:

<img width="1028" alt="Screen Shot 2023-10-30 at 12 34 47 PM" src="https://github.com/Oscar-Santos/OpenAI_ChatBot/assets/83252572/e90a21e0-5744-45bc-91c0-c0940f64a419">

- That means you need to install the OpenAI Module, run `npm install openai`
- Now, run 'node server.js` and the backend side is running!!

## How to run the App:🟣

- Open in a new tab your localhost frontend link, it will look like something like this:

  <img width="1016" alt="Screen Shot 2023-10-30 at 12 41 04 PM" src="https://github.com/Oscar-Santos/OpenAI_ChatBot/assets/83252572/0e8fa6c9-ceab-41f3-991f-0f058e0ce7ef">

- Once you do that, you will see the Chatbot and now you can ask any question to the Chatbot App!!!!
  
## Framework🟣
<p>
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" />
</p>

## Languages🟣
<p>
  <img src="https://img.shields.io/badge/JavaScript-ES2021-yellow?logo=javascript" />
  </br>
  <img src="https://img.shields.io/badge/CSS-3-blue?logo=css3" />
  </br>
  <img src="https://img.shields.io/badge/HTML-<VERSION>-<COLOR>?logo=html5" />
  </br>
</p>

## Tools🟣
<p>
  <img src="https://img.shields.io/badge/OpenAI-Integrated-brightgreen?logo=openai" /> 
  </br>
  <img src="https://img.shields.io/badge/Node.js-14.17.3-green?logo=node.js" /> 
  </br>
  <img src="https://img.shields.io/badge/Git-F05032.svg?&style=flaste&logo=git&logoColor=white" />
  </br>
  <img src="https://img.shields.io/badge/GitHub-181717.svg?&style=flaste&logo=github&logoColor=white" />
  </br>
</p>

## Endpoints🟣

1)   #### Request
`POST https://api.openai.com/v1/completions`
```json
{
  "model": "text-davinci-003",
  "prompt": "Say this is a test",
  "max_tokens": 7,
  "temperature": 0,
  "top_p": 1,
  "n": 1,
  "stream": false,
  "logprobs": null,
  "stop": "\n"
}

```

2)    #### Response
`POST https://api.openai.com/v1/completions`

```json
{
  "id": "cmpl-uqkvlQyYK7bGYrRHQ0eXlWi7",
  "object": "text_completion",
  "created": 1589478378,
  "model": "text-davinci-003",
  "choices": [
    {
      "text": "\n\nThis is indeed a test",
      "index": 0,
      "logprobs": null,
      "finish_reason": "length"
    }
  ],
  "usage": {
    "prompt_tokens": 5,
    "completion_tokens": 7,
    "total_tokens": 12
  }
}

```

## Vercel Deployment Link🟣

[Vercel Link](https://open-ai-chat-bot-green.vercel.app/)

## App Link🟣

[React App Link](https://open-ai-chat-bot-green.vercel.app/)


![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)
