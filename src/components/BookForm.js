import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext'

export default function BookForm() {
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({type: 'ADD_BOOK', book: {
            title: title,
            author: author
        }});
        setTitle('');
        setAuthor('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='book title' value={title}
                onChange={(event) => setTitle(event.target.value)} required />
            <input type="text" placeholder='author' value={author}
                onChange={(event) => setAuthor(event.target.value)} required />
            <input type="submit" value="add book" />
        </form>
    )
}
