import { useMemo } from "react"
import { OrderItemss } from "../types"
import { formatCurrency } from "../helpers"
import { OrderActions } from "../reducers/order-reducer"

type OrderPros = {
    order: OrderItemss[]
    tip: number
    dispatch: React.Dispatch<OrderActions>

}


export default function OrderTotals( {order, tip, dispatch}: OrderPros) {
    const SubtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.price * item.quantity), 0), [order])
    const tipAmount = useMemo(() =>(SubtotalAmount * tip), [tip, SubtotalAmount])
    return (
    <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y Propinas</h2>
                <p>Subtotal a pagar:    
                    <span className="font-bold"> {formatCurrency(SubtotalAmount)} </span>
                </p>
                <p> Propina:
                    <span className="font-bold"> {formatCurrency(tipAmount)} </span>
                </p>
                <p>Total a pagar: 
                    <span className="font-bold"> {formatCurrency(SubtotalAmount + tipAmount)} </span>
                </p>
            </div>
            <button className="w-full disabled:opacity-10"
            disabled={(SubtotalAmount+tipAmount === 0)}>
                    <p className="text-center font-black text-2xl bg-black text-white w-1/2 mx-auto p-3 rounded-2xl " onClick={()=> dispatch({type: "placeorder"})}>Guardar orden</p>
            </button>
            
    </>
    
  )
}
