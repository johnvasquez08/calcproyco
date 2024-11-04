import { formatCurrency } from "../helpers"
import { OrderActions  } from "../reducers/order-reducer"
import { OrderItemss } from "../types"

type OrderContentPros = {
    order: OrderItemss[]
    dispatch: React.Dispatch<OrderActions>

}
export default function OrderContent({order, dispatch}: OrderContentPros, {}) {


  return (
    <div>
        <h2 className="font-black text-4xl text-center">Consumo</h2>
        <div className="space-y-3 mt-5">
            
             {(order.map(item => (
                <div key={item.id} className="flex justify-between border-t-2 border-gray-500 py-5 last-of-type:border-b">
                    <div>
                        <p className="">
                            {item.name}
                        </p>
                        <p className="font-black">
                            Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                        </p>

                    </div>
                    

                    <button className="bg-red-600 h-8 w-8 hover:bg-red-800 text-white font-black rounded-full" onClick={() => dispatch({type:"removeitem", payload: {id: item.id} })}>
                        X
                    </button>
                </div>
             )))
             }
        </div>
      
    </div>
  )
}
