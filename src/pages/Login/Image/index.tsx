import styled from "styled-components";
import image from "../../../assets/images/laptop.png";
import logo from "../../../assets/images/logoWhite.png";

const Background = styled.div`
    width: 50vw;
    height: 100vh;
    background-image: url(${image});
    background-size: cover;
    background-position: center;

    position: relative;
`;

const Logo = styled.div`
    width: 306px;
    height: 69px;
    background-image: url(${logo});

    position: absolute;
    top: 35px;
    right: calc(25vw - 153px);
`;

const Image = () => {
    return (
        <Background>
            <Logo />
        </Background>
    )
}

export default Image;