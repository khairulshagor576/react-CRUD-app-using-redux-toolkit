import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBook } from './BookSlice';
import { Link } from 'react-router-dom';

const ShowBooks = () => {
  const books = useSelector((state)=>state.booksReducer.books);
  const dispatch = useDispatch();
  //console.log(books);
  const handleDeleteBook = (id) =>{
    dispatch(deleteBook(id));
  }
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
              const {id,title,author}=book;
              return <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>
                  <Link to="/edit-book" state={{ id,title,author }}>
                       <button>Edit</button>
                  </Link>
                  <button onClick={()=>{handleDeleteBook(book.id)}}>Delete</button>
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
