import * as dom from "./domCollection";

// Render changes in DOM

class WeatherView {
  constructor() {
    this.data = null;
  }

  displayAll(data) {
    this.data = data;
    this.resetView();
    this.updateData();
    this.toggleTempUnit();
  }

  toggleTempUnit(celc = true) {
    if (celc) {
      dom.temp.textContent = `${this.data.temp_c} \xB0C`;
      dom.feel.textContent = `${this.data.feelslike_c} \xB0C`;
      dom.changeUnit.textContent = "To Fahrenheit";
    } else {
      dom.temp.textContent = `${this.data.temp_f} \xB0F`;
      dom.feel.textContent = `${this.data.feelslike_f} \xB0F`;
      dom.changeUnit.textContent = "To Celsius";
    }
  }

  updateData(data) {
    dom.location.textContent = `${this.data.name}, ${this.data.country}`;
    dom.uv.textContent = `${this.data.uv}`;
    dom.humidity.textContent = `${this.data.humidity}`;
    dom.condition.textContent = `${this.data.condition}`;
    const icon = new Image();
    icon.src = this.data.icon;
    dom.icon.innerHTML = '';
    dom.icon.appendChild(icon);
  }

  displayError(msg) {
    dom.warn.textContent = msg;
    dom.weatherData.style.visibility = "hidden";
    dom.location.textContent = 'Search for a location'
  }

  resetView() {
    dom.warn.textContent = "";
    dom.weatherData.style.visibility = "visible";
  }

  showLoading() {
    dom.loader.classList.add('display');
  }

  hideLoading() {
    dom.loader.classList.remove('display')
  }
}

const weatherView = new WeatherView();
export default weatherView;
