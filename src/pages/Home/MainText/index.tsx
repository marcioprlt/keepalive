import styled from "styled-components";


const MainTextContainer = styled.div`
    width: 60%;
    margin-right: 134px;

    align-self: end;

    @media (max-width: 1439px) {
        width: 48%;
        margin-right: 96px;
    }

    @media (max-width: 1023px) {
        width: 60%;
        margin-right: 64px;
    }

    @media (max-width: 767px) {
        width: 90%;
        margin: 128px auto 48px;
    }

    @media (max-width: 374px) {
        margin: 192px auto 64px;
    }
`;

const Text = styled.p`
    text-align: right;
`;

const RedSmall = styled(Text)`
    font-size: 36px; //3vh;
    font-weight: 700;
    line-height: 45px; //4vh;
    color: #C12D18;

    @media (max-width: 1439px) {
        font-size: 24px;
        line-height: 30px;
    }

    @media (max-width: 767px) {
        font-size: 16px;
        line-height: 24px;
    }
`;

const Small = styled(Text)`
    font-size: 24px; //2vh;
    font-weight: 400;
    line-height: 30px; //3vh;
    color: #222222;

    @media (max-width: 1439px) {
        font-size: 16px;
        line-height: 20px;
    }
`;

const RedBig = styled(Text)`
    font-size: 3.3vw; //6vh;
    font-weight: 700;
    line-height: 4.2vw; //8vh;
    color: #C12D18;

    @media (max-width: 1439px), (max-height: 767px) {
        font-size: 38px;
        line-height: 40px;
    }

    @media (max-width: 767px), (max-height: 599px) {
        font-size: 24px;
        line-height: 32px;
    }
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