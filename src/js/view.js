import * as dom from './domCollection';

// Render changes in DOM

export default class WeatherView {


  static displayAll(data) {
    console.log(data)
    dom.warn.innerHTML = `${data.country}`;
  }
  
}


