import React from 'react';
import {useContext} from 'react'
import { BookContext } from '../BookContext';
import { useParams } from 'react-router-dom';

export default function BookDetails(){
    const books = useContext(BookContext);
    console.log(books)
    const {bookId} = useParams();
    console.log(bookId)
    const book = books.find((book)=> book.id === parseInt(bookId))
    console.log(book)
    if(books.length === 0){
        return(
            <div>Loading....</div>
        )
    }
    if(!book)
        return(<div>Not found</div>)
    return (
        <div>
           <h1>{book.title}</h1>
           <h4>Written By {book.author}</h4>
           <p>{book.description}</p>
        </div>
    )
}