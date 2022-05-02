import styled from "styled-components";

export const Container = styled.div`
max-width: 1200px;
margin: auto;
display: flex;
margin-top: 50px;
`;

export const Area = styled.div`
    width: 33%;
    border-right: 1px solid #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    

    &:nth-child(3) {
        border: none;
    }

    h2 {
        color: #fff;

        @media(max-width: 600px) {
            font-size: 18px;
        }
    }

    p {
        color: #999;
        margin: 5px 0;
        cursor: pointer;
        transition: all ease 0.5s;
        font-size: 12px;

        &:hover {
            color: #c09578;
        }
    }

    a {
        color: #c09578;
        text-decoration: none;
    }

    span {
        color: #999;
        margin: 5px 0;

        @media(max-width: 600px) {
            margin-bottom: 10px;
            text-align: center;
            font-size: 12px;
        }
    }
`
