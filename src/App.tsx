import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import './App.css';
import './normalize.css';

import Header from './components/Header';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CarContext } from './components/Context';
import { item } from './components/Interfaces';
import Cart from './components/Cart';


function App() {

  const [cart, setCart] = useState([]);
  
  
  const clearCarrito = () => {
    setCart(['']);
  }
  console.log(cart);


  return (
    <CarContext.Provider value={{cart, setCart}}> 
      <BrowserRouter>
        <div className="App">
          <Header name="TITULO DE LA PAGINA"/>
          <div className='body'>
            <Routes>
              <Route path='/' element={ <ItemListContainer/> }/>
              <Route path='/detail/:idItem' element={ <ItemDetailContainer/> }/>
              <Route path='/category/:category' element={ <ItemListContainer/> }/>
              <Route path='/cart' element={ <Cart/> }/>
            </Routes>
          </div>
          <Footer/>
        </div>
      </BrowserRouter>
    </CarContext.Provider>
  );
}

export default App;
