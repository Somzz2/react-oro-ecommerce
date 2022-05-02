import * as C from './styles';
import { items } from '../../data/items';
import { Item } from '../../types/Item';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

export const Newest = () => {
    return (
       <C.Container>
           <h1>NOVIDADES</h1>
           <div className="cont">
            <div className="title">
                <span>Os melhores</span>
                <h2>ANÉIS</h2>
                <p>pelos melhores preços</p>
            </div>
            <div className="products">
                {items.map((i: Item, k: number)=>
                    <div key={i.id} className="box">
                        <img src={i.img} alt={i.name}/>
                        <span>{i.name}</span>
                        <span>R$ {i.value},00</span>
                        <Link to={`/ad/${i.id}`}><Button >Comprar</Button></Link>
                    </div>
                )}
            </div>
           </div>
       </C.Container> 
    )
}