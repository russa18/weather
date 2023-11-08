import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    currentWeather: [
        {
            id: 1,
            country: "United Kingdom",
            name: "London",
            condition: {
                code: 1000,
                icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
                text: "Clear"
            },
            feels: "2.2",
            gust: "19.5",
            humidity: "93",
            pressure: "29.71",
            wind: "9",
            temperature: "5",
            localtime:"2023-11-07 5:37"
        }
    ]
}

export const cWeatherSlice = createSlice({
    name: "currentWeather",
    initialState,
    reducers: {
        addWeather: (state, action) => {
            const currWeather = {
                id: nanoid(),
                country: "United Kingdom",
                name: "London",
                condition: {
                    code: 1000,
                    icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
                    text: "Clear"
                },
                feels: "2.2",
                gust: "19.5",
                humidity: "93",
                pressure: "29.71",
                wind: "9",
                temperature: "5",
                localtime:"2023-11-07 5:37"
            }

            state.currentWeather.push(currWeather)
        }
    }
})

export const {addWeather}=cWeatherSlice.actions;

export default cWeatherSlice.reducer