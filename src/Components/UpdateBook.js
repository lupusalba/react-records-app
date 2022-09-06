import { useState, useEffect } from 'react'
import Axios from 'axios'



const UpdateBook = (bookID) => {

  const [oldBook, setOldBook] = useState({
    title: "",
    author: "",
    description: "",
    status: "",
    heroImage: "",
    lastUpdated: "",
    alternativeNames: [],
    tags: [],
    category: [],
    chapters: 0,
    volumes: 0,
    links: []
  })

  const [test, setTest] = useState({
    title: "1",
    author: "2",
    description: "3",
    status: "4",
    heroImage: "5",
    lastUpdated: "08/08/2021",
    alternativeNames: [],
    tags: [],
    category: [],
    chapters: 10,
    volumes: 0,
    links: []
  })

  console.log(bookID.bookID)
  useEffect(() => {
    Axios.get(`http://localhost:8080/book/${bookID.bookID}`).then((res) => {
      setOldBook(res.data.data.oneBook)
    })
  }, [])

  console.log(`http://localhost:8080/update-book/${bookID.bookID}`)




  // const updateOldBook = () => {
      console.log(oldBook)
  //   //let id = bookID.bookID
  //   Axios.patch(`"http://localhost:8080//update-book/${bookID}`, {
  //     title: oldBook.title,
  //     author: oldBook.author,
  //     description: oldBook.description,
  //     status: oldBook.status,
  //     heroImage: oldBook.heroImage,
  //     lastUpdated: oldBook.lastUpdated,
  //     alternativeNames: oldBook.alternativeNames,
  //     tags: oldBook.tags,
  //     category: oldBook.category,
  //     chapters: oldBook.chapters,
  //     volumes: oldBook.volumes,
  //     links: oldBook.links

  //   }).then(response => {
  //     console.log("succes")
  //   })
  // }

    const updateOldBook = async(e) => {
    let _id = bookID.bookID
    let z = await Axios.patch(`http://localhost:8080/update-book/${_id}`, oldBook)
    console.log(z)
  }



  const handelChange = (e) => {
    e.preventDefault()
    const { name, value} = e.target

    setOldBook(prevBook => ({
      ...prevBook,
      [name]: value
    }))
    console.log(oldBook)
  }


  console.log(oldBook.author)
  return (
    <div className="newBook">
      <div className="bookDetailsData">
        <div className="bookDetailsDescription">
          <span className="bigBold">Description</span>
          <p>{oldBook.title}</p>
        </div>

        <div id="bookAuthor">
          <span className="bold">Author</span>
          <p>{oldBook.author}</p>
        </div>
      </div>

      <form onSubmit={() => { updateOldBook(bookID.bookID) }}>

        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          placeholder={oldBook.title}
          value={oldBook.title}
          onChange={handelChange}
        />
        <p>{oldBook.title}</p>

        <label htmlFor="author">Author</label>
        <input
          type="text"
          name="author"
          placeholder={oldBook.author}
          value={oldBook.author}
          onChange={handelChange}
        />

        <label htmlFor="description">description</label>
        <input
          type="text"
          name="description"
          placeholder={oldBook.description}
          value={oldBook.description}
          onChange={handelChange}
        />

        <label htmlFor="status">status</label>
        <input
          type="text"
          name="status"
          placeholder={oldBook.status}
          value={oldBook.status}
          onChange={handelChange}
        />
        <label htmlFor="heroImage">heroImage</label>
        <input
          type="text"
          name="heroImage"
          placeholder={oldBook.heroImage}
          value={oldBook.heroImage}
          onChange={handelChange}
        />
        <label htmlFor="lastUpdated">lastUpdated</label>
        <input
          type="date"
          name="lastUpdated"
          placeholder={oldBook.lastUpdated}
          value={oldBook.lastUpdated}
          onChange={handelChange}
        />
        <label htmlFor="alternativeNames">alternativeNames</label>
        <input
          type="text"
          name="alternativeNames"
          placeholder={oldBook.alternativeNames}
          value={oldBook.alternativeNames}
          onChange={handelChange}
        />
        <label htmlFor="tags">tags</label>
        <input
          type="text"
          name="tags"
          placeholder={oldBook.tags}
          value={oldBook.tags}
          onChange={handelChange}
        />
        <label htmlFor="category">category</label>
        <input
          type="text"
          name="category"
          placeholder={oldBook.category}
          value={oldBook.category}
          onChange={handelChange}
        />
        <label htmlFor="chapters">chapters</label>
        <input
          type="text"
          name="chapters"
          placeholder={oldBook.chapters}
          value={oldBook.chapters}
          onChange={handelChange}
        />
        <label htmlFor="volumes">volumes</label>
        <input
          type="text"
          name="volumes"
          placeholder={oldBook.volumes}
          value={oldBook.volumes}
          onChange={handelChange}
        />

        <label htmlFor="links">links</label>
        <input
          type="text"
          name="links"
          placeholder={oldBook.links}
          value={oldBook.links}
          onChange={handelChange}
        />



        <button onClick={() => { updateOldBook(bookID.bookID) }}>Save Changes</button>
      </form>
    </div>
  )
}

export default UpdateBook
