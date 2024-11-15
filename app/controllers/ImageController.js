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

    drawImage() {
        const image = AppState.image;
        const backgroundOverlay = document.getElementById('background-overlay');
        backgroundOverlay.style.backgroundImage = `url(${image.url})`;
        backgroundOverlay.style.backgroundSize = 'cover';
        backgroundOverlay.style.backgroundRepeat = 'no-repeat';
        backgroundOverlay.style.backgroundPosition = 'center';
        backgroundOverlay.style.opacity = '0.5';
    }
}