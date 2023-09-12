// const OpenAI = require('openai');
// const { Configuration, OpenAIApi } = OpenAI


// const express = require('express');
// const app = express();
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const port = 4000 ;

// const configuration = new Configuration({
//     organization: "org-eYnp3AUeccZLuh7xaZTNSpCE",
//     apiKey: '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',
// });



// const openai = new OpenAIApi(configuration);


// app.use(cors());
// app.use(bodyParser.json());


// app.post('/', async (req, res) => {
//     const response = await openai.createCompletion({
//         model: "text-davinci-003",
//         prompt: "Say this is a test.",
//         max_tokens: 7,
//         temperature: 0,
//       });
    
//       console.log(response.data);
//       if (response.data) {
//         if (response.data.choices) {
//             res.json({ message: response.data.choices[0].text })
//         }
//       }

// })


// app.listen(port, () => {
//     console.log('Example app listening on port', port);
// });



const OpenAI = require("openai");
const { Configuration, OpenAIApi } = OpenAI;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

// require('dotenv').config()


const configuration = new Configuration({
    organization: "org-eYnp3AUeccZLuh7xaZTNSpCE",
    apiKey: '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',
});



const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());
app.use(cors());


app.post('/', async (req, res) => {
  const { message } = req.body;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Pretend you are a Chatbot. Answer with content about possible
    names for any type of business, suggest a business logo, and write about
    an 'About Us' about any type of business.

    Chatbot: How can I help you today?
    Person: suggest a business name, my business is a restaurant that sells peruvian food and peruvian drinks, and show it in a list.
    Chatbot: Certainly! Here are some business name suggestions for your Peruvian restaurant:
    
    1) "Machu Picchu Bistro"

    2) "Inca Delights"

    3) "Andes Kitchen"

    4) "Pisco & Ceviche"

    5) "Peruvian Spice"

    6) "Sabor Peruano"

    7) "Lima Flavors"

    8) "Peruvian Palate"

    9) "Cusco Cuisine"

    10) "Peru Gastronomy"

    11) "Andean Delights"

    12) "Inka Fusion"

    13) "Peru's Kitchen"

    14) "Peruvian Picantería"

    15) "Aromas of Peru"

    Person: suggest a business logo, my bussiness is  a restaurant that sells peruvian food and peruvian drinks.
    Chatbot: Certainly! Here's a description of a potential business logo for your Peruvian restaurant:
    
    Logo Description:
    The logo features a combination of Peruvian cultural elements and culinary symbols. It employs warm and vibrant colors to evoke a sense of energy and excitement. The logo consists of the following elements:
    
    1) Icon: A stylized representation of a traditional Peruvian chullo (knitted hat) with colorful patterns and tassels. This symbolizes the Peruvian heritage and adds a touch of authenticity to the logo.
    
    2) Typography: The restaurant name is displayed in bold, elegant lettering. Consider using a typeface that complements the cultural theme while maintaining readability. 
    
    3) Illustrations: Surrounding the chullo icon, small illustrations of Peruvian culinary items like a ceviche bowl, a pisco glass, or a quinoa plant can be incorporated. These elements represent the unique Peruvian food and drinks offered at your restaurant. 
    
    4) Color Palette: Utilize a vibrant color palette inspired by Peruvian textiles, such as deep reds, bright yellows, earthy browns, and vibrant greens. This creates an eye-catching and culturally rich visual appeal.
    Person: suggest an "About Us" for my business, my business is  a restaurant that sells peruvian food and peruvian drinks, it is family owned, we offer a great variety of dishes, we offer an outstanding service, founded in 2020, we are 25 employees, and we have a culture of inclusion and we participate in different charities, and we would like to help more the community and we are thinking in open another restaurant this year. 
    Chatbot: Welcome to [Restaurant Name], where Peruvian flavors come alive! We are a family-owned restaurant passionate about sharing the rich culinary heritage of Peru with our valued guests. Since our establishment in 2020, we have been dedicated to providing an exceptional dining experience that combines delicious Peruvian cuisine, outstanding service, and a warm, welcoming atmosphere.
    
    At [Restaurant Name], we take pride in offering a diverse menu that showcases the authentic flavors of Peru. From classic Peruvian dishes like ceviche and lomo saltado to lesser-known culinary gems, our extensive selection caters to every palate. Our talented team of 25 dedicated employees works tirelessly to ensure that each dish is crafted with care, using the finest ingredients and traditional recipes passed down through generations.
    
    Beyond our commitment to culinary excellence, we believe in fostering a culture of inclusion and giving back to the community. We actively participate in various charitable initiatives, aiming to make a positive impact on the lives of those around us. We are thrilled to have the opportunity to serve our community, and we continuously seek new ways to support and uplift those in need.
    
    Looking ahead, our passion and success have inspired us to embark on a new venture. We are excited to announce that we will be opening another restaurant this year, expanding our reach to bring the vibrant flavors of Peru to even more people. This expansion allows us to create more job opportunities and extend our dedication to exceptional service and culinary mastery.
    
    Thank you for being a part of our journey and for allowing us to be a part of your dining experiences. We invite you to join us at [Restaurant Name] and indulge in an unforgettable culinary adventure through the diverse and tantalizing world of Peruvian cuisine.

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






