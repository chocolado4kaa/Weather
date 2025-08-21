import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearWeather, fetchWeather } from "../WeatherSlice";

export const useWeather = (method, modifier) => {
  const {city, weather, loading, error } = useSelector((s) => s.weather);
  const dispatch = useDispatch();

  useEffect(() => {
    const cleanCityValue = city?.trim();
    if (!cleanCityValue) return;

    dispatch(clearWeather());
    dispatch(fetchWeather({ method, modifier, cityName: cleanCityValue }));
  }, [city, method, modifier, dispatch]);

  return { weather, loading, error };
};
