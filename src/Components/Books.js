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
//   const [listOfBooks, setListOfBooks] = useState([])
  
//   useEffect(() => {
//     Axios.get("http://localhost:3001/").then((res) => {
//       console.log(res)
//     })
//   }, [])


  console.log("from books.js")
  console.log(book)

  return (
    <div className="books">
      {/* {listOfBooks.map((b) => {
          <Book book={b} />
        })
      } */}
      books
    </div>
  )
}

export default Books
