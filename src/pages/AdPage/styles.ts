import styled from "styled-components";


export const Container = styled.div`
    min-height: 100%;
    
    margin: auto;
    
    h1 {
        margin-left: 120px;
        color: #c09578;
    }

    .cont {
        display: flex;
    }
    .cart {
        display: none;
        position: fixed;
        height: 100%;
        top: 0;
        right: 0;
        background-color: #c09578;
        width: 20%;
        margin: auto;
        justify-content: center;
        

        @media (max-width: 1200px) {
            width: 40%
        }
        @media (max-width: 600px) {
            width: 100%
        }

    }
   
    .cart-items {
        
        margin-top: 20px;
        
        .clear {
            margin-top: 50px;
        }

        .total {
            color: #FFF;
            font-weight: bold;
        }
        
        .cartItem {
            display: flex;
            flex-direction: column;
            padding: 10px;
            margin: 10px;
            background-color: #333;
            border-radius: 30px;
            
            align-items: center;

            img {
                width: 50px;
            }

            span {
                color: #fff;
                margin-bottom: 5px;
                padding: 5px;
                border-bottom: 1px solid #c09578;
            }
        }
    }
`;

export const Modal = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    background-color: #333;
    border-radius: 5px;
    box-shadow: 0px 0px 4px #c09578;
    margin: 100px 0;
    max-width: 1200px;
    margin: auto;
    margin-bottom: 50px;

    .filtered {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 20px;

        h2 {
            color: #c09578;
        }
        
        img {
            margin: 30px 0;
        }
        span {
            margin: 10px 0;
            font-size: 17px;
            font-weight: bold;
            color: #fff;
        }
        
    
    }
`