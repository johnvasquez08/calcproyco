import MenuItems from "./componets/MenuItems";
import OrderContent from "./componets/OrderContent";
import { menuItems } from "./data/db";
import OrderTotals from "./componets/OrderTotals";
import TipPercentaje from "./componets/TipPercentaje";
import { useReducer } from "react";
import { initialState, orderReducer } from "./reducers/order-reducer";


function App() {
 //const { id, name, price} = menuItems;
  
  const [state, dispatch] = useReducer(orderReducer, initialState)



  return (
    
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Calculadora de propinas y consumo
        </h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black text-center">Menú</h2>
          <div className="space-y-5 mt-5">
              {menuItems.map(item =>
                <MenuItems key={item.id}
                item={item}
                dispatch={dispatch}
                />
              )}

          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {state.order.length > 0 ? (
            <>
            <OrderContent
            order={state.order}
            dispatch={dispatch}
            />
            <TipPercentaje
            dispatch={dispatch}
            tip={state.tip}
            />

            <OrderTotals
                    order={state.order}
                    tip={state.tip}
                    dispatch={dispatch}
              />
            </>  
          ) :<p className="text-center">La orden esta vacia</p>


          }
            
        </div>
      </main>
    </>
  );
}

export default App;
