import * as C from './styles';
import { items } from '../../data/items';
import { Item } from '../../types/Item';
import { idText } from 'typescript';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
export const BestSeller = () => {




    return (
        
        <C.Container>
            <h2>BEST SELLERS</h2>
                <div className='bestSellers'>
                    {items.map((i: Item, k: number)=>
                        <div key={i.id} className="box">
                            <img src={i.img} alt={i.name}/>
                            <span>{i.name}</span>
                            <span>R$ {i.value},00</span>
                            <Link to={`/ad/${i.id}`}><Button >Comprar</Button></Link>
                        </div>
                    )}
                </div>
            
        </C.Container>
    )
}