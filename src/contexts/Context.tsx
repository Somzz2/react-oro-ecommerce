


import { createContext, useReducer, Children } from "react";
import { Item } from "../types/Item";
import { CartState, cartInitialState, cartReducer } from "../reducers/cartReducer";
import { reducerActionType } from "../types/reducerActionType";

interface ComponentWithChildrenProps {
    children: React.ReactNode
}
  

type initialStateType = {
    item: CartState;
}


type ContextType = {
    state: initialStateType;
    dispatch: React.Dispatch<any>
}


const initialState = {
    item: cartInitialState
}


export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
});

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
    item: cartReducer(state.item, action)
})

/*export const CartProvider: React.ReactNode = ({children}) => {
    const [state, dispatch] = useReducer(mainReducer, initialState)

    return (
        <CartProvider value={{state, dispatch}}>
            {children}
        </CartProvider>
    )
}*/

function CartProvider({children}: ComponentWithChildrenProps) {
    const [state, dispatch] = useReducer(mainReducer, initialState)

    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}

export {CartProvider};