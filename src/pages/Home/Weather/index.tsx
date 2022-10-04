import styled from "styled-components";
import React, { useEffect, useState } from "react";

import weatherIcon from "../../../assets/images/weatherIcon.svg";
import chave from "../../../chaveAPI";

const WeatherContainer = styled.div`
    width: 121px;
    position: absolute;
    top: 25px;
    right: 41px;

    @media (max-width: 1023px) {
        width: 96px;
        right: 28px;
    }

    @media (max-width: 374px), (max-height: 599px),
    ((max-width: 767px) and (max-height: 767px)) {
        display: none;
    }
`;

const City = styled.div`
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
`;

const IconTempContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Temperature = styled.div`
    font-size: 48px;
    font-weight: 700;
    line-height: 60px;

    @media (max-width: 1023px) {
        font-size: 32px;
        line-height: 48px;
    }
`;

interface GetWeatherParams {
    setCity: React.Dispatch<React.SetStateAction<string>>,
    setTemperature: React.Dispatch<React.SetStateAction<number>>
}

function getWeather({setCity, setTemperature}: GetWeatherParams) {
    navigator.geolocation.getCurrentPosition(
        (pos) => {
            let lat = pos.coords.latitude;
            let long = pos.coords.longitude;

            fetchData(lat, long).then(response => {
                if (response) {
                    setCity(response.city);
                    setTemperature(response.temp);
                }
            });
        },
        (err) => {
            //coordinates of POA
            let lat = -30.0368;
            let long = -51.2090;

            fetchData(lat, long).then(response => {
                if (response) {
                    setCity(response.city);
                    setTemperature(response.temp);
                }
            });
        }
    );
 }

 function fetchData(lat: number, long: number) {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&APPID=${chave}`;
    let city = "";
    let temp = 0;
    return fetch(url)
    .then(data => {
        return data.json()
    })
    .then(data => {
        city = data.name + ", " + data.sys.country;
        temp = Math.round(data.main.temp);
        return {city, temp};
    })
    .catch(err => {
        return {city: "unknown", temp: 0};
    })
 }

const Weather = () => {
    const [city, setCity] = useState("");
    const [temperature, setTemperature] = useState(0);

    useEffect(() => {
        getWeather({setCity, setTemperature});
    }, []); 

    return (
        <WeatherContainer>
            <City>{city}</City>
            <IconTempContainer>
                <img src={weatherIcon} />
                <Temperature>{temperature}º</Temperature>
            </IconTempContainer>
        </WeatherContainer>
    )
}

export default Weather;