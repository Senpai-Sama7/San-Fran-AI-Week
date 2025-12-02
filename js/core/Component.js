import { DomUtils } from "../utils/DomUtils.js";

export class Component {
  constructor(elementId, store) {
    this.element = document.getElementById(elementId);
    this.store = store;
    this.unsubscribe = null;

    if (store) {
      this.unsubscribe = store.on("stateChange", () => this.render());
    }
  }

  render() {
    throw new Error("Component must implement render method");
  }

  destroy() {
    if (this.unsubscribe) {
      this.unsubscribe(); // Assuming EventEmitter returns an unsubscribe function, or we need to implement it
    }
    DomUtils.clear(this.element);
  }
}
