import styled from "styled-components";
import { GlobalStyle } from "../../components/GlobalStyles";
import Content from "./Content";
import Image from "./Image";

const SplitContainer = styled.div`
    display: flex;
    height: 100vh;

    background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
`;


export default function Login() {
    return (
        <>
            <GlobalStyle />
            <SplitContainer>
                <Content />
                <Image />
            </SplitContainer>
        </>
    )
}