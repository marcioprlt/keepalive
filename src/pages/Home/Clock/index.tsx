import styled from "styled-components";

import { useState, useEffect } from "react";

const Time = styled.div`
    width: 400px;
    margin: 0 auto;
    padding-top: 32px;

    font-size: 144px;
    font-weight: 700;
    line-height: 100px;
    text-align: center;
    color: #222222;

    @media (max-width: 1439px), (max-height: 767px) {
        font-size: 100px;
        line-height: 72px;
    }

    @media (max-width: 1023px) {
        font-size: 72px;
        line-height: 50px;
    }

    @media (max-width: 767px) {
        display: none;
    }
`;

const DateLine = styled.div`
    width: 400px;
    margin: 0 auto;

    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
    color: #222222;

    @media (max-width: 767px) {
        display: none;
    }
`;

const Days = [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado"
]

const Months = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro"
];

function getDateLine(date: Date) {
    return Days[date.getDay()] + ", "
        + date.getDate() + " de "
        + Months[date.getMonth()] + " de "
        + date.getFullYear();
}

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => setTime(new Date()), 15000);
    }, []);

    return (
        <div>
            <Time>
                {time.getHours().toString().padStart(2, "0")
                + ":"
                + time.getMinutes().toString().padStart(2, "0")}
            </Time>
            <DateLine>{getDateLine(time)}</DateLine>
        </div>
    )
}

export default Clock;