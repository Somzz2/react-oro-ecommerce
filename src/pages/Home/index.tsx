import { BestSeller } from '../../components/BestSellers';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Info } from '../../components/Info';
import { Nav } from '../../components/Nav';
import { Newest } from '../../components/Newest';
import { Promo } from '../../components/Promo';
import { Slide } from '../../components/Slide';
import * as C from './styles';

export const Home = () => {
    return (
        <C.Container>
            <Header />
            <Nav />
            <Slide />
            <BestSeller />
            <Promo />
            <Newest />
            <Info />
        </C.Container>
    )
}