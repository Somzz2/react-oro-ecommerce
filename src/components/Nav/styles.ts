import styled from "styled-components";

export const Container = styled.div`
    
    background-color: #c09578;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    margin: auto;

    .div-container {
        margin: auto;
        width: 1200px;
    
    
    ul {
        display: flex;
        list-style: none;
        padding: 0;
        margin-left
    }
    li {
        margin: 0 10px;
        display: flex;
        align-items: center;
        
        a {
            text-decoration: none;
            font-size: 17px;
            font-weight: bold;
            color: #FFF;
            transition: all ease .5s;

            &:hover {
                color: #252525;
            }
        }
    }
    @media(max-width: 1200px ) {
        .div-container {
            width: 100%;
        }
    }
}
`