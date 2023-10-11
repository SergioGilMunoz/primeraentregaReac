
import{useContext} from "react"
import{ItemCount}from "./ItemCount"
import {CartContext}from "../contexts/CartContext"



export const ItemDetail = ({producto}) => {
    const {addItem} = useContext(CartContext)
    const onAdd = count => addItem(producto,count)
    
    return (
<div style ={{display:"flex", flexWrap:"wrap"}}>
<h1>{producto.nombre}</h1>
<img alt="" src={producto.imagen} />  
 <div>Stock: {producto.stock}  </div> 
 <div>Precio: {producto.precio} </div>        
<ItemCount stock={producto.stock} onAdd ={onAdd}/>
</div>

)}