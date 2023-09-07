


export const ItemDetail = ({producto}) => (

<div style ={{display:"flex", flexWrap:"wrap"}}>

<h1>{producto.name}</h1>
<img alt="" src={producto.foto} />  
 <div>{producto.stock}  </div>         

</div>

)