import * as C from './styles';
import { Header } from '../../components/Header';
import { Nav } from '../../components/Nav';
import { items } from '../../data/items';
import { Item } from '../../types/Item';
import { Button } from '../../components/Button';

export const Contact = () => {
    return (
        
        <C.Container>
            <Header />
            <Nav />
            <div className='cont'>
            <h1>CONTATOS</h1>
            <C.Box>
                <span>Telefone: (99) 99999-9999</span>
                <span>E-mail: oro@oroteste123.com.br</span>
            </C.Box>

            </div>
        </C.Container>
        
    )
} 