import styled from "styled-components";

export const Container = styled.div`
    height: 100px;
    max-width: 1200px;
    margin: auto;
    background-color: #252525;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 1200px ){
        flex-direction: column;
        height: 300px;
        width: 100%;
    }

    .cart {
        display: none;
        z-index: 1;
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

`

export const Logo = styled.img`
    width: 75px;
    height: 75px;

`

export const InputSearch = styled.div`
    
    input {
        width: 300px;
        height: 30px;
    }

    @media(max-width: 400px) {
        display: flex;
        flex-direction: column;
        margin: auto;
        align-items: center;

        input {
            margin-bottom: 20px;
        }
        
    }
`

export const Shopping = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    
    a {
        text-decoration: none;
        
        
        img {
            
        }

    }
    img {
        
        background-color: #999;
        padding: 5px;
        margin: 5px;
        border-radius: 10px;
    }

    span {
        width: 12px;
        background-color: #f00;
        border-radius: 6px;
        position: absolute;
        margin-left: 75px;
        margin-bottom: 20px;
        font-weight: bold;
        text-align: center;
        
    }

    a {
        cursor: pointer;
    }
`