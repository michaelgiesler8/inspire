import { EventEmitter } from './app/utils/EventEmitter.js';
import { createObservableProxy } from './app/utils/ObservableProxy.js';

class AppState extends EventEmitter {
  user = null;
  account = null;
  quote = null;
  image = null;
  weather = null;
