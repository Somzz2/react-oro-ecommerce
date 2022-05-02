import * as C from './styles';

export const Info = () => {
    return (
        <C.Container>
            <C.Area>
                <h2>Páginas</h2>
                <p>Home</p>
                <p>Categorias</p>
                <p>Promoções</p>
                <p>Contato</p>
            </C.Area>
            <C.Area>
                <h2>Oro</h2>
                <span>Alguma dúvida? Ligue para nós</span>
                <a href='/'>(99) 99999-9999</a>
            </C.Area>
            <C.Area>
                <h2>Informações</h2>
                <p>Política de Privacidade</p>
                <p>Política de Entrega</p>
                <p>Rastreie o seu pedido</p>
            </C.Area>
        </C.Container>
    )
}