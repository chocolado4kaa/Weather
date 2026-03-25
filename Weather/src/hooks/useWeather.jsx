import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchWeather } from "../store/WeatherSlice";

export const useWeather = () => {
  const { city, weather, loading, error } = useSelector((s) => s.weather);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!city) return;
    dispatch(fetchWeather(city));
  }, [city, dispatch]);

  return { weather, loading, error };
};
