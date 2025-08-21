import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearWeather, fetchWeather } from "../store/WeatherSlice";

export const useWeather = () => {
  const { city, weather, loading, error } = useSelector((s) => s.weather);
  const dispatch = useDispatch();

  useEffect(() => {
    const cleanCityValue = city?.trim();
    if (!cleanCityValue) return;

    dispatch(clearWeather());
    dispatch(fetchWeather({ cityName: cleanCityValue }));
  }, [city, dispatch]);

  return { weather, loading, error };
};
