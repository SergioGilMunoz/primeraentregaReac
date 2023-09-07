import { Items } from "./Items"


export const ItemList = ({productos})=> (
<>
{productos.map((producto) =>(
    
  <Items key={producto.id} producto={producto}/>
                ))}
  </>
)