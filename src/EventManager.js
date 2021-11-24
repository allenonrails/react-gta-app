
class EventManager {
  events;

  constructor() {
    this.events = {};
  }

  addHandler(eventName, handler) {
    if (eventName in this.events) this.events[eventName].push(handler);
    else this.events[eventName] = [handler];
  }

  removeHandler(eventName) {
    if (eventName in this.events) {
      this.events[eventName] = null;
      delete this.events[eventName];
    }
  }

  trigger(eventName, args,) {
    try {
      var handlers = this.events[eventName];
      handlers.forEach((handler) => handler(JSON.parse(args)));
    } catch (e) {
      console.log(e.toString());
    }
  }
}

const eventManager = window.EventManager || new EventManager();
window.EventManager = eventManager;
export default eventManager;
