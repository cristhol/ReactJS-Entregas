import { useState } from 'react'
import reactLogo from './assets/react.svg'



import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  

  return (
    <>
        <NavBar />
        <ItemListContainer   greeting = {'saludo'} />
    </>
  )
}

export default App
