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

    position: absolute;
    bottom: 0px;
`;

const TextSmall = styled.div`
    width: 548px;
    margin-left: 32px;

    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    text-align: right;
    color: white;
`;

const Line = styled.div`
    width: 1px;
    height: 60px;

    margin: 0px 35px;

    border-right: 1px solid white;
`;

const CountdownContainer = styled.div`
    margin: 0 19vw 0 4.6vw;
    width: 239px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const TextMedium = styled.div`
    width: 109px;

    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: right;
    color: white;
`;

const TextBig = styled.div`
    font-size: 48px;
    font-weight: 700;
    line-height: 40px;
    text-align: center;
    color: white;
`;

const SecondsText = styled(TextMedium)`
    text-align: center;
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
            <CountdownContainer>
                <TextMedium>Application refresh in</TextMedium>
                <div>
                    <TextBig>{seconds}</TextBig>
                    <SecondsText>seconds</SecondsText>
                </div>
            </CountdownContainer>
            <LinkBox white>
                <a href="http://google.com" target="_blank">Continuar Navegando</a>
            </LinkBox>
            <LinkBox>
                <a onClick={() => logout()}>Logout</a>
            </LinkBox>
        </BarContainer>
    )
}

export default BottomBar;