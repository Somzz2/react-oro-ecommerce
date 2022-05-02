import {Item} from './styles';
import {Link} from 'react-router-dom';

export default (props: any) => {
    

    return (
        <Item className='aditem'>
            <Link to={`/ad/${props.items.id}`}>
                <div className='itemImage'>
                    <img src={props.items.img} alt='' />
                </div>
                <div className='itemName'>{props.items.name}</div>
            </Link>    
            
        </Item>
    )
};