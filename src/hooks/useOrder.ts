import { useState } from "react"
import { OrderItemss } from "../types"

export default function useOrder() {
    const [order, setOrder] = useState<OrderItemss[]>([])
    const [tip, setTip] = useState(0)


    const sendOrder = () => {
        setOrder([])
        setTip(0)
    }
            
        return { order, tip, setTip, sendOrder

  }
}
