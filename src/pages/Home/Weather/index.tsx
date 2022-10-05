import styled from "styled-components";
import React, { useEffect, useState } from "react";

import weatherIcon from "../../../assets/images/weatherIcon.svg";
import chave from "../../../chaveAPIdummy";

const WeatherContainer = styled.div`
    width: 125px;
    position: absolute;
    top: 25px;
    right: 41px;

    @media (max-width: 1023px) {
        right: 28px;
    }

    @media (max-width: 374px) {
        right: 16px;
        width: 64px;
    }
`;

const City = styled.div`
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: center;

    @media (max-width: 374px) {
        display: none;
    }
`;

const IconTempContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 374px) {
        flex-direction: column;
        align-items: end;
    }
`;

const WeatherIcon = styled.img`
    @media (max-width: 374px) {
        width: 24px;
    }
`;

const Temperature = styled.div`
    font-size: 48px;
    font-weight: 700;
    line-height: 60px;

    @media (max-width: 1023px) {
        font-size: 32px;
        line-height: 48px;
    }

    @media (max-width: 374px) {
        font-size: 24px;
        line-height: 32px;
    }
`;

interface GetWeatherParams {
    setCity: React.Dispatch<React.SetStateAction<string>>,
    setTemperature: React.Dispatch<React.SetStateAction<number>>
}

function getWeather({setCity, setTemperature}: GetWeatherParams) {
    //if chave is 0 don't call API
    if (chave == 0) return;

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
    const [city, setCity] = useState("unknown city with very long name");
    const [temperature, setTemperature] = useState(0);

    useEffect(() => {
        getWeather({setCity, setTemperature});
    }, []); 

    return (
        <WeatherContainer>
            <City>{city}</City>
            <IconTempContainer>
                <WeatherIcon src={weatherIcon} />
                <Temperature>{temperature}º</Temperature>
            </IconTempContainer>
        </WeatherContainer>
    )
}

export default Weather;