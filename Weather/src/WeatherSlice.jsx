const API_key = import.meta.env.VITE_API_KEY;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async ({ method = "current", modifier = "aqi=no", cityName = "Kyiv" }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/${method}.json?key=${API_key}&q=${cityName}&${modifier}`
      );

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(
          data.error?.message || `HTTP error! Status: ${response.status}`
        );
      }
      return data;
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