import { useState } from "react" ;

export const ItemCount = ({onAdd,stock} ) =>{
    const [count , setCount] = useState(1);
    
    const Incrementar = () =>{
       
        if(stock>count){
            setCount(prev=>prev +1);
        }
    }
    const Decrementar = () =>{
        if(count >1){
            setCount(prev=>prev -1);
        }
    }
    return(
        <div className="itemCount">
        <span onClick={Decrementar} className="boton-span">-</span>
        <span className="count-span">{count}</span>
        <span onClick={Incrementar} className="boton-span">+</span>
        <button className="boton-agregar" onClick={() => onAdd(count)}>Agregar al Carrito</button>
      </div>
      
    )
}

