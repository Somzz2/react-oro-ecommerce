import * as C from './styles';
import anel from '../../assets/images/anel1.png';
import { Button } from '../Button';

export const Promo = () => {
    return (
        <C.Container>
            <div className='cont'>
                <div className='product'>
                    <h3>DESCONTOS DE ATÉ 75%</h3>
                    <h1>ANEL X</h1>
                    <span>Presenteie o seu amor com este anel luxuoso</span><br/>
                    <Button >Comprar</Button>
                </div>
                <div className='image'>
                    <img src={anel} alt="anel" />
                </div>
            </div>
        </C.Container>
    )
}