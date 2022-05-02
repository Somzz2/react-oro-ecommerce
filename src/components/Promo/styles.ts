import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: auto;
    background-color: #111;
    


    .cont {
        display: flex;
        max-width: 1200px;
        margin: auto;
        align-items: center;
        padding: 100px;

        .product {
            display: flex;
            flex: 1;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            
            color: #fff;

            h3 {
                color: #c09578;
            }

            span {
                color: #ccc;
            }
            Button {
                font-size: 20px;
                width: 500px;
            }
        }

        .image img {
            max-width: 300px;


        }

        @media (max-width: 600px) {
            flex-direction: column;

            
        }
    }
`