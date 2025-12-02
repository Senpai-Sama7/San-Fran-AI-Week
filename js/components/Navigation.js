import { Component } from "../core/Component.js";

export class Navigation extends Component {
  constructor(elementId, store) {
    super(elementId, store);
    this.init();
  }

  init() {
    const tabs = this.element.querySelectorAll(".nav-tab");
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.getAttribute("data-tab");
        this.store.setState({ currentTab: target });
      });
    });
  }

  render() {
    const { currentTab } = this.store.getState();
    const tabs = this.element.querySelectorAll(".nav-tab");

    tabs.forEach((tab) => {
      if (tab.getAttribute("data-tab") === currentTab) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    });

    // Also handle visibility of sections
    const sections = ["dashboard", "calendar", "courses", "projects", "events"];
    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) {
        if (section === currentTab) {
          el.classList.add("active");
          el.classList.remove("hidden");
        } else {
          el.classList.remove("active");
          el.classList.add("hidden");
        }
      }
    });
  }
}
