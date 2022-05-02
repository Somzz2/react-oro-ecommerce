import * as C from './styles';
import { Link } from 'react-router-dom';

export const Nav = () => {
    return (
        <C.Container>
            <div className='div-container'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/produtos'>Produtos</Link></li>
                    <li><Link to='/promocoes'>Promoções</Link></li>
                    <li><Link to='/contato'>Contato</Link></li>
                </ul>
            </div>
        </C.Container>
    )
}