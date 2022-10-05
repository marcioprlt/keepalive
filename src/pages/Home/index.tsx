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
    min-height: 100vh;

    background: url(${ball});
    background-repeat: no-repeat;
    background-position: left bottom 24px;
    background-size: 52vmin;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: relative;

    @media (max-width: 1439px) {
        background-size: 45vmin;
    }

    @media (max-width: 1023px) {
        background-size: 35vmin;
    }

    @media (max-width: 767px) {
        background: none;
    }
`;

const Logo = styled.img`
    position: absolute;
    top: 25px;
    left: 40px;

    @media (max-width: 767px) {
        left: 28px;
    }

    @media (max-width: 374px) {
        width: 100px;
        left: 16px;
    }
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