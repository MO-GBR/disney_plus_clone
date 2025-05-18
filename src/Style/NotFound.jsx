import styled from "styled-components";

export const NotFoundContainer = styled.div`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

    h1 {
        font-size: xx-large;
        font-weight: 700;
        color: #f9f9f9;
        width: 100%;
        text-align: center;
        margin-top: 20px;
    }

    img {
        height: auto;
        max-width: 100%;
        width: 600px;
    }
`;