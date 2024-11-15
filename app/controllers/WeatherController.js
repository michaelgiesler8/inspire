import { AppState } from '../AppState.js';
import { weatherService } from '../services/WeatherService.js';
import { setHTML } from '../utils/Writer.js';

export class WeatherController {
    constructor() {
        AppState.on('weather', this.drawWeather.bind(this));
        this.getWeather();
    }

    async getWeather() {
        try {
            await weatherService.getWeather();
        } catch (error) {
            console.error('Error getting weather:', error);
        }
    }

    drawWeather() {
        const weather = AppState.weather;
        setHTML('weather', weather.Template);
    }

