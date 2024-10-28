import { useState } from "react"
import { MenuItemss, OrderItemss } from "../types"

export default function useOrder() {
    const [order, setOrder] = useState<OrderItemss[]>([])
    const [tip, setTip] = useState(0)


    const addItem = (item : MenuItemss) => {
        const orderItem = order.find(orderItem => orderItem.id === item.id)
        console.log(orderItem)
        
        if (orderItem) {
            const newOrder = order.map(orderItem => orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity + 1} : orderItem)
            setOrder(newOrder)
        } else {
            const newItem: OrderItemss = {...item, quantity:1}

            setOrder([...order, newItem])
        }

            
        }
        
    
    const removeItem = (id: MenuItemss['id']) => {
        const updatedOrder = order.filter( target => target.id !== id)
        console.log(updatedOrder)
            setOrder(updatedOrder)

        }
    
    const sendOrder = () => {
        setOrder([])
        setTip(0)
    }
            
        return { addItem, order, tip, setTip, removeItem, sendOrder

  }
}
