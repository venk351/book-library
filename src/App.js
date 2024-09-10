import React from 'react';
import './App.css'
import Books from './component/Books';
import { BookProvider } from './BookContext';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import BookDetails from './component/BookDetails';
import NotFound from './component/NotFound';
import Debounce from './component/Debounce';
import Filter from './component/Filter';

function App() {
  
  return (
    // <BookProvider>
    //   <Router>
    //     <Routes>
    //       <Route path='/' element={<Books></Books>}></Route>
    //       <Route path='/books' element={<Navigate to="/"></Navigate>}></Route>
    //       <Route path='/books/:bookId' element={<BookDetails></BookDetails>}></Route>
    //       <Route path='*' element={<NotFound></NotFound>}></Route>
    //     </Routes>
    //   </Router>
    // </BookProvider>
    <div>
      <Debounce></Debounce>
      <Filter></Filter>
    </div>
  );
}

export default App;
