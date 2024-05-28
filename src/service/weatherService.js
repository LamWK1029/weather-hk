const HKO_API_URL =
  "https://data.weather.gov.hk/weatherAPI/opendata/weather.php";

const fetchWeatherFLW = async () => {
  const dataType = "flw";
  const lang = "en";

  const response = await fetch(
    `${HKO_API_URL}?dataType=${dataType}&lang=${lang}`
  );
  const data = await response.json();
  return data;
};

const fetchWeatherFND = async () => {
  const dataType = "fnd";
  const lang = "en";

  const response = await fetch(
    `${HKO_API_URL}?dataType=${dataType}&lang=${lang}`
  );
  const data = await response.json();
  console.log(data);
  return data;
};

export { fetchWeatherFLW, fetchWeatherFND };
