import React from 'react'
import { useSelector } from 'react-redux'

const ShowBooks = () => {
  const books = useSelector((state)=>state.booksReducer.books);
  //console.log(books);
  return (
    <div>
      <h2>List of Books</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            books && books.map((book)=>{
              return <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default ShowBooks
