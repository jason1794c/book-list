import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext'

export default function BookForm() {
    const { addBook } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    return (
        <form>
            <input type="text" placeholder='book title' value={title}
                onChange={(event) => setTitle(event.target.value)} required />
            <input type="text" placeholder='author' value={author}
                onChange={(event) => setAuthor(event.target.value)} required />
            <input type="submit" value="add book" />
        </form>
    )
}
