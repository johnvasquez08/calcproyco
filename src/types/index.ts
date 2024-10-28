export type MenuItemss = {
    'id' : number,
    'name' : string,
    'price' : number
}

export type OrderItemss = MenuItemss & {
    'quantity' : number
}