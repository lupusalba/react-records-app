import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Error from './Pages/ErrorNotFound'
import BookPage from './Pages/BookPage'
import EditBook from './Pages/EditBook'
import NewBook from './Pages/NewBook'
import DeleteBook from './Pages/DeleteBook'
import './App.css';

function App() {
  return (
    <div className="App">
{/*       
      <Home /> */}

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/:_id" element={<BookPage />} />
          {/* <Route path="/books" element={<BookPage />} /> */}
          <Route path="/edit:_id" element={<EditBook />} />
          <Route path="/edit" element={<EditBook />} />
          <Route path="/new-book" element={<NewBook />} />
          <Route path="/delete-book:_id" element={<DeleteBook />} />
          <Route path="/delete-book" element={<DeleteBook />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>  

    </div>
  );
}

export default App;
