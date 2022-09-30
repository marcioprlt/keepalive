import styled from "styled-components"

import iconUser from "../../../assets/images/icon-user.svg";
import iconPassword from "../../../assets/images/icon-password.svg";
import { primary, secondary } from "../../../components/variables";
import React, { useState } from "react";

import { NavigateFunction, useNavigate } from "react-router-dom";
import LogoWhite from "../../../components/LogoWhite";

const Container = styled.div`
    width: 379px;
    margin: auto;

    display: flex;
    flex-direction: column;

    color: ${secondary};

    @media (max-width: 1023px) {
        width: 30%;
    }

    @media (max-width: 767px) {
        width: 60%;
    }

    @media (max-width: 374px) {
        width: 80%;
    }
`;

const StyledLogoWhite = styled(LogoWhite)`
    display: none;
    margin-bottom: 32px;

    @media (max-width: 767px) {
        display: initial;
        align-self: center;
        width: 200px;
    }

    @media (max-width: 374px) {
        width: 80%;
    }
`;

const Ola = styled.p`
    font-size: 60px;
    font-weight: 400;
    line-height: 76px;

    @media (max-width: 374px), (max-height: 767px) {
        font-size: 40px;
        line-height: 28px;
    }
`;

const Text = styled.p`
    margin-top: 17px;
    max-width: 301px;

    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
`;

const Login = styled.p`
    margin-top: 135px;

    font-size: 30px;
    font-weight: 400;
    line-height: 38px;

    @media (max-width: 1023px) {
        margin-top: 72px;
    }

    @media (max-width: 374px), (max-height: 767px) {
        margin-top: 56px;

        font-size: 20px;
        line-height: 24px;
    }
`;

const InputContainer = styled.div`
    position: relative;
`;

const Icon = styled.img`
    width: 20px;

    position: absolute;
    right: -38px;
    bottom: 20px;

    transition: 500ms;

    @media (max-width: 374px), (max-height: 767px) {
        height: 15px;
        bottom: 15px;
    }

    @media (max-width: 374px) {
        right: 20px;
    }
`;

const Input = styled.input`
    margin-top: 32px;
    width: 100%;
    height: 60px;

    padding: 20px;

    background: none;
    border: 1px solid white;
    border-radius: 50px;
    outline: none;

    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    color: ${secondary};

    &:not(:placeholder-shown) + ${Icon}
    // &:focus + ${Icon}
    {
        right: 20px;
    }

    &.invalid {
        border: 1px solid ${primary};
    }

    @media (max-height: 767px), (max-width: 374px) {
        margin-top: 24px;
        height: 40px;
    }
`;

const InvalidMessage = styled.p`
    margin: 28px auto 0;

    max-width: 283px;
    min-height: 40px;

    text-align: center;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    color: ${primary};

    &:not(.invalid) {
        visibility: hidden;
    }

    @media (max-height: 767px), (max-width: 374px) {
        margin-top: 16px;
    }
`;

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

interface ButtonPressParams {
    user: string,
    password: string,
    setInputValid: React.Dispatch<React.SetStateAction<boolean>>,
    navigate: NavigateFunction
}

function buttonPress({user, password, setInputValid, navigate}: ButtonPressParams) {

    if (user.length == 0 || password.length == 0) {
        setInputValid(false);
    } else {
        setInputValid(true);
        navigate("/home");
    }
}

const Content = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [inputValid, setInputValid] = useState(true);
    const navigate = useNavigate();

    return (
        <Container>
            <StyledLogoWhite />
            <Ola>Olá,</Ola>
            <Text>Para continuar navegando de forma segura, efetue o login na rede.</Text>
            <Login>Login</Login>
            <InputContainer>
                <Input
                    type="text"
                    placeholder="Usuário"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    className={inputValid ? "" : "invalid"}
                />
                <Icon src={iconUser} />
            </InputContainer>
            <InputContainer>
                <Input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={inputValid ? "" : "invalid"}
                />
                <Icon src={iconPassword} />
            </InputContainer>
            <InvalidMessage className={inputValid ? "" : "invalid"}>
                Ops, usuário ou senha inválidos. Tente novamente!
            </InvalidMessage>
            <Button onClick={() => buttonPress({ user, password, setInputValid, navigate })}>
                Continuar
            </Button>
        </Container>
    )
}

export default Content;