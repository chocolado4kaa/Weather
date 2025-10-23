const weatherIcons = [
  { code: 1000, dayicon: "/Weather/icons/sun.png", nighticon: "/Weather/icons/moon.png" }, // sunny / Clear
  { code: 1003, dayicon: "/Weather/icons/cloud+sun.png", nighticon: "/Weather/icons/cloud+moon.png" }, // Partly Cloudy
  { code: 1006, dayicon: "/Weather/icons/clouds.png", nighticon: "/Weather/icons/clouds.png" }, // Cloudy
  { code: 1009, dayicon: "/Weather/icons/clouds.png", nighticon: "/Weather/icons/clouds.png" }, // Overcast
  { code: 1030, dayicon: "/Weather/icons/clouds.png", nighticon: "/Weather/icons/clouds.png" }, // Mist
  { code: 1063, dayicon: "/Weather/icons/rain+sun.png", nighticon: "/Weather/icons/rain+cloud.png" }, // Patchy rain nearby
  { code: 1066, dayicon: "/Weather/icons/cloud+snow.png", nighticon: "/Weather/icons/cloud+snow.png" }, // Patchy snow nearby
  { code: 1069, dayicon: "/Weather/icons/rain+snow.png", nighticon: "/Weather/icons/rain+snow.png" }, // Patchy sleet nearby
  { code: 1072, dayicon: "/Weather/icons/rain+snow.png", nighticon: "/Weather/icons/rain+snow.png" }, // Patchy freezing drizzle nearby
  { code: 1087, dayicon: "/Weather/icons/cloud+lightning.png", nighticon: "/Weather/icons/cloud+lightning.png" }, // Thundery outbreaks
  { code: 1114, dayicon: "/Weather/icons/wind+snow.png", nighticon: "/Weather/icons/wind+snow.png" }, // Blowing snow
  { code: 1117, dayicon: "/Weather/icons/snow.png", nighticon: "/Weather/icons/snow.png" }, // Blizzard
  { code: 1135, dayicon: "/Weather/icons/clouds.png", nighticon: "/Weather/icons/clouds.png" }, // Fog
  { code: 1147, dayicon: "/Weather/icons/clouds.png", nighticon: "/Weather/icons/clouds.png" }, // Freezing fog
  { code: 1150, dayicon: "/Weather/icons/rain+sun.png", nighticon: "/Weather/icons/rain+cloud.png" }, // Patchy light drizzle
  { code: 1153, dayicon: "/Weather/icons/rain.png", nighticon: "/Weather/icons/rain.png" }, // Light drizzle
  { code: 1168, dayicon: "/Weather/icons/rain+snow.png", nighticon: "/Weather/icons/rain+snow.png" }, // Freezing drizzle
  { code: 1171, dayicon: "/Weather/icons/rain+snow.png", nighticon: "/Weather/icons/rain+snow.png" }, // Heavy freezing drizzle
  { code: 1180, dayicon: "/Weather/icons/rain+sun.png", nighticon: "/Weather/icons/rain+cloud.png" }, // Patchy light rain
  { code: 1183, dayicon: "/Weather/icons/rain.png", nighticon: "/Weather/icons/rain.png" }, // Light rain
  { code: 1186, dayicon: "/Weather/icons/rain+sun.png", nighticon: "/Weather/icons/rain+cloud.png" }, // Moderate rain at times
  { code: 1189, dayicon: "/Weather/icons/rain.png", nighticon: "/Weather/icons/rain.png" }, // Moderate rain
  { code: 1192, dayicon: "/Weather/icons/rain+sun.png", nighticon: "/Weather/icons/rain+cloud.png" }, // Heavy rain at times
  { code: 1195, dayicon: "/Weather/icons/rain.png", nighticon: "/Weather/icons/rain.png" }, // Heavy rain
  { code: 1198, dayicon: "/Weather/icons/rain+snow.png", nighticon: "/Weather/icons/rain+snow.png" }, // Light freezing rain
  { code: 1201, dayicon: "/Weather/icons/rain+snow.png", nighticon: "/Weather/icons/rain+snow.png" }, // Moderate/heavy freezing rain
  { code: 1204, dayicon: "/Weather/icons/rain+snow.png", nighticon: "/Weather/icons/rain+snow.png" }, // Light sleet
  { code: 1207, dayicon: "/Weather/icons/rain+snow.png", nighticon: "/Weather/icons/rain+snow.png" }, // Moderate/heavy sleet
  { code: 1210, dayicon: "/Weather/icons/cloud+snow.png", nighticon: "/Weather/icons/cloud+snow.png" }, // Patchy light snow
  { code: 1213, dayicon: "/Weather/icons/snow.png", nighticon: "/Weather/icons/snow.png" }, // Light snow
  { code: 1216, dayicon: "/Weather/icons/cloud+snow.png", nighticon: "/Weather/icons/cloud+snow.png" }, // Patchy moderate snow
  { code: 1219, dayicon: "/Weather/icons/snow.png", nighticon: "/Weather/icons/snow.png" }, // Moderate snow
  { code: 1222, dayicon: "/Weather/icons/cloud+snow.png", nighticon: "/Weather/icons/cloud+snow.png" }, // Patchy heavy snow
  { code: 1225, dayicon: "/Weather/icons/rain+snow.png", nighticon: "/Weather/icons/rain+snow.png" }, // Heavy snow
  { code: 1237, dayicon: "/Weather/icons/rain+snow.png", nighticon: "/Weather/icons/rain+snow.png" }, // Ice pellets
  { code: 1240, dayicon: "/Weather/icons/rain+sun.png", nighticon: "/Weather/icons/rain+cloud.png" }, // Light rain shower
  { code: 1243, dayicon: "/Weather/icons/rain.png", nighticon: "/Weather/icons/rain.png" }, // Moderate/heavy rain shower
  { code: 1246, dayicon: "/Weather/icons/rain.png", nighticon: "/Weather/icons/rain.png" }, // Torrential rain shower
  { code: 1249, dayicon: "/Weather/icons/rain+snow.png", nighticon: "/Weather/icons/rain+snow.png" }, // Light sleet showers
  { code: 1252, dayicon: "/Weather/icons/rain+snow.png", nighticon: "/Weather/icons/rain+snow.png" }, // Moderate/heavy sleet showers
  { code: 1255, dayicon: "/Weather/icons/cloud+snow.png", nighticon: "/Weather/icons/cloud+snow.png" }, // Light snow showers
  { code: 1258, dayicon: "/Weather/icons/snow.png", nighticon: "/Weather/icons/snow.png" }, // Moderate/heavy snow showers
  { code: 1261, dayicon: "/Weather/icons/rain+snow.png", nighticon: "/Weather/icons/rain+snow.png" }, // Light showers of ice pellets
  { code: 1264, dayicon: "/Weather/icons/rain+snow.png", nighticon: "/Weather/icons/rain+snow.png" }, // Moderate/heavy showers of ice pellets
  { code: 1273, dayicon: "/Weather/icons/cloud+lightning.png", nighticon: "/Weather/icons/cloud+lightning.png" }, // Patchy light rain with thunder
  { code: 1276, dayicon: "/Weather/icons/cloud+lightning.png", nighticon: "/Weather/icons/cloud+lightning.png" }, // Moderate/heavy rain with thunder
  { code: 1279, dayicon: "/Weather/icons/cloud+lightning.png", nighticon: "/Weather/icons/cloud+lightning.png" }, // Patchy light snow with thunder
  { code: 1282, dayicon: "/Weather/icons/cloud+lightning.png", nighticon: "/Weather/icons/cloud+lightning.png" }, // Moderate/heavy snow with thunder
];

export default weatherIcons;
