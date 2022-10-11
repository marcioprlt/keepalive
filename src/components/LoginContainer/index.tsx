import styled from "styled-components";
import { secondary } from "../variables";

const Container = styled.div`
    width: 379px;
    margin: auto;
    padding: 48px 0;

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

export default Container;