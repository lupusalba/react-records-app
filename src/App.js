import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Axios from 'axios'
import Home from './Pages/Home'
import Error from './Pages/ErrorNotFound'
import BookPage from './Pages/BookPage'
import UpdateBookPage from './Pages/UpdateBookPage'
import NewBook from './Pages/NewBookPage'
import DeleteBook from './Pages/DeleteBook'
import './App.css';

function App() {


  // const [listOfBooks, setListOfBooks] = useState([])
  
  // useEffect(() => {
  //   Axios.get("http://localhost:3000/").then((response) => {
  //     setListOfBooks([response.data])
  //   })
  //   console.log("from app.js")
  //   console.log(listOfBooks)
  // }, [])

  return (
    <div className="App">
{/*       
      <Home /> */}

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/new-book" element={<NewBook />} />
          <Route exact path="/books" element={<Home />} />
          <Route exact path="/book/:_id" element={<BookPage />} />
          <Route exact path="/update-book/:_id" element={<UpdateBookPage />} />
          <Route exact path="/delete-book/:_id" element={<DeleteBook />} />


          
          {/* <Route exact path="/books" element={<BookPage />} /> */}
          {/* <Route exact path="/edit" element={<EditBook />} /> */}
          {/* <Route exact path="/delete-book" element={<DeleteBook />} /> */}
          <Route exact path="/*" element={<Error />} />
        </Routes>
      </Router>  

    </div>
  );
}

export default App;
