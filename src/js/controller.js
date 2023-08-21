/* eslint-disable prefer-promise-reject-errors */
import WeatherModel from "./weatherModel";
import WeatherView from './view';
import * as dom from './domCollection';

// Control app flow
export default class App {
  static async init() {
    this.displayData('Angat');
    this.addEventsStatic();
    this.unit = true;
  }

  static async gatherData(city, method) {
    try {
      const fullData = await WeatherModel.fetchData(city, method);
      const processedData = WeatherModel.processData(fullData);
      return processedData
    } catch(e) {
      return Promise.reject('No such location found')
    }
    
  }

  static async displayData(location) {
    try {
      const weatherData = await this.gatherData(location);
      WeatherView.displayAll(weatherData);
    } catch (err) {
      return Promise.reject(err)
    }
    return 1;
  }

  static async validateInput(input) {
    if (input.validity.valueMissing) {
      return Promise.reject('Please enter a location')
    } 
    return input.value
  } 

  static async addEventsStatic() {
    dom.form.addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        const userInput = await this.validateInput(dom.searchLoc);
        await this.displayData(userInput);
        console.log(WeatherModel.data)
      } catch(err) {
        WeatherView.displayError(err)
      }
    })

    dom.changeUnit.addEventListener('click', () => {
      this.unit = !this.unit
      WeatherView.toggleTempUnit(this.unit)
    })
  }

}
