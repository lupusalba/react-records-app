import { useState, useEffect} from 'react'
import Axios from 'axios'



const UpdateBook = (oldBookData) => {

  const [oldBook, setOldBook] = useState({oldBookData})

  console.log(oldBookData)
  console.log(oldBook)




  const updateOldBook = () => {
    Axios.patch("http://localhost:8080/update-book", {
      title: oldBook.title,
      author: oldBook.author,
      description: oldBook.description,
      status: oldBook.status,
      heroImage: oldBook.heroImage,
      lastUpdated: oldBook.lastUpdated,
      alternativeNames: oldBook.alternativeNames,
      tags: oldBook.tags,
      category: oldBook.category,
      chapters: oldBook.chapters,
      volumes: oldBook.volumes,
      links: oldBook.links
    }).then(response => {
      console.log("succes")
    })
  }

  const handelChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target

    setOldBook(prevBook => ({
      ...prevBook,
      [name]: value
    }))
    console.log(oldBook)
  }


  return (
    <div className="newBook">
      <form onSubmit={updateOldBook}>

        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={oldBook.title}
          onChange={handelChange}
        />

        <label htmlFor="author">Author</label>
        <input
          type="text"
          name="author"
          value={oldBook.author}
          onChange={handelChange}
        />

        <label htmlFor="description">description</label>
        <input
          type="text"
          name="description"
          value={oldBook.description}
          onChange={handelChange}
        />

        <label htmlFor="status">status</label>
        <input
          type="text"
          name="status"
          value={oldBook.status}
          onChange={handelChange}
        />
        <label htmlFor="heroImage">heroImage</label>
        <input
          type="text"
          name="heroImage"
          value={oldBook.heroImage}
          onChange={handelChange}
        />
        <label htmlFor="lastUpdated">lastUpdated</label>
        <input
          type="date"
          name="lastUpdated"
          value={oldBook.lastUpdated}
          onChange={handelChange}
        />
        <label htmlFor="alternativeNames">alternativeNames</label>
        <input
          type="text"
          name="alternativeNames"
          value={oldBook.alternativeNames}
          onChange={handelChange}
        />
        <label htmlFor="tags">tags</label>
        <input
          type="text"
          name="tags"
          value={oldBook.tags}
          onChange={handelChange}
        />
        <label htmlFor="category">category</label>
        <input
          type="text"
          name="category"
          value={oldBook.category}
          onChange={handelChange}
        />
        <label htmlFor="chapters">chapters</label>
        <input
          type="text"
          name="chapters"
          value={oldBook.chapters}
          onChange={handelChange}
        />
        <label htmlFor="volumes">volumes</label>
        <input
          type="text"
          name="volumes"
          value={oldBook.volumes}
          onChange={handelChange}
        />

        <label htmlFor="links">links</label>
        <input
          type="text"
          name="links"
          value={oldBook.links}
          onChange={handelChange}
        />



        <button onClick={updateOldBook}>Save Changes</button>
      </form>
    </div>
  )
}

export default UpdateBook
