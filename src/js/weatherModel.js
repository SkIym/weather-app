// Call API

export default class WeatherModel {
  static async fetchData(city, method = "current.json") {
    const baseurl = `https://api.weatherapi.com/v1/${method}?key=716a4e8532104f9183520611231808&q=${city}`;

    try {
      const response = await fetch(baseurl, { mode: "cors" });
      if (!response.ok) {
        throw new Error();
      }
      const weatherData = await response.json();
      console.log(weatherData);
      return weatherData;
    } catch (e) {
      throw new Error();
    }
  }

  static processData(data) {
    const processedData = {
      temp_c: data.current.temp_c,
      feelslike_c: data.current.feelslike_c,
      temp_f: data.current.temp_f,
      feelslike_f: data.current.feelslike_f,
      uv: data.current.uv,
      humidity: data.current.humidity,
      condition: data.current.condition.text,
      name: data.location.name,
      country: data.location.country,
      time: data.location.localtime,
      icon: data.current.condition.icon,
    };
    return processedData;
  }
}
