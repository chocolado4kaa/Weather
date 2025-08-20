const API_key = "a623353b12f046c6ae8130303252008";
export async function fetchData(cityName) {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_key}&q=${cityName}&aqi=no`);
    console.log(response);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}
