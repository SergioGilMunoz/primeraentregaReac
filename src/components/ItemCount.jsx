import { useState } from "react" ;

const stock=10;

export const ItemCount = () =>{
    const [count , setCount] = useState(1);
    
    const Incrementar = () =>{
       
        if(stock>count){
            setCount((prev)=>prev +1);
        }
    }
    
    const Decrementar = () =>{
        if(count >1){
            setCount((prev)=>prev -1);
        }
    }

    const onAdd = () =>{
       alert(count)
        }
    return(
        <div className="itemCount">
            <span onClick={Decrementar}>-</span>
            <span>{count}</span>
            <span onClick={Incrementar}>+</span>
            <button onClick={onAdd}>Agregar al Carrito</button>
        </div>
    )
}