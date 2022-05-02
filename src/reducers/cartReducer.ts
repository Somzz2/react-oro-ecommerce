import { Item } from "../types/Item";
import { reducerActionType } from "../types/reducerActionType";


export type CartState = {
    products: Item[]
}

const byId = (id: string) => (product: Item) => product.id === id;
const amountIncremented = (product: Item): Item => ({
  ...product,
  qt: product.qt + 1,
});
const amountDecremented = (product: Item): Item => ({
  
  ...product,
  qt: product.qt - 1,
});

export const cartInitialState: CartState = {
    products: []
}



export const cartReducer = (state: CartState, action: reducerActionType) => {
    switch (action.type) {
        case "PRODUCT_ADDED":
          const payload = action.payload as Item;
          const productExists = state.products.some(byId(payload.id));
    
          if (productExists) {
            const products = state.products.map((product) => {
              const isSameProduct = product.id === payload.id;
              return isSameProduct ? amountIncremented(product) : product;
            });
    
            return { ...state, products };
          }
    
          return { ...state, products: [...state.products, payload] };
        case "CLEAR_CART":
            return cartInitialState
        case "INCREASE":
          const payload2 = action.payload as any;
          const productExists2 = state.products.some(byId(payload2.id));
          if (productExists2) {
            const products = state.products.map((product) => {
              
              const isSameProduct = product.id === payload2.id;
              
              return isSameProduct ? amountIncremented(product) : product;
            });
    
            return { ...state, products };
          }
    
          return { ...state, products: [...state.products, payload2] };
          case "DECREASE":
            const payload3 = action.payload as Item;
            const productExists3 = state.products.some(byId(payload3.id));
            if (productExists3) {
              const products = state.products.map((product) => {
                const isSameProduct = product.id === payload3.id;
                
                return isSameProduct && product.qt > 1 ? amountDecremented(product) : product
                
              });
      
              return { ...state, products };
            }
      
            return { ...state, products: [...state.products, payload3] };
            
        case "PRODUCT_REMOVE":
          const payload4 = action.payload as any;
          
          return {
            ...state,
            // After your edit:
            products: state.products.filter(item => item.id !== payload4.id)
          }
          
        default:
          return state;
      }
    };

