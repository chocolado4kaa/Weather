const API_key = import.meta.env.VITE_API_KEY;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async ({ cityName = "Kyiv" }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_key}&q=${cityName}&days=7&aqi=no&alerts=no`
      );
      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error?.message || `HTTP error! Status: ${response.status}`);
      }

      const currentHour = data.forecast.forecastday[0].hour.find(h => h.time === data.location.localtime);

      const combinedData = {
        location: data.location,
        current: currentHour || data.forecast.forecastday[0].hour[0],
        forecast: data.forecast,
      };

      return combinedData;
    } catch (error) {
      console.error("Fetch error:", error);
      return rejectWithValue(error.message);
    }
  }
);



const WeatherSlice = createSlice({
  name: "Weather",
  initialState: {
    city: "",
    weather: null,
    loading: false,
    error: null,
  },
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
    clearWeather: (state) => {
      state.weather = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.weather = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setCity, clearWeather } = WeatherSlice.actions;
export default WeatherSlice.reducer;