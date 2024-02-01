import SendEmailWhenProductIsCreatedHandler from "../product/handler/send-email-when-product-is-created.handler";
import ProductCreatedEvent from "../product/product-created.event";
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

  it("should unregister an event handler", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendEmailWhenProductIsCreatedHandler();

    eventDispatcher.register("ProductCreatedEvent", eventHandler);

    expect(
      eventDispatcher.getEventHandlers("ProductCreatedEvent")
    ).toMatchObject(eventHandler);

    eventDispatcher.unresgister("ProductCreatedEvent", eventHandler);

    expect(
      eventDispatcher.getEventHandlers("ProductCreatedEvent")
    ).toBeDefined();

    expect(
      eventDispatcher.getEventHandlers("ProductCreatedEvent").length
    ).not.toBe(0);
  });

  it("should unregister all event handlers", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendEmailWhenProductIsCreatedHandler();

    eventDispatcher.register("ProductCreatedEvent", eventHandler);

    expect(
      eventDispatcher.getEventHandlers("ProductCreatedEvent")[0]
    ).toMatchObject(eventHandler);

    eventDispatcher.unresgiterAll();

    expect(
      eventDispatcher.getEventHandlers("ProductCreatedEvent")
    ).toBeUndefined();
  });

  it("should notify all event handlers", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendEmailWhenProductIsCreatedHandler();
    const spyEventHandler = jest.spyOn(eventHandler, "handle");

    eventDispatcher.register("ProductCreatedEvent", eventHandler);

    expect(
      eventDispatcher.getEventHandlers("ProductCreatedEvent")[0]
    ).toMatchObject(eventHandler);

    const productCreatedEvent = new ProductCreatedEvent({
      name: "Product 1",
      description: "Product 1 description",
      price: 10.0,
    });

    // Quando o notify for executado o SendEmailWhenProductIsCreatedHandler.handle() deve ser chamado
    eventDispatcher.notify(productCreatedEvent);

    expect(spyEventHandler).toHaveBeenCalled();
  });
});
