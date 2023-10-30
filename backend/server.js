
const OpenAI = require("openai");
const { Configuration, OpenAIApi } = OpenAI;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

require('dotenv').config()

const configuration = new Configuration({
    organization: "org-eYnp3AUeccZLuh7xaZTNSpCE",
    apiKey: process.env.VITE_API_KEY,
});

const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());
app.use(cors());


app.post('/', async (req, res) => {
  const { message } = req.body;

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Pretend you are a Chatbot.  Answer any question about any topic.

    Person: tell me the names of the members of the band the beatles?
    Chatbot: The members of the band "The Beatles" were:

    John Lennon: He was a guitarist, singer, and songwriter, known for his distinctive voice and creative songwriting.
    Paul McCartney: He played bass guitar, sang, and was also a songwriter. McCartney is known for his melodic talent and versatility as a musician.
    George Harrison: He played lead guitar and contributed vocals. Harrison was known for incorporating Indian music elements into the band's sound.
    Ringo Starr: He was the drummer for the band and occasionally contributed vocals. Starr was known for his steady drumming style and humorous personality.
    These four members formed the core of The Beatles throughout their career, making significant contributions to the band's legendary music.

    Person: ${message}?
    Chatbot:`,
    max_tokens: 200,
    temperature: 0,
  });

 console.log(response.data)
 if (response.data.choices[0]) {
  res.json({ message: response.data.choices[0].text });
 }

});




app.listen(port, () => {
console.log('Example app listening on port', port);
});






