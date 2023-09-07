import { BrowserRouter, Routes,Route } from 'react-router-dom';

import './App.css';
import { ItemDetalleContainer } from './components/ItemDetalleContainer';
 import {ItemListContainer} from "./components/ItemListContainer"
import { NavBar } from './components/NavBar';




function App (){

  return(
  <>
  <BrowserRouter>
    <NavBar/>
      <Routes>
      <Route path="/" element ={<ItemListContainer greeting="Buenos Dias"/>} />
      <Route path="/categoria/:id" element ={<ItemListContainer greeting="Buenos Dias"/>}/>
      <Route path="/item/:id" element ={<ItemDetalleContainer />}/>
  
      </Routes>
    </BrowserRouter>
  </>
);
}
export default App  ;



