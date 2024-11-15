import { AppState } from '../AppState.js';
import { imageService } from '../services/ImageService.js';

export class ImageController {
    constructor() {
        AppState.on('image', this.drawImage.bind(this));
        this.getImage();
    }

    async getImage() {
        try {
            await imageService.getImage();
        } catch (error) {
            console.error('Error getting image:', error);
        }
    }

