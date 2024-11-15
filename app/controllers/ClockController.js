import { setHTML } from '../utils/Writer.js';

export class ClockController {
    constructor() {
        this.startClock();
    }

    startClock() {
        this.drawClock();
        setInterval(() => this.drawClock(), 1000);
    }

