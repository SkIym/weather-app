import WeatherModel from "./weatherModel";

// Control app flow
export default class App {
  static async init() {
    const weatherData = await this.gatherData('Angat')
    console.log(weatherData)
  }

  static async gatherData(city, method) {
    try {
      const fullData = await WeatherModel.fetchData(city, method);
      const processedData = WeatherModel.processData(fullData);
      return processedData
    } catch(e) {
      return 'Error'
    }
    
  }

}
