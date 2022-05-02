import styled from "styled-components";

export const Container = styled.div`

min-height: 100%;
margin: auto;

    .cont {
        max-width: 1200px;
        margin: auto;
    }

    h1 {
        color: #c09578;
    }

    .bestSellers {
        display: flex;
        flex-wrap: wrap;
        justify-content:space-between;
        margin: auto;
        align-items: center;
        
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
    
`;