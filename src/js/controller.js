import WeatherModel from "./weatherModel";
import WeatherView from './view';

// Control app flow
export default class App {
  static async init() {
    const weatherData = await this.gatherData('Angat')
    this.displayData(weatherData)
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

  static async displayData(data) {
    WeatherView.displayAll(data)
  }

}
