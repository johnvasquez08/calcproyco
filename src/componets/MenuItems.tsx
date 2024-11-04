import { OrderActions } from "../reducers/order-reducer"
import type { MenuItemss } from "../types"

type MenuItemsPros = {
    item: MenuItemss
    dispatch: React.Dispatch<OrderActions>
}
export default function MenuItems({item, dispatch}:MenuItemsPros) {
    return (
    <button
    className="rounded-lg border-4 border-teal-400 p-3 hover:bg-teal-400 w-full flex justify-between"
    onClick={()=>dispatch({type:"additem", payload: {item}})}>
      <p>
        {item.name}
      </p>
      <p className="font-black font-sans text-lg">
        $ {item.price}
      </p>
    </button>
  )
}
