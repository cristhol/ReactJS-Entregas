import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'

import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './Containers/CartContainer/CartContainer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <BrowserRouter>
        <div className='App-Container'>
              <NavBar />
              <Routes>
                
                <Route path='/' element={ <ItemListContainer />} />
                <Route path='/ products' element={ <ItemListContainer />} />
                <Route path='/category/:id' element={ <ItemListContainer />} />
                <Route path='/detail/:productId' element={ <ItemDetailContainer />} />
                <Route path='/ Cart' element={ <CartContainer />} />
                <Route path='*' element={ <Navigate to='/' />} />
                
              </Routes>          
        </div>
      </BrowserRouter>
  );
}

export default App;
