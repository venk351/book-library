import React from 'react';
import {useContext} from 'react'
import { BookContext } from '../BookContext';
import { useLocation } from 'react-router-dom';

export default function Books(){
    const books = useContext(BookContext);
    const query = new URLSearchParams(useLocation().search)
    const search = query.get("search") || ""; 
    const filteredSearch = books.filter(book => book.title.toLowerCase().includes(search.toLowerCase()))
    return(
        <div>
            <h2>All Books</h2>
            <ul>
                {filteredSearch.map((book)=>(
                <li key={book.id}>{book.title} by {book.author}</li>))}
            </ul>
        </div>
    )
}