import { createContext, useState, useEffect } from "react";
import { fetchData } from "../fetchData.jsx";

export const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [city, setCity] = useState("Vinnytsya");
  const [cityData, setCityData] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      if (!city.trim()) return;
      const data = await fetchData(city);
      if (data) {
        setCityData(data);
        console.log(data);
      } else {
        setCityData(null);
        console.error("City not found");
      }
    };

    fetch();
  }, [city]);

  return (
    <CityContext.Provider value={{ city, setCity, cityData }}>
      {children}
    </CityContext.Provider>
  );
};
