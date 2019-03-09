declare type Callback = (...args: any) => void;
declare type EventId = number | string;
interface EventManager {
    eventList: Map<EventId, Set<Callback>>;
    on: (event: EventId, callback: Callback) => () => boolean;
    emit: (event: EventId, ...args: any) => boolean;
}
declare const eventManager: EventManager;
export { eventManager };
