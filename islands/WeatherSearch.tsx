/** @jsx h */
import {h} from "preact";
import Searcher from "./Searcher.tsx";
import {useEffect, useState} from "preact/hooks";
import {WeatherData, WeatherDataType} from "../schema/WeatherData.ts";
import {FormType} from "../schema/Form.ts";

// TODO add more fields so FormType contains unit and other parameters
// TODO Fix the issue with the temperature number
const fetchWeatherData = async (
    apiKey?: string,
    city: FormType = "London",
    unit: string = "metric"
): Promise<WeatherDataType | null> => {
    try {
        if (!apiKey) {
            console.error("API key not found");
            return null;
        }

        const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&apiKey=${apiKey}&unit=${unit}`,{
            headers: {
                accept: "application/json",
            },
        });
        const json = await data.json();

        return WeatherData.parse(json);
    } catch (e) {
        console.error("API fetch or parse failed");
        console.error(e);
        return null;
    }
}

type WeatherSearchProps = {
    apiKey: string | null | undefined;
}

const WeatherSearch = ({ apiKey }: WeatherSearchProps) => {
   const [data, setData] = useState<WeatherDataType>(null);
    const [submitting, setSubmitting] = useState(false);

    return <div>
        <Searcher handleSubmit={async (formData) => {
            setSubmitting(true);
            const resp = await fetchWeatherData(apiKey, formData);
            setSubmitting(false);
            if (!resp) {
                console.error("No data found");
            }
            setData(resp);
        }} />
        {
            submitting ? <p>Submitting...</p> : null
        }
        {
            data
                ?
                <div>
                    <h1>{data.city.name}</h1>
                    <h2>{data.list[0].main.temp} &#176;C</h2>
                    <h3>Humidity {data.list[0].main.humidity}%</h3>
                    <h3>Feels like {data.list[0].main.feels_like} &#176;C</h3>
                </div>
                : null
        }
    </div>
}

export default WeatherSearch;
