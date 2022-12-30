import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { CartContextProvider } from './Context/CartContext';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Cart/Checkout';
import Footer from './Components/Footer/Footer';
import Contacto from './Pages/Contacto';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';






function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className='App-Container'>
              <NavBar />
              <Routes>
                
                <Route path='/' element={ <ItemListContainer />} />
                <Route path='/ products' element={ <ItemListContainer />} />
                <Route path='/category/:id' element={ <ItemListContainer />} />
                <Route path='/detail/:productId' element={ <ItemDetailContainer />} />
                <Route path='/cart' element = { <Cart /> } />
                <Route path='/checkout' element = { <Checkout />} />
                <Route path='*' element={ <Navigate to='/' />} />
                <Route path='/contacto' element={ <Contacto /> } />
                
              </Routes>          
        </div>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;

