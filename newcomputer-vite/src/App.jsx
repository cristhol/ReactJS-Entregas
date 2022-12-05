import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'

import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
        <div className='App-Container'>
              <NavBar />
              <Routes>
              
                <Route exact path='/productos' element={ <ItemListContainer />} />
                <Route exact path='/categoria/:id' element={ <ItemListContainer />} />
                <Route exact path='/item/:id' element={ <ItemDetailContainer />} />
              </Routes>          
        </div>
      </BrowserRouter>
  );
}

export default App;
