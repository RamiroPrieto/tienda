import React from 'react';
import logo from './logo.svg';

import './App.css';
import './normalize.css';

import Header from './components/Header';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <Header name="TITULO DE LA PAGINA"/>
      <div className='body'>
      <ItemListContainer mensaje="Pagina en progreso..."/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
