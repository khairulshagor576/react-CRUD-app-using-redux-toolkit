import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { updateBook } from './BookSlice';

const EditBook = () => {
  const location  = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [id,setId] = useState(location.state.id);
  const [title,setTitle] = useState(location.state.title);
  const [author,setAuthor] = useState(location.state.author);
  console.log(location);
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(updateBook({id,title,author}));
    navigate("/show-books",{replace:true});

  }
  return (
    <div>
      <h1>Edit Book</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-field'>
          <label htmlFor='title'>Title:</label>
          <input type='text' id='title' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        </div>
        <div className='form-field'>
          <label htmlFor='author'>Author:</label>
          <input type='text' id='author' value={author} onChange={(e)=>{setAuthor(e.target.value)}}/>
        </div>
        <button>Update Book</button>
      </form>
    </div>
  )
}

export default EditBook
