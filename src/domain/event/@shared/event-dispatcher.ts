import EventDispatcherInterface from "./event-dispatcher.interface";
import EventHandlerInterface from "./event-handler.interface";
import EventInterface from "./event.interface";

export default class EventDispatcher implements EventDispatcherInterface {
  private eventHandlers: { [eventName: string]: EventHandlerInterface[] } = {};
  getEventHandlers(eventName: string): EventHandlerInterface<EventInterface>[] {
    return this.eventHandlers[eventName] || [];
  }
  register(
    eventName: string,
    eventHandler: EventHandlerInterface<EventInterface>
  ): void {
    if (!this.eventHandlers[eventName]) {
      this.eventHandlers[eventName] = [];
    }
    this.eventHandlers[eventName].push();
  }
  unresgister(
    eventName: string,
    eventHandler: EventHandlerInterface<EventInterface>
  ): void {}
  unresgiterAll(): void {}

  notify(event: EventInterface): void {}
}
