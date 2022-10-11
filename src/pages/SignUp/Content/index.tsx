import styled from "styled-components"

import crossSign from "../../../assets/images/cross-sign.svg";
import checkSign from "../../../assets/images/check-sign.svg";

import { primary } from "../../../components/variables";
import React, { useEffect, useState, useContext } from "react";

import { useNavigate } from "react-router-dom";
import LogoWhite from "../../../components/LogoWhite";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Container from "../../../components/LoginContainer";
import ClickHere from "../../../components/ClickHere";
import { UserContext } from "../../../common/context/User";
import { saveUser } from "../../../firebase";

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

const Cadastro = styled.p`
    margin-top: 70px;

    font-size: 30px;
    font-weight: 400;
    line-height: 38px;

    @media (max-width: 1023px) {
        margin-top: 70px;
    }

    @media (max-width: 374px), (max-height: 767px) {
        margin-top: 56px;

        font-size: 20px;
        line-height: 24px;
    }
`;

const StyledInput = styled(Input)`
    margin-top: 24px;
    height: 40px;
`;

const PasswordChecklist = styled.div`
    height: 0px;
    margin-left: 24px;
    transition: 500ms;
    overflow: hidden;
`;

const PasswordInput = styled(StyledInput)`
    &:focus + ${PasswordChecklist} {
        height: 100px;
        margin-top: 24px;
    }
`;

const PasswordRequirement = styled.p`
    &:not(.invalid) {
        color: green;

        &::before {
            background-image: url(${checkSign});
        }
    }

    &::before {
        content: "";
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-right: 12px;
        background-image: url(${crossSign});
        background-size: contain;
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

const StyledButton = styled(Button)`
    height: 48px;
    margin-top: 25px;
`;

interface ValidateFieldsParams {
    name: string,
    user: string,
    password: string,
    repeatPassword: string,
    passwordValid: boolean,
    setInvalidMessage: React.Dispatch<React.SetStateAction<string>>
}

function validateFields({name, user, password, repeatPassword, passwordValid, setInvalidMessage}: ValidateFieldsParams) {

    setInvalidMessage("");

    if (name.length == 0) {
        setInvalidMessage("Ops, nome vazio. Tente novamente!");
        return false;
    }

    if (!/[\w.-]+@[\w.-]+\.[\w.-]+/.test(user)) {
        setInvalidMessage("Ops, e-mail inválido. Tente novamente!");
        return false;
    }

    if (!passwordValid) {
        setInvalidMessage("Ops, senha inválida. Tente novamente!");
        return false;
    }

    if (password !== repeatPassword) {
        setInvalidMessage("Ops, repetir senha não corresponde com a senha. Tente novamente!");
        return false;
    }

    return true;
}

const Content = () => {
    const [name, setName] = useState("");
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const [hasLength, setHasLength] = useState(false);
    const [hasLowerCase, setHasLowerCase] = useState(false);
    const [hasUpperCase, setHasUpperCase] = useState(false);
    const [hasDigit, setHasDigit] = useState(false);
    const [hasSpecial, setHasSpecial] = useState(false);

    const [passwordValid, setPasswordValid] = useState(true);
    const [invalidMessage, setInvalidMessage] = useState("");

    const [contextName, setContextName] = useContext(UserContext);

    const navigate = useNavigate();

    //handle password checklist
    useEffect(() => {
        setHasLength(password.length >= 6);
        setHasUpperCase( /[A-Z\u00C0-\u00DC]/.test(password) );
        setHasLowerCase( /[a-z\u00E0-\u00FC]/.test(password) );
        setHasDigit( /\d/.test(password) );
        setHasSpecial( /[^A-Za-z\u00E0-\u00FC\u00C0-\u00DC\d]/.test(password) );

    }, [password]);

    //password is valid only if checklist is complete
    useEffect(() => {
        setPasswordValid( hasLength && hasUpperCase && hasLowerCase && hasDigit && hasSpecial );   
    }, [hasLength, hasUpperCase, hasLowerCase, hasDigit, hasSpecial])


    const buttonPress = () => {
        if (validateFields({ name, user, password, repeatPassword, passwordValid, setInvalidMessage })) {
            saveUser({name, user, password});
            setContextName(name);

            navigate("/home");
        }
    }

    return (
        <Container>
            <StyledLogoWhite />
            <Ola>Olá,</Ola>
            <Text>Para continuar navegando de forma segura, efetue o cadastro na rede.</Text>
            <Cadastro>Cadastro</Cadastro>
            <StyledInput
                type="text"
                placeholder="Nome e sobrenome"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <StyledInput
                type="email"
                placeholder="E-mail"
                value={user}
                onChange={(e) => setUser(e.target.value)}
            />
            <PasswordInput
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <PasswordChecklist>
                <PasswordRequirement className={hasLength ? "" : "invalid"}>
                    6 caracteres
                </PasswordRequirement>
                <PasswordRequirement className={hasUpperCase ? "" : "invalid"}>
                    Letra maiúscula
                </PasswordRequirement>
                <PasswordRequirement className={hasLowerCase ? "" : "invalid"}>
                    Letra minúscula
                </PasswordRequirement>
                <PasswordRequirement className={hasDigit ? "" : "invalid"}>
                    Número
                </PasswordRequirement>
                <PasswordRequirement className={hasSpecial ? "" : "invalid"}>
                    Caractere especial
                </PasswordRequirement>
            </PasswordChecklist>
            <StyledInput
                type="password"
                placeholder="Repetir senha"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
            />
            <InvalidMessage className={invalidMessage === "" ? "" : "invalid"}>
                {invalidMessage}
            </InvalidMessage>
            <StyledButton onClick={buttonPress}>
                Cadastrar
            </StyledButton>
            <ClickHere>
                {"Se você já possui um cadastro  "}
                <a onClick={() => navigate("/login")}>clique aqui</a>
                .
            </ClickHere>
        </Container>
    )
}

export default Content;