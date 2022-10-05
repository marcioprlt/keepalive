import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BarContainer = styled.div`
    width: 100vw;
    height: 100px;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);

    @media (max-width: 1023px) {
        height: 75px;
    }

    @media (max-width: 767px) {
        flex-direction: column;
        height: initial;
    }
`;

const TextSmall = styled.div`
    max-width: 548px;
    margin-left: 32px;

    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    text-align: right;
    color: white;

    @media (max-width: 1023px) {
        margin-left: 24px;
    }

    @media (max-width: 767px) {
        margin: 0 24px;
        padding-top: 24px;

        text-align: center;
    }
`;

const Line = styled.div`
    width: 1px;
    height: 60px;

    margin: 0px 35px;

    border-right: 1px solid white;

    @media (max-width: 1023px) {
        margin: 0px 20px;
    }

    @media (max-width: 767px) {
        margin: 20px 0px;
        width: 90%;
        height: 1px;

        border-bottom: 1px solid white;
    }
`;

const CountdownAndBoxes = styled.div`
    height: 100%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 767px) {
        width: 90%;
    }

    @media (max-width: 374px) {
        width: 100%;
        flex-direction: column;
    }
`;

const CountdownContainer = styled.div`
    margin: 0 369px 0 88px;
    width: 239px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1439px) {
        margin: 0 100px 0 48px;
    }

    @media (max-width: 1023px) {
        margin: 0 5% 0 3%;
        width: 200px;
        gap: 24px;
    }

    @media (max-width: 767px) {
        margin-bottom: 20px;
        flex-direction: column;
        gap: 16px;
    }

    @media (max-width: 374px) {
        margin-bottom: initial;
        flex-direction: row;
    }
`;

const TextMedium = styled.div`
    width: 109px;

    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: right;
    color: white;

    @media (max-width: 1023px) {
        width: 75px;
    }

    @media (max-width: 767px) {
        width: initial;
        max-width: 175px;
        text-align: center;
    }

    @media (max-width: 374px) {
        width: 75px;
        text-align: right;
    }
`;

const TextBig = styled.div`
    font-size: 48px;
    font-weight: 700;
    line-height: 40px;
    text-align: center;
    color: white;

    @media (max-width: 1023px) {
        font-size: 32px;
        line-height: 24px;
    }
`;

const SecondsText = styled(TextMedium)`
    text-align: center;
`;

const LinkBoxes = styled.div`
    height: 100%;
    display: flex;
    
    @media (max-width: 767px) {
        height: 105px;
        margin-bottom: 20px;
    }
    
    @media (max-width: 374px) {
        width: 100%;
        height: 75px;
        margin: 20px 0 0;
    }
    `;

interface BoxProps {
    white?: any
}

const LinkBox = styled.div<BoxProps>`
    width: 131px;
    height: 100%;
    padding: 0 18px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    text-align: center;

    background-color: ${props => props.white ? "white" : "none" };

    &>a{
        color: ${props => props.white ? "#C13216" : "white" };
        cursor: pointer;
    }

    @media (max-width: 1023px) {
        width: 100px;
    }

    @media (max-width: 374px) {
        width: 50%;
    }
`;

const BottomBar = () => {

    const [seconds, setSeconds] = useState<number>(60);
    const navigate = useNavigate();
    
    useEffect(() => {
        if (seconds == 0) {
            logout();
            return;
        }
        setTimeout(() => {setSeconds(seconds - 1)}, 1000);
    }, [seconds]);

    function logout() {
        navigate("/login");
    }
    
    return (
        <BarContainer>
            <TextSmall>
                Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.
            </TextSmall>
            <Line />
            <CountdownAndBoxes>
                <CountdownContainer>
                    <TextMedium>Application refresh in</TextMedium>
                    <div>
                        <TextBig>{seconds}</TextBig>
                        <SecondsText>seconds</SecondsText>
                    </div>
                </CountdownContainer>
                <LinkBoxes>
                    <LinkBox white>
                        <a href="http://google.com" target="_blank">Continuar Navegando</a>
                    </LinkBox>
                    <LinkBox>
                        <a onClick={() => logout()}>Logout</a>
                    </LinkBox>
                </LinkBoxes>
            </CountdownAndBoxes>
        </BarContainer>
    )
}

export default BottomBar;