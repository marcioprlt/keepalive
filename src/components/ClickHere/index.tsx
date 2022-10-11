import styled from "styled-components";

const ClickHere = styled.p`
    margin-top: 32px;
    text-align: center;

    & > a {
        color: #405bce;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export default ClickHere;