import { AuthController } from './app/controllers/AuthController.js';
import { QuoteController } from './app/controllers/QuoteController.js';
import { ImageController } from './app/controllers/ImageController.js';
import { WeatherController } from './app/controllers/WeatherController.js';
import { ClockController } from './app/controllers/ClockController.js';
import { TodoController } from './app/controllers/TodoController.js'

class App {
  authController = new AuthController();
  quoteController = new QuoteController();
  imageController = new ImageController();
  weatherController = new WeatherController();
  clockController = new ClockController();
  todoController = new TodoController();
}

window.app = new App();