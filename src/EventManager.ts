
class EventManager {
  private events: any;

  public constructor() {
    this.events = {};
  }

  public addHandler(eventName: string, handler: any): void {
    if (eventName in this.events) this.events[eventName].push(handler);
    else this.events[eventName] = [handler];
  }

  public removeHandler(eventName: string): void {
    if (eventName in this.events) {
      this.events[eventName] = null;
      delete this.events[eventName];
    }
  }

  public trigger(eventName: string, args: string) {
    try {
      var handlers = this.events[eventName];
      handlers.forEach((handler: any) => handler(JSON.parse(args)));
    } catch (e: any) {
      console.log(e.toString());
    }
  }
}

const eventManager = (window as any).EventManager || new EventManager();
(window as any).EventManager = eventManager;
export default eventManager;
