import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SearchBox({ getData }) {
    let [value, setValue] = useState("");
    let [error, setError] = useState(false);

    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const APIK = "ce38df4f4f809481422898ea9921abdc"; // your API key

    let WeatherInfo = async () => {
        try {
            let response = await fetch(`${URL}?q=${value}&appid=${APIK}&units=metric`);
            let data = await response.json();
            if (data.cod !== 200) throw new Error(data.message);

            let obj = {
                city: data.name,
                Temperature: data.main.temp,
                min: data.main.temp_min,
                max: data.main.temp_max,
                humidity: data.main.humidity,
                feel: data.main.feels_like,
                weather: data.weather[0].description,
            };
            return obj;
        } catch (err) {
            throw err;
        }
    };

    let handleChange = (e) => {
        setValue(e.target.value);
    };

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let info = await WeatherInfo();
            getData(info);
            setValue("");
            setError(false);
        } catch (err) {
            setError(true);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="outlined-basic"
                    label="City"
                    variant="outlined"
                    value={value}
                    onChange={handleChange}
                    required
                />
                <br />
                {error && <p style={{ color: "red" }}>Please enter a valid city</p>}
                <Button
                    type="submit"
                    variant="contained"
                    style={{ marginTop: "10px", marginBottom: "20px" }}
                >
                    Submit
                </Button>
            </form>
        </div>
    );
}
