import SendEmailWhenProductIsCreatedHandler from "../product/handler/send-email-when-product-is-created.handler";
import EventDispatcher from "./event-dispatcher";

describe("domain events tests", () => {
  it("should register an event handler", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendEmailWhenProductIsCreatedHandler();

    eventDispatcher.register("ProductIsCreated", eventHandler);

    expect(
      eventDispatcher.getEventHandlers("ProductCreatedEvent")
    ).toBeDefined();
    expect(eventDispatcher.getEventHandlers("ProductCreatedEvent")).not.toBe(1);
  });
});
