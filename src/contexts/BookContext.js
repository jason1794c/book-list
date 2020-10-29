import React, { createContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

export const BookContext = createContext();

export default function BookContextProvider(props) {
    const [books, setBook] = useState([
        {title: 'name of the wind', author: 'patrick orthfuss', id: 1},
        {title: 'the final empire', author: 'brandon sanderson', id: 2}
    ]);

    const addBook = (title, author) => {
        setBook([...books, { title: title, author: author, id: uuid() }])
    }

    const removeBook = (id) => {
        setBook(books.filter(book => book.id !== id))
    }

    return (
        <div>
            <BookContext.Provider value={{books, addBook, removeBook}}>
                {props.children}
            </BookContext.Provider>
        </div>
    )
}
