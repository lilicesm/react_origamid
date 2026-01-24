import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Produtos from './components/Produtos';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <div className='content'></div>
        <Routes>
          <Route path="/" element={<Produtos />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>);
};

export default App;