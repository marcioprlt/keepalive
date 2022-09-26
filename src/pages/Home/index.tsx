import styled from "styled-components";
import { GlobalStyle } from "../../components/GlobalStyles";

import logo from "../../assets/images/logo.png";
import temperature from "../../assets/images/temperature.png";
import ball from "../../assets/images/logoBall.png";

import Clock from "./Clock";
import BottomBar from "./BottomBar";
import MainText from "./MainText";

const Container = styled.div`
    width: 100vw;
    height: 100vh;

    background: url(${ball}), linear-gradient(105.96deg, #FFFFFF 0%, #F0F0F0 97.86%);
    background-repeat: no-repeat;
    background-position: left bottom 24px;
    background-size: 30%;

    position: relative;
`;

const Logo = styled.img`
    position: absolute;
    top: 25px;
    left: 40px;
`;

const Temperature = styled.img`
    position: absolute;
    top: 25px;
    right: 40px;
`;

export default function Home() {
    return (
        <>
            <GlobalStyle />
            <Container>
                <Logo src={logo} alt="Logo da Compass" />
                <Clock />
                <Temperature src={temperature} />
                <MainText />
                <BottomBar />
            </Container>
        </>
    )
}