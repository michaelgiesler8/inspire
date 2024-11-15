export class Weather {
    constructor(data) {
        this.temperatureKelvin = data.main.temp;
        this.city = data.name;
        this.unit = 'F';
    }

    get temperature() {
        if (this.unit === 'F') {
            return ((this.temperatureKelvin - 273.15) * 9) / 5 + 32;
        } else {
            return this.temperatureKelvin - 273.15;
        }
    }

    get Template() {
        return `
            <div onclick="app.weatherController.toggleUnit()" class="weather-info">
                ${this.city}: ${this.temperature.toFixed(1)}°${this.unit}
            </div>
        `;
    }
}
