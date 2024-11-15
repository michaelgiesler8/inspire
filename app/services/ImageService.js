import { api } from './AxiosService.js';
import { AppState } from '../AppState.js';
import { Image } from '../models/Image.js';

class ImageService {
    async getImage() {
        try {
            const res = await api.get('/api/images');
            AppState.image = new Image(res.data);
        } catch (error) {
            console.error('Error fetching image:', error);
        }
    }
}

export const imageService = new ImageService();