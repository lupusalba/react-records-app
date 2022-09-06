import { useState, useEffect} from 'react'
import Axios from 'axios'



const UpdateBook = (bookID) => {

  const [oldBook, setOldBook] = useState({})
  const [modifiedBook, setModifiedBook] = useState({})

  console.log(bookID.bookID)
  useEffect(() => {
    Axios.get(`http://localhost:8080/book/${bookID.bookID}`).then((res) => {
      setOldBook(res.data.data.oneBook)
      console.log(oldBook)
    })
  }, [])


useEffect(() => {
  setModifiedBook(oldBook)
  console.log(modifiedBook)
}, [oldBook])




  const updateOldBook = (id) => {
    //let id = bookID.bookID
    Axios.patch(`"http://localhost:8080/update-book`, {
      // title: modifiedBook.title,
      // author: modifiedBook.author,
      // description: modifiedBook.description,
      // status: modifiedBook.status,
      // heroImage: modifiedBook.heroImage,
      // lastUpdated: modifiedBook.lastUpdated,
      // alternativeNames: modifiedBook.alternativeNames,
      // tags: modifiedBook.tags,
      // category: modifiedBook.category,
      // chapters: modifiedBook.chapters,
      // volumes: modifiedBook.volumes,
      // links: modifiedBook.links
      id,
      modifiedBook
    }).then(response => {
      console.log("succes")
    })
  }



  const handelChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target

    setModifiedBook(prevBook => ({
      ...prevBook,
      [name]: value
    }))
  }


  console.log(oldBook.author)
  return (
    <div className="newBook">
          <div className="bookDetailsData">
        <div className="bookDetailsDescription">
          <span className="bigBold">Description</span>
          <p>{modifiedBook.description}</p>
        </div>

        <div className="bookDetailsPartsContainer">
          <div className="bookDetailsParts">
            <span className="bold">
              {modifiedBook.volumes === 0 ? "Chapters" : "Parts / Volumes"}
            </span>
            <p>{modifiedBook.volumes === 0 ? modifiedBook.chapters : modifiedBook.volumes}</p>
          </div>
          <div className="bookDetailsLastUpdate">
            <span className="bold">Last Update</span>
            <p>{modifiedBook.lastUpdate}</p>
          </div>
        </div>

        <div id="bookAuthor">
          <span className="bold">Author</span>
          <p>{modifiedBook.author}</p>
        </div>





      </div>
      <form onSubmit={updateOldBook}>

        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          // value={modifiedBook.title}
          onChange={handelChange}
        />

        <label htmlFor="author">Author</label>
        <input
          type="text"
          name="author"
          //value={modifiedBook.author}
          onChange={handelChange}
        />

        <label htmlFor="description">description</label>
        <input
          type="text"
          name="description"
          //value={modifiedBook.description}
          onChange={handelChange}
        />

        <label htmlFor="status">status</label>
        <input
          type="text"
          name="status"
          //value={modifiedBook.status}
          onChange={handelChange}
        />
        <label htmlFor="heroImage">heroImage</label>
        <input
          type="text"
          name="heroImage"
          //value={modifiedBook.heroImage}
          onChange={handelChange}
        />
        <label htmlFor="lastUpdated">lastUpdated</label>
        <input
          type="date"
          name="lastUpdated"
          //value={modifiedBook.lastUpdated}
          onChange={handelChange}
        />
        <label htmlFor="alternativeNames">alternativeNames</label>
        <input
          type="text"
          name="alternativeNames"
          //value={modifiedBook.alternativeNames}
          onChange={handelChange}
        />
        <label htmlFor="tags">tags</label>
        <input
          type="text"
          name="tags"
          //value={modifiedBook.tags}
          onChange={handelChange}
        />
        <label htmlFor="category">category</label>
        <input
          type="text"
          name="category"
          //value={modifiedBook.category}
          onChange={handelChange}
        />
        <label htmlFor="chapters">chapters</label>
        <input
          type="text"
          name="chapters"
          //value={modifiedBook.chapters}
          onChange={handelChange}
        />
        <label htmlFor="volumes">volumes</label>
        <input
          type="text"
          name="volumes"
          //value={modifiedBook.volumes}
          onChange={handelChange}
        />

        <label htmlFor="links">links</label>
        <input
          type="text"
          name="links"
          //value={modifiedBook.links}
          onChange={handelChange}
        />



        <button onClick={()=> {updateOldBook(bookID.bookID)}}>Save Changes</button>
      </form>
    </div>
  )
}

export default UpdateBook
