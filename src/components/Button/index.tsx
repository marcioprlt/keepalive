import styled from "styled-components";

const Button = styled.button`
    margin-top: 47px; //115px;
    width: 100%;
    height: 67px;
    
    background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
    border: none;
    border-radius: 50px;

    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    color: white;

    box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
    filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.5));

    transition: 500ms;

    &:hover {
        transform: scale(1.05);
    }

    @media (max-height: 767px), (max-width: 374px) {
        height: 48px;
        margin-top: 25px;
    }
`;

export default Button;