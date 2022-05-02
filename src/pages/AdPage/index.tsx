import * as C from './styles';
import { useContext, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Nav } from '../../components/Nav';
import { items } from '../../data/items';
import { useState } from 'react';
import { Button } from '../../components/Button';
import { Context } from '../../contexts/Context';
import { Item } from '../../types/Item';
import { Products } from '../Products';


export const AdPage = () => {
    let subtotal = 0;
    const {id} = useParams();
    const firstRenderRef = useRef(true);
    
    const refDiv = useRef<any>();
    const [itemActual, setItemActual] = useState<any>()
    const {state, dispatch} = useContext(Context)
    const [yes, setYes] = useState(false)
    const [total, setTotal] = useState<number>(0)
    const totalItems = state.item.products;
    
   
    
    
    useEffect(()=>{
        const itemGen =  () => {
            const final: any =  items.filter(i=>i.id === id)
            setItemActual(final)
            
            }
            itemGen()
        
    },[])

    useEffect(()=>{
        for (let i = 0; i < state.item.products.length; i++) {
            let soma = state.item.products[i].value * state.item.products[i].qt;
            subtotal += soma;
            
        
        }    
        setTotal(subtotal)
    },[totalItems])

  
    
    const handleCartAdd = () => {
        refDiv.current.style.display = 'flex';
        
        
        
    
        dispatch({
            type: 'PRODUCT_ADDED',
            payload: {
                
                id: itemActual[0].id,
                name: itemActual[0].name,
                img: itemActual[0].img,
                value: itemActual[0].value,
                qt: 1
                
            }
            
        })

        
    
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
            <Header />
            <Nav />
            <h1>PRODUTO</h1>
                <div className='cont'>
                <C.Modal>
                    {itemActual &&
                        <div className='item'>
                            
                                 
                                <div className='filtered'>
                                    <h2>{itemActual[0].name}</h2>
                                    <img src={itemActual[0].img} width={300} />
                                    <span>R$ {itemActual[0].value},00</span>
                                    <Button onClick={handleCartAdd}>Comprar</Button>
                                    </div>
                                    
                            
                            
                        </div>
            }
                </C.Modal>
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
            </div>
        </C.Container>
    )
}