import styled from "styled-components";

export const Container = styled.div`
    max-width: 1200px;
    margin: auto;

    h2 {
        font-size: 40px;
        color: #c09578;
    }
    .bestSellers {
        display: flex;
        flex-wrap: wrap;
        justify-content:center;
        margin: auto;
        align-items: center;

        @media (max-width: 600px) {
            justify-content: center;
        }
        
    }
    .box {
        display: flex;
        flex-direction: column;
        width: auto;
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
    }
`