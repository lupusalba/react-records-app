import { useEffect, useState } from 'react'
import Book from '../Components/Book'
import Axios from 'axios'


  // FOR SORTING
  // return only which has "category1" sa value in category array
  // if(d.category.includes("category1")){
  //   return (
  //     <Book 
  //       key={d._id}
  //       book={d}
  //     />
  //   )


  const Books = (book) => {
  const [listOfBooks, setListOfBooks] = useState([])
  
  useEffect(() => {
    Axios.get("http://localhost:8080/books").then((res) => {
      //console.log(res.data.data.allBooks)
      setListOfBooks(res.data.data.allBooks)
      console.log(listOfBooks)
    })
  }, [])




  return (
    <div className="books">

      {
        
        listOfBooks.map((book) => {
          return (
            <Book book={book} key={book._id} />
          )
        })
      }
      
    </div>
  )
}

export default Books
