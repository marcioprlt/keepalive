import styled from "styled-components"

import iconUser from "../../../assets/images/icon-user.svg";
import iconPassword from "../../../assets/images/icon-password.svg";
import { primary } from "../../../components/variables";
import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import LogoWhite from "../../../components/LogoWhite";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Container from "../../../components/LoginContainer";
import ClickHere from "../../../components/ClickHere";
import { tryLogin } from "../../../firebase";
import { UserContext } from "../../../common/context/User";

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
    margin-top: 100px;

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

const StyledInput = styled(Input)`

    &:not(:placeholder-shown) + ${Icon}
    // &:focus + ${Icon}
    {
        right: 20px;
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

const Content = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [inputValid, setInputValid] = useState(true);
    const navigate = useNavigate();
    const [contextName, setContextName] = useContext(UserContext);

    const buttonPress = () => {
        if (user.length == 0 || password.length == 0) {
            setInputValid(false);
        } else {
            setInputValid(true);
            tryLogin({user, password, loginAction});
        }
    }

    const loginAction = (name: string) => {
        if (name) {
            setContextName(name);
            navigate("/home");
        } else {
            setInputValid(false);
        }
    }

    return (
        <Container>
            <StyledLogoWhite />
            <Ola>Olá,</Ola>
            <Text>Para continuar navegando de forma segura, efetue o login na rede.</Text>
            <Login>Login</Login>
            <InputContainer>
                <StyledInput
                    type="text"
                    placeholder="E-mail"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    className={inputValid ? "" : "invalid"}
                />
                <Icon src={iconUser} />
            </InputContainer>
            <InputContainer>
                <StyledInput
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
            <Button onClick={() => buttonPress()}>
                Continuar
            </Button>
            <ClickHere>
                {"Se você não possui um cadastro  "}
                <a onClick={() => navigate("/signup")}>clique aqui</a>
                .
            </ClickHere>
        </Container>
    )
}

export default Content;