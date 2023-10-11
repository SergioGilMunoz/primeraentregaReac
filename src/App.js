import { BrowserRouter, Routes,Route } from 'react-router-dom';

import './App.css';
import { ItemDetalleContainer } from './components/ItemDetalleContainer';
import {ItemListContainer} from "./components/ItemListContainer"
import { NavBar } from './components/NavBar';
import { CartProvider } from './contexts/CartContext';
import { Cart } from "./components/Cart"





function App (){
 
  return(
  <>
  <CartProvider>
  <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element ={<ItemListContainer greeting="Buenos Dias"/>} />
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/categoria/:id" element ={<ItemListContainer greeting="Buenos Dias"/>}/>
        <Route path="/item/:id" element ={<ItemDetalleContainer />}/>
      </Routes>
    </BrowserRouter>
    </CartProvider>
  </>
);
}
export default App  ;



