import {createContext, useState} from "react"

export const CartContext =createContext()

export const CartProvider =({children}) => {
    const [items,setItems] = useState([])
    const addItem = (producto,quantity) => {
        
        const alreadyExists = items.some(item => item.id === producto.id)
        
        if(!alreadyExists) setItems(prev => [...prev, { ...producto, quantity }])
        else{
            const actualizarProductos = items.map(item => {
                if ( item.id === producto.id )
                return {
                    ...item,
                    quantity: item.quantity + quantity,
                }
                else return item
            })
            setItems(actualizarProductos)
        }
    }

    const totalWidget = items.reduce((act,val) => act + val.quantity, 0)
    const removeItem = id => {
        const itemsFiltered = items.filter(item => item.id!==id)
        setItems(itemsFiltered)
    }
    const clear = () => setItems([])
        return(
            <CartContext.Provider
            value={{ addItem, items, removeItem, clear, totalWidget}}
            >
                {children}
            </CartContext.Provider>
        )
}