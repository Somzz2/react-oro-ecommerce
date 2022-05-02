import styled from "styled-components";

export const Container = styled.div`
    max-width: 1200px;
    margin: auto;

    h1 {
        color: #c09578;
    }

    .cont {
        display: flex;
        height: auto;
        
        @media (max-width: 600px) {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: auto;
            .title {
                width: 100%;
            }
        }

    }
    .title {
        background-color: #111;
        width: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;

        span {
            color: #999;
            font-size: 15px;
        }
        h2 {
            color: #fff;
            font-size: 40px;
            margin: 5px 0;
            padding: 0;
        }
        p {
            color: #c09578;
        }

    }

    .products {
        display: flex;
        flex-wrap: wrap;
        justify-content:space-between;
        margin: auto;
        align-items: center;
        

        .box {
            display: flex;
            flex-direction: column;
            width: 40%;
            height: auto;
            border: 1px solid #111;
            align-items: center;
            margin: 10px;
            padding: 10px;

            
            img {
                width: 250px;
            }
            span {
                margin: 10px 0;
                font-size: 17px;
                font-weight: bold;
                color: #fff;
            }
        @media (max-width: 600px) {
            margin: auto;
            margin-top: 20px;
            
        }
    }

    @media (max-width: 600px) {
        .cont {
            height: 200px;
        }
        .box {
            width: 300px;
        }
    }
`