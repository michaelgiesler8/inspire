import { AppState } from '../AppState.js';
import { imageService } from '../services/ImageService.js';

export class ImageController {
    constructor() {
        AppState.on('image', this.drawImage.bind(this));
        this.getImage();
    }

}