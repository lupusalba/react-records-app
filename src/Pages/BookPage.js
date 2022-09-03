import { useParams } from 'react-router'
import BookDetails from '../Components/BookDetails'
import data from '../data'

const BookPage = () => {

  const { _id } = useParams();

const targetBook = data.map( b => {
  if(b._id == _id) {
    return <BookDetails book={b}/>
  }
})

//console.log(_id)



  return (
    <div className="BookPage">

      {targetBook}
      



    </div>
  )
}

export default BookPage
