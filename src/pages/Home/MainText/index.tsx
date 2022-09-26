import styled from "styled-components";


const MainTextContainer = styled.div`
    position: absolute;
    right: 7vw;
    top: 31vh;
`;

const Text = styled.p`
    text-align: right;
`;

const RedSmall = styled(Text)`
    font-size: 3vh;
    font-weight: 700;
    line-height: 4vh;
    color: #C12D18;
`;

const Small = styled(Text)`
    font-size: 2vh;
    font-weight: 400;
    line-height: 3vh;
    color: #222222;
`;

const RedBig = styled(Text)`
    font-size: 6vh;
    font-weight: 700;
    line-height: 8vh;
    color: #C12D18;
`;

const MainText = () => {
    return (
        <MainTextContainer>
            <RedSmall>Our mission is</RedSmall>
            <Small>Nossa missão é</Small>
            <RedBig>to transform the world</RedBig>
            <Small>transformar o mundo</Small>
            <RedBig>building digital experiences</RedBig>
            <Small>construindo experiências digitais</Small>
            <RedBig>that enable our client’s growth</RedBig>
            <Small>que permitam o crescimento dos nossos clientes</Small>
        </MainTextContainer>
    )
}

export default MainText;