import { EventEmitter } from "./EventEmitter.js";

export class Store extends EventEmitter {
  constructor(initialState = {}) {
    super();
    this.state = initialState;
  }

  getState() {
    return this.state;
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.emit("stateChange", this.state);
  }
}
