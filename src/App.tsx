import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import './App.css';
import './normalize.css';

import Header from './components/Header';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header name="TITULO DE LA PAGINA"/>
        <div className='body'>
          <Routes>
            <Route path='/' element={ <ItemListContainer/> }/>
            <Route path='/detail/:idItem' element={ <ItemDetail/> }/>
          </Routes>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
