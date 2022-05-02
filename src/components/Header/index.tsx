import * as C  from './styles'
import anel from '../../assets/images/anel.png';
import profile from '../../assets/images/profile.png';
import wishlist from '../../assets/images/wishlist.png';
import cart from '../../assets/images/cart.png';
import { Button } from '../Button';
import { Context } from '../../contexts/Context';
import { useContext, useEffect, useState } from 'react';
import { useRef } from 'react';
import { Item } from '../../types/Item';

export const Header = () => {
    let subtotal = 0;
    const refDiv = useRef<any>();
    const {state, dispatch} = useContext(Context)
    const [total, setTotal] = useState<number>(0)
    const totalItems = state.item.products;
    
    useEffect(()=>{
        for (let i = 0; i < state.item.products.length; i++) {
            let soma = state.item.products[i].value * state.item.products[i].qt;
            subtotal += soma;
            
        
        }    
        setTotal(subtotal)
    },[totalItems])    
const openCart = () => {
    refDiv.current.style.display = 'flex';
}

const increaseqt = (e: any) => {
    dispatch({
       type: 'INCREASE',
       payload: {
          id: e.target.dataset.id
       }
    })
    
 }

const decreaseqt = (e: any) => {
    
    dispatch({
        type: 'DECREASE',
        payload: {
        
           id: e.target.dataset.id
        }
     })
}
const clearCart = () => {
    dispatch({
        type: 'CLEAR_CART'
    })
}

const remove = (e: any) => {
    dispatch({
        type: 'PRODUCT_REMOVE',
        payload: {
            id: e.target.dataset.id
        }
    })
}

    return (
        <C.Container>
            <C.Logo src={anel}/> 
            <C.InputSearch>
                <input type='search' placeholder='Procure aqui' />
                <Button>Pesquisar</Button>
            </C.InputSearch>
            <C.Shopping>
                <a><img src={profile} width='20' alt='profile' /></a>
                <a><img src={wishlist} width='20' alt='wishlist' /></a>
                <a onClick={openCart}><img src={cart} width='20' alt='cart' /></a>
                <span>{state.item.products.length} </span>
                
            </C.Shopping>
        

            <div ref={refDiv} className='cart'>
                    <div onClick={()=>{refDiv.current.style.display = 'none';}} className='close'>❌</div>
                
                    <div className='cart-items'>
                        {state.item.products.map((i: Item, k: number)=>
                        
                            <div className='cartItem' key={k}>
                                <img src={i.img} />
                                <span>{i.name}</span>
                                <span>R${i.value},00</span>
                                <span>Quantidade: {i.qt}</span>
                                <span>Subtotal: R$ {i.value * i.qt}</span>
                                <div className='buttons'>
                                    <Button data-id={i.id} onClick={decreaseqt}>-</Button>
                                    <Button data-id={i.id} onClick={increaseqt}>+</Button>
                                    <Button data-id={i.id} onClick={remove}>Remover</Button>
                                </div>
                            
                            </div>
                        )}
                        <span className='total'>Total = R${total}</span>
                        <Button  onClick={clearCart}>Zerar carrinho</Button>
                    </div>
                    

                </div>      
        </C.Container>
        
    )
}