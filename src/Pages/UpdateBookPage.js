import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import Axios from 'axios'
import UpdateBook from "../Components/UpdateBook"

const UpdateBookPage = () => {


  const { _id } = useParams();
//   const [bookToUpdate, setBookToUpdate] = useState({});

//   useEffect(() => {
//     Axios.get(`http://localhost:8080/book/${_id}`).then((res) => {
//       setBookToUpdate(res.data.data.oneBook)
//       //console.log(bookToUpdate)
//     })
//   }, [])

// useEffect(() => {
//   console.log(bookToUpdate)
// }, [bookToUpdate])

  return (
    <div>
      {
        <UpdateBook bookID={_id} />
      }
    </div>
  )
}

export default UpdateBookPage
