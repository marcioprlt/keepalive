import styled from "styled-components";
import image from "../../../assets/images/laptop.png";
import LogoWhite from "../../../components/LogoWhite";

const Background = styled.div`
    width: 50vw;
    height: auto;
    background-image: url(${image});
    background-size: cover;
    background-position: right center;

    position: relative;

    @media (max-width: 767px) {
        display: none;
    }
`;

const StyledLogoWhite = styled(LogoWhite)`
    position: absolute;
    top: 35px;
    right: calc(50% - 153px);

    @media (max-width: 1023px) {
        width: 192px;
        right: calc(50% - 96px);
    }
`;

const Image = () => {
    return (
        <Background>
            <StyledLogoWhite />
        </Background>
    )
}

export default Image;