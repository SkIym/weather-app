// Call API

class WeatherFetcher {
  constructor () {
    this.key = '716a4e8532104f9183520611231808';
    this.city = 'Manila';
    this.method = 'current.json';
  }

  async fetchData(city = this.city, method = this.method) {

    this.city = city;
    this.method = method;
    const baseurl = `https://api.weatherapi.com/v1/${this.method}?key=${this.key}&q=${this.city}`;

    try {
      const response = await fetch(baseurl, {mode: 'cors'});
      if (!response.ok) {
        throw new Error();
      }
      const weatherData = await response.json();
      // asnyc funtion, so it ruturns a promise
      return weatherData;

    } catch(e) {
      throw new Error();
    }
    
  }
}

const weatherFetcher = new WeatherFetcher();
export default weatherFetcher;