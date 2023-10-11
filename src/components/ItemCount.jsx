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
            <span onClick={Decrementar}>-</span>
            <span>{count}</span>
            <span onClick={Incrementar}>+</span>
            <button onClick={() => onAdd(count)}>Agregar al Carrito</button>
        </div>
    )
}