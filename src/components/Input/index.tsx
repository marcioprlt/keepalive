import styled from "styled-components";
import { primary, secondary } from "../variables";

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

    &.invalid {
        border: 1px solid ${primary};
    }

    @media (max-height: 767px), (max-width: 374px) {
        margin-top: 24px;
        height: 40px;
    }
`;

export default Input;