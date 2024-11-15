import { setHTML } from '../utils/Writer.js';

export class ClockController {
    constructor() {
        this.startClock();
    }

    startClock() {
        this.drawClock();
        setInterval(() => this.drawClock(), 1000);
    }

    drawClock() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const timeString = `${hours}:${minutes}`;
        setHTML('clock', `<h1>${timeString}</h1>`);
    }
}