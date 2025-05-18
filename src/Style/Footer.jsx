import styled from "styled-components";

export const FooterContainer = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    background-color:rgb(20, 24, 41);
    margin-top: 30px;

    @media (max-width: 768px) {
        height: 40vh;
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
        border: 0;
    }
`;

export const FooterContainerMobile = styled.footer`
    background-color:rgb(20, 24, 41);
    border-top: 2px solid rgb(21, 10, 41);
    border-radius: 3px;
    height: 20vh;
`;

export const FooterLogo = styled.img`
    height: auto;
    max-width: 100%;
    width: 180px;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const FooterLogoMobile = styled.img`
    display: none;

    @media (max-width: 768px) {
        display: block;
        height: auto;
        max-width: 100%;
        width: 150px;
        margin: 20px;
    }
`;

export const FooterLinks = styled.p`
    color: #f9f9f9;
    font-size: 1.2rem;
    margin: 0;
    padding: 0
`;