import styled from "styled-components";
import { GlobalStyle } from "../../components/GlobalStyles";

import logo from "../../assets/images/logo.png";
import ball from "../../assets/images/logoBall.png";

import Clock from "./Clock";
import Weather from "./Weather";
import BottomBar from "./BottomBar";
import MainText from "./MainText";

const Container = styled.div`
    width: 100vw;
    height: 100vh;

    background: url(${ball});
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
                <Weather />
                <MainText />
                <BottomBar />
            </Container>
        </>
    )
}