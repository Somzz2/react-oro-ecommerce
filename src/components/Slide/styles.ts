import styled from "styled-components"; 

export const Container = styled.div`
    max-width: 1200px;
    margin: auto;

    .alt {
        display: none;

    }

    @media (max-width: 1200px ){

    .alt {
        display: flex;

        img {
            width: 100%;
        }
    }
    .slider {
        display: none;
        
    }
    width: 100%;
        
    }
`