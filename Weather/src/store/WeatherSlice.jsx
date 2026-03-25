import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchSuggestions = createAsyncThunk(
  "weather/fetchSuggestions",
  async (query, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${query}`,
      );

      if (!response.ok) throw new Error("Не вдалося завантажити підказки");

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (cityInput, { rejectWithValue }) => {
    const cityName =
      typeof cityInput === "object" && cityInput?.name ?
        cityInput.name
      : cityInput;

    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}&days=7&aqi=no&alerts=no`,
      );

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error?.message || `Помилка: ${response.status}`);
      }

      const localHour = data.location.localtime.slice(0, 13);
      const currentHour = data.forecast.forecastday[0].hour.find(
        (h) => h.time.slice(0, 13) === localHour,
      );

      return {
        location: data.location,
        current: currentHour || data.forecast.forecastday[0].hour[0],
        forecast: data.forecast,
      };
    } catch (error) {
      console.error("Fetch weather error:", error);
      return rejectWithValue(error.message);
    }
  },
);

const initialState = {
  city: "Kyiv",
  weather: null,
  suggestions: [],
  loading: false,
  loadingSuggestions: false,
  error: null,
};

const WeatherSlice = createSlice({
  name: "weather",
  initialState,

  reducers: {
    setCity: (state, action) => {
      state.city = action.payload?.name || action.payload;
      state.suggestions = [];
    },

    clearSuggestions: (state) => {
      state.suggestions = [];
    },

    clearError: (state) => {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchSuggestions.pending, (state) => {
        state.loadingSuggestions = true;
      })
      .addCase(fetchSuggestions.fulfilled, (state, action) => {
        state.loadingSuggestions = false;
        state.suggestions = action.payload;
      })
      .addCase(fetchSuggestions.rejected, (state) => {
        state.loadingSuggestions = false;
        state.suggestions = [];
      })
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

export const { setCity, clearSuggestions, clearError } = WeatherSlice.actions;
export default WeatherSlice.reducer;
