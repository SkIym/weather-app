import weatherFetcher from "./callAPI";

// Control app flow
export default class App {
  constructor() {
    this.fetcher = (city, method) => weatherFetcher.fetchData(city, method);
    this.try();
  }

  try() {
    this.fetcher('Moscow', 'forecast.json').then((data) => console.log(data))
  }
  
}