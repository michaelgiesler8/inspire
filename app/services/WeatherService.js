import { api } from './AxiosService.js';
import { AppState } from '../AppState.js';
import { Weather } from '../models/Weather.js';

class WeatherService {
    async getWeather() {
        try {
            const res = await api.get('/api/weather');
            AppState.weather = new Weather(res.data);
        } catch (error) {
            console.error('Error fetching weather:', error);
        }
    }
}

export const weatherService = new WeatherService();