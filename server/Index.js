const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ModelBook = require('./Models/ModelBook')

const app = express();

// const router = express.router();

app.use(express.json());
app.use(cors());

const PORT = 8080;

app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});

//conect to database
const DB = 'mongodb+srv://admin:2khpm57pTE6y2Rg@readersrecords.grfazqk.mongodb.net/bookData?retryWrites=true&w=majority';
mongoose.connect(DB, {
  useNewUrlParser: true
}).then(() => {
  console.log('DB CONECTED...')
});





app.post('/new-book', async(req,res) => {
  const Book = new ModelBook(req.body)
  try{
      await Book.save()
      res.status(201).json({
          status: 'Success',
          data : {
              Book
          }
      })
  }catch(err){
      res.status(500).json({
          status: 'Failed',
          message : err
      })
  }
})

app.get('/books',  async(req, res) => {
  const allBooks = await ModelBook.find({})
  try {
    res.status(200).json({
      status: "success",
      data: {allBooks}
    })
  } catch(err) {
    res.status(500).json({
      status: "failed",
      message: err
    })
  }
})
