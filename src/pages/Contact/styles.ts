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

`;

export const Box = styled.div`
    min-height: 300px;
    border: 1px solid #c09578;
    display: flex;
    flex-direction: column;
    padding: 30px;

    span {
        color: #c09578;
        font-size: 18px;
        padding: 30px;
    }
`