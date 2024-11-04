import { MenuItemss, OrderItemss } from "../types";

export type OrderActions =
    {type: 'additem', payload: {item: MenuItemss}} |
    {type: 'removeitem', payload: {id: MenuItemss['id']}} |
    {type: 'placeorder'} |
    {type: 'addtip', payload: {value: number}} 


export type OrderState = {
    order: OrderItemss[],
    tip: number
}

export const initialState: OrderState = {
    order: [],
    tip: 0
}

export const orderReducer = (
    state : OrderState = initialState,
    action : OrderActions
) => {
       
        if (action.type === 'additem') {
            console.log(action.payload.item)
            let order: OrderItemss[] = []
            const orderItem = state.order.find(orderItem => orderItem.id === action.payload.item.id)
            if (orderItem) {
                order = state.order.map(orderItem => orderItem.id === action.payload.item.id ? {...orderItem, quantity: orderItem.quantity + 1} : orderItem)
        } else {
                const newItem: OrderItemss = {...action.payload.item, quantity:1}

                order = [...state.order, newItem]
        }
        return {
            ...state,
            order
        }    
        }
        
        if (action.type === 'removeitem') {
            const updatedOrder = state.order.filter( target => target.id !== action.payload.id)

            return {
                ...state,
                order: updatedOrder
            }
        }
        if (action.type === 'placeorder') {
            
            return {
                order: [], 
                tip: 0
            }
        }
        if (action.type === 'addtip') {
            const tip = action.payload.value
            return {
                ...state,
                tip
            }
        }



    return state
} 