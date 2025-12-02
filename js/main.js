import { Store } from "./core/Store.js";
import { StorageService } from "./services/StorageService.js";
import { INITIAL_STATE } from "./services/DataService.js";
import { Navigation } from "./components/Navigation.js";
import { Dashboard } from "./components/Dashboard.js";
import { Calendar } from "./components/Calendar.js";
import { Courses } from "./components/Courses.js";
import { Projects } from "./components/Projects.js";
import { Events } from "./components/Events.js";
import { UI } from "./utils/UI.js";

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Store
  const savedState = StorageService.get("sprintState");
  const store = new Store(savedState || INITIAL_STATE);

  // Subscribe to store changes to save state
  store.on("stateChange", (state) => {
    StorageService.save("sprintState", state);
  });

  // Initialize Components
  new Navigation("mainNav", store);
  new Dashboard("dashboard", store);
  new Calendar("calendar", store);
  new Courses("courses", store);
  new Projects("projects", store);
  new Events("events", store);

  // Initialize UI Effects
  UI.initEntranceOverlay();
  UI.initParallaxScrolling();

  // Initial Render
  // Trigger render for the initial active tab (Dashboard)
  const dashboard = new Dashboard("dashboard", store);
  dashboard.render();
});
