import { useContext, useState } from "react"
import { CartContext } from "../contexts/CartContext"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { Container,FormGroup,Table } from "react-bootstrap"
import Form from "react-bootstrap/Form";



export const Cart = () => {
    const [formValues,setFormValues]=useState({
        name: "",
        phone: "",
        email: "",
    })

        const {clear, items, removeItem} = useContext(CartContext)

        const total = () =>
        items.reduce(
            (acumulador, valorActual)=>
            acumulador + (valorActual.quantity * valorActual.precio),0)

        const handleChange =ev=>{ 
            setFormValues(prev=>({...prev,
                [ev.target.name]:ev.target.value,
            }))
        }
   

    const sendOrder=()=>{
        const order ={
            buyer:formValues,
            items,
            total:total(),
        }

        const db = getFirestore()
        const orderCollection = collection(db, "orders")

        addDoc(orderCollection, order).then(({ id }) => {
            if (id) {
                setFormValues({
                      name: "",
                      phone: "",
                      email: "",  
                })
                clear()
                alert("Su orden:  " + id + " ha sido completada!")
            }
        })
    }
    return (
        <Container>
            <h1>Cart</h1>
            <Table striped bordered over variant="">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th></th>
                    </tr>
                </thead>
            <tbody>
                {items.map(item=>(
                    <tr key={item.id}>
                        <td>{item.nombre}</td>
                        <td>{"$" + item.precio}</td>    
                        <td>{item.quantity}</td>    
                        <td>
                        <button onClick={() => removeItem(item.id)}>
                            Eliminar
                        </button>
                        </td>    
                    </tr>    
                ))}
            </tbody>    
            <tfoot>
                <tr id="total-header">Total: </tr>
                <tr></tr>
                <tr></tr>
                <tr strong id="total-value">{"$" + total()}</tr>
                <tr></tr>
            </tfoot>        
            </Table>
               <h2>Ingresar datos de Usuario</h2>     
               <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            onChange={handleChange}
                            value={formValues.name}
                            type="text"
                            name="name"
                            required
                            />
                        </Form.Group> 
                        <FormGroup className="mb-3"controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            onChange={handleChange}
                            value={formValues.email}
                            type="email"
                            name="email"
                            required
                            />                  
                        </FormGroup> 
                        <FormGroup className="mb-3"controlId="formBasicEmail">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control
                            onChange={handleChange}
                            value={formValues.phone}
                            type="text"
                            name="phone"
                            required
                            />                  
                        </FormGroup> 
               </Form>
                <button onClick={sendOrder}>Comprar</button>        
        </Container>
    )
}