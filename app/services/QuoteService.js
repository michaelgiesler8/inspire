import { api } from './AxiosService.js';
import { AppState } from '../AppState.js';
import { Quote } from '../models/Quote.js';

class QuoteService {
    async getQuote() {
        try {
            const res = await api.get('/api/quotes');
            AppState.quote = new Quote(res.data);
        } catch (error) {
            console.error('Error fetching quote:', error);
        }
    }
}

export const quoteService = new QuoteService();