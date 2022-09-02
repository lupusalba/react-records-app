import Book from '../Components/Book'
import data from '../../src/data'

  // FOR SORTING
  // return only which has "category1" sa value in category array
  // if(d.category.includes("category1")){
  //   return (
  //     <Book 
  //       key={d._id}
  //       book={d}
  //     />
  //   )

const allBooks = data.map( d => {
  console.log(d)
  return (
    <Book 
      key={d._id}
      book={d}
    />
  )
})

const Books = () => {
  return (
    <div className="books">
      {allBooks}
    </div>
  )
}

export default Books
