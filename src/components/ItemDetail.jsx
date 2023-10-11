
import{useContext} from "react"
import{ItemCount}from "./ItemCount"
import {CartContext}from "../contexts/CartContext"



export const ItemDetail = ({producto}) => {
    const {addItem} = useContext(CartContext)
    const onAdd = count => addItem(producto,count)
    
    return (
        <div style={{ flexDirection: "column" }}>
        <h1 className="titulo-superior">{producto.nombre}</h1>
        <div className="imagen-con-marco">
          <img alt="" src={producto.imagen} />
        </div>
        <div>
          <div className="detalle">Stock: {producto.stock}</div>
          <div className="detalle">Precio: {producto.precio}</div>
        </div>
        <div>
          <ItemCount stock={producto.stock} onAdd={onAdd} />
        </div>
      </div>
      


)}



