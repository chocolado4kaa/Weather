const weatherIcons = [
  { code: 1000, dayicon: "/icons/sun.png", nighticon: "/icons/moon.png" }, // sunny / Clear
  { code: 1003, dayicon: "/icons/cloud+sun.png", nighticon: "/icons/cloud+moon.png" }, // Partly Cloudy
  { code: 1006, dayicon: "/icons/clouds.png", nighticon: "/icons/clouds.png" }, // Cloudy
  { code: 1009, dayicon: "/icons/clouds.png", nighticon: "/icons/clouds.png" }, // Overcast
  { code: 1030, dayicon: "/icons/clouds.png", nighticon: "/icons/clouds.png" }, // Mist
  { code: 1063, dayicon: "/icons/rain+sun.png", nighticon: "/icons/rain+cloud.png" }, // Patchy rain nearby
  { code: 1066, dayicon: "/icons/cloud+snow.png", nighticon: "/icons/cloud+snow.png" }, // Patchy snow nearby
  { code: 1069, dayicon: "/icons/rain+snow.png", nighticon: "/icons/rain+snow.png" }, // Patchy sleet nearby
  { code: 1072, dayicon: "/icons/rain+snow.png", nighticon: "/icons/rain+snow.png" }, // Patchy freezing drizzle nearby
  { code: 1087, dayicon: "/icons/cloud+lightning.png", nighticon: "/icons/cloud+lightning.png" }, // Thundery outbreaks
  { code: 1114, dayicon: "/icons/wind+snow.png", nighticon: "/icons/wind+snow.png" }, // Blowing snow
  { code: 1117, dayicon: "/icons/snow.png", nighticon: "/icons/snow.png" }, // Blizzard
  { code: 1135, dayicon: "/icons/clouds.png", nighticon: "/icons/clouds.png" }, // Fog
  { code: 1147, dayicon: "/icons/clouds.png", nighticon: "/icons/clouds.png" }, // Freezing fog
  { code: 1150, dayicon: "/icons/rain+sun.png", nighticon: "/icons/rain+cloud.png" }, // Patchy light drizzle
  { code: 1153, dayicon: "/icons/rain.png", nighticon: "/icons/rain.png" }, // Light drizzle
  { code: 1168, dayicon: "/icons/rain+snow.png", nighticon: "/icons/rain+snow.png" }, // Freezing drizzle
  { code: 1171, dayicon: "/icons/rain+snow.png", nighticon: "/icons/rain+snow.png" }, // Heavy freezing drizzle
  { code: 1180, dayicon: "/icons/rain+sun.png", nighticon: "/icons/rain+cloud.png" }, // Patchy light rain
  { code: 1183, dayicon: "/icons/rain.png", nighticon: "/icons/rain.png" }, // Light rain
  { code: 1186, dayicon: "/icons/rain+sun.png", nighticon: "/icons/rain+cloud.png" }, // Moderate rain at times
  { code: 1189, dayicon: "/icons/rain.png", nighticon: "/icons/rain.png" }, // Moderate rain
  { code: 1192, dayicon: "/icons/rain+sun.png", nighticon: "/icons/rain+cloud.png" }, // Heavy rain at times
  { code: 1195, dayicon: "/icons/rain.png", nighticon: "/icons/rain.png" }, // Heavy rain
  { code: 1198, dayicon: "/icons/rain+snow.png", nighticon: "/icons/rain+snow.png" }, // Light freezing rain
  { code: 1201, dayicon: "/icons/rain+snow.png", nighticon: "/icons/rain+snow.png" }, // Moderate/heavy freezing rain
  { code: 1204, dayicon: "/icons/rain+snow.png", nighticon: "/icons/rain+snow.png" }, // Light sleet
  { code: 1207, dayicon: "/icons/rain+snow.png", nighticon: "/icons/rain+snow.png" }, // Moderate/heavy sleet
  { code: 1210, dayicon: "/icons/cloud+snow.png", nighticon: "/icons/cloud+snow.png" }, // Patchy light snow
  { code: 1213, dayicon: "/icons/snow.png", nighticon: "/icons/snow.png" }, // Light snow
  { code: 1216, dayicon: "/icons/cloud+snow.png", nighticon: "/icons/cloud+snow.png" }, // Patchy moderate snow
  { code: 1219, dayicon: "/icons/snow.png", nighticon: "/icons/snow.png" }, // Moderate snow
  { code: 1222, dayicon: "/icons/cloud+snow.png", nighticon: "/icons/cloud+snow.png" }, // Patchy heavy snow
  { code: 1225, dayicon: "/icons/rain+snow.png", nighticon: "/icons/rain+snow.png" }, // Heavy snow
  { code: 1237, dayicon: "/icons/rain+snow.png", nighticon: "/icons/rain+snow.png" }, // Ice pellets
  { code: 1240, dayicon: "/icons/rain+sun.png", nighticon: "/icons/rain+cloud.png" }, // Light rain shower
  { code: 1243, dayicon: "/icons/rain.png", nighticon: "/icons/rain.png" }, // Moderate/heavy rain shower
  { code: 1246, dayicon: "/icons/rain.png", nighticon: "/icons/rain.png" }, // Torrential rain shower
  { code: 1249, dayicon: "/icons/rain+snow.png", nighticon: "/icons/rain+snow.png" }, // Light sleet showers
  { code: 1252, dayicon: "/icons/rain+snow.png", nighticon: "/icons/rain+snow.png" }, // Moderate/heavy sleet showers
  { code: 1255, dayicon: "/icons/cloud+snow.png", nighticon: "/icons/cloud+snow.png" }, // Light snow showers
  { code: 1258, dayicon: "/icons/snow.png", nighticon: "/icons/snow.png" }, // Moderate/heavy snow showers
  { code: 1261, dayicon: "/icons/rain+snow.png", nighticon: "/icons/rain+snow.png" }, // Light showers of ice pellets
  { code: 1264, dayicon: "/icons/rain+snow.png", nighticon: "/icons/rain+snow.png" }, // Moderate/heavy showers of ice pellets
  { code: 1273, dayicon: "/icons/cloud+lightning.png", nighticon: "/icons/cloud+lightning.png" }, // Patchy light rain with thunder
  { code: 1276, dayicon: "/icons/cloud+lightning.png", nighticon: "/icons/cloud+lightning.png" }, // Moderate/heavy rain with thunder
  { code: 1279, dayicon: "/icons/cloud+lightning.png", nighticon: "/icons/cloud+lightning.png" }, // Patchy light snow with thunder
  { code: 1282, dayicon: "/icons/cloud+lightning.png", nighticon: "/icons/cloud+lightning.png" }, // Moderate/heavy snow with thunder
];

export default weatherIcons;
