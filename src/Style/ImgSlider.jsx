import styled from "styled-components";
import Slider from "react-slick";

export const Carousel = styled(Slider)`
    margin-top: 50px;

    @media (max-width: 768px) {
        margin-top: 60px;
        overflow: hidden;
        padding: 20px;
        padding-bottom: 0;
    }

    & > button {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;
        &:hover {
            opacity: 1;
            transition: opacity 0.2s ease 0s;
        }
    }

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before {
        color: white;
    }

    li.slick-active button:before {
        color: white;
    }

    .slick-list {
        overflow: initial;
    }

    .slick-prev {
        left: -75px;
    }

    .slick-next {
        right: -75px;
    }
`;
export const Wrap = styled.div`
    border-radius: 4px;
    cursor: pointer;
    position: relative;

    .wrap-link {
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
          rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        cursor: pointer;
        display: block;
        position: relative;
        padding: 4px;

        img {
            width: 100%;
            height: 100%;
        }
    }
`;