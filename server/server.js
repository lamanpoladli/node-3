const express = require('express');
const app = express();
const crypto = require('crypto')
const cors = require('cors')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const dotenv = require ('dotenv')

dotenv.config();




app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json())

const PORT = 7070;
app.use(cors());
const AuthorSchema = new mongoose.Schema({
  name: String,
  surname: String,
  birhdate: Number,
  genre: String,
  isDead: Boolean,
  isMale: Boolean,
  imageUrl: String
});


const AuthorModel = mongoose.model('Authors', AuthorSchema);


DB_CONNECTION = process.env.DB_CONNECTION
DB_PASSWORD = process.env.DB_PASSWORD
mongoose.connect(DB_CONNECTION.replace("<password>", DB_PASSWORD))
  .then(() => console.log("Mongo DB Connected!"))



app.get('/authors', async (req, res) => {


  const { name } = req.query;
  const authors = await AuthorModel.find();
  if (name === undefined) {
    res.status(200).send({
      data: authors,
      message: "data get success!",
    });
  } else {
    res.status(200).send({
      data: authors.filter((x) => x.name.toLowerCase().trim().includes(name.toLowerCase().trim())),
      message: "data get success!",
    });
  }
    
  })



  app.get('/authors/:id', async (req, res) => {
    const id = req.params.id;
  const author = await AuthorModel.findById(id);
  console.log('author found: ', author);
  if (!author) {
    res.status(204).send("author not found!");
  } else {
    res.status(200).send({
      data: author,
      message: "data get success!",
    });
  }
  })



  app.delete('/authors/:id', async (req, res) => {
    const id = req.params.id;
  const author = await AuthorModel.findByIdAndDelete(id);
  if (author === undefined) {
    res.status(404).send("author not found");
  } else {
    res.status(203).send({
      data: author,
      message: "author deleted successfully",
    });
  }
  })
  


  app.post('/authors', async (req, res) => {
    const { name, surname, birthdate, genre, isDead, isMale, imageUrl } = req.body;
  const newAuthor = new AuthorModel({ 
    // id: crypto.randomUUID(),
    name: name,
    surname: surname,
    birthdate: birthdate,
    genre: genre,
    isDead: isDead,
    isMale: isMale,
    imageUrl: imageUrl
  });
  await newAuthor.save();
  res.status(201).send("created");
    
    
  })



app.put("/authors/:id", async(req, res) => {
  const id = req.params.id;
  const { name, surname, birthdate, genre, isDead, isMale, imageUrl } = req.body;
  const existedAuthor = await AuthorModel.findByIdAndUpdate(id,{
    name: name,
    surname: surname,
    birthdate: birthdate,
    genre: genre,
    isDead: isDead,
    isMale: isMale,
    imageUrl: imageUrl
  });
  if(existedAuthor == undefined){
    res.status(404).send("author not found");
  }else{
    res.status(200).send(`${name} updated succesfully`)
  }
  });
  

  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })