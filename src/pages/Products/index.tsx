import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Nav } from '../../components/Nav';
import * as C from './styles';
import { items } from '../../data/items';
import { Item } from '../../types/Item';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

export const Products = () => {
    return (
        <C.Container>
            <Header />
            <Nav />
            <div className='cont'>
            <h1>PRODUTOS</h1>
                <div className='bestSellers'>
                        {items.map((i: Item, k: number)=>
                            <div key={i.id} className="box">
                                <img src={i.img} alt={i.name}/>
                                <span>{i.name}</span>
                                <Link to={`/ad/${i.id}`}><Button >Comprar</Button></Link>
                            </div>
                        )}
                    </div>
            </div>
        </C.Container>
    )
}