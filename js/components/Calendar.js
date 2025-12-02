import { Component } from "../core/Component.js";
import { SPRINT_DATA } from "../services/DataService.js";
import { DomUtils } from "../utils/DomUtils.js";

export class Calendar extends Component {
  constructor(elementId, store) {
    super(elementId, store);
  }

  render() {
    const grid = document.getElementById("calendarGrid");
    if (!grid) return;

    DomUtils.clear(grid);

    const startDate = new Date(SPRINT_DATA.startDate);
    const endDate = new Date(SPRINT_DATA.endDate);

    // Day headers
    const dayHeaders = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    dayHeaders.forEach((day) => {
      grid.appendChild(
        DomUtils.create("div", { className: "calendar-day-header" }, [day])
      );
    });

    // Empty cells before start
    const firstDay = startDate.getDay();
    for (let i = 0; i < firstDay; i++) {
      grid.appendChild(
        DomUtils.create("div", { className: "calendar-day empty" })
      );
    }

    // Calendar days
    let currentDay = new Date(startDate);
    let dayNum = 1;
    const today = new Date(SPRINT_DATA.currentDate);

    while (currentDay <= endDate) {
      const dayEl = DomUtils.create("div", { className: "calendar-day" });

      const phase = SPRINT_DATA.phases.find(
        (p) => dayNum >= p.startDay && dayNum <= p.endDay
      );
      if (phase) {
        dayEl.style.background = phase.bgColor;
      }

      // Check if it's today (ignoring time)
      if (currentDay.toDateString() === today.toDateString()) {
        dayEl.classList.add("current");
      }

      const icons = [];
      if (dayNum <= 7) icons.push("📚");
      if (dayNum >= 3 && dayNum <= 18) icons.push("🛠️");

      const dateStr = currentDay.toISOString().split("T")[0];
      const event = SPRINT_DATA.events.find(
        (e) =>
          e.date === dateStr ||
          (e.endDate && dateStr >= e.date && dateStr <= e.endDate)
      );
      if (event) icons.push("🎮");

      // Generate preview content
      let previewImage = "coding_workspace.png";
      let previewTitle = phase ? phase.name : "Sprint Day";
      let previewSummary = phase
        ? phase.focus
        : "Continue your learning journey";
      let previewTags = [];

      if (event) {
        previewImage = "hackathon_scene.png";
        previewTitle = event.name;
        previewSummary = event.description.substring(0, 100) + "...";
        previewTags.push(event.type);
      } else if (dayNum <= 7) {
        previewImage = "coding_workspace.png";
        previewTags.push("Learning");
      } else if (dayNum >= 8 && dayNum <= 20) {
        previewImage = "vr_workspace.png";
        previewTags.push("Building");
      } else {
        previewImage = "hero_background.png";
        previewTags.push("Consolidation");
      }

      // Build Day Content
      dayEl.appendChild(
        DomUtils.create("div", { className: "calendar-day-number" }, [
          currentDay.getDate(),
        ])
      );
      dayEl.appendChild(
        DomUtils.create("div", { className: "calendar-day-icons" }, [
          icons.join(" "),
        ])
      );

      // Build Preview
      const preview = DomUtils.create(
        "div",
        { className: "calendar-preview" },
        [
          DomUtils.create("img", {
            src: previewImage,
            alt: previewTitle,
            className: "preview-image",
          }),
          DomUtils.create("div", { className: "preview-title" }, [
            previewTitle,
          ]),
          DomUtils.create("div", { className: "preview-summary" }, [
            previewSummary,
          ]),
        ]
      );

      const meta = DomUtils.create("div", { className: "preview-meta" });
      previewTags.forEach((tag) => {
        meta.appendChild(
          DomUtils.create("span", { className: "preview-tag" }, [tag])
        );
      });
      meta.appendChild(
        DomUtils.create("span", { className: "preview-tag" }, [`Day ${dayNum}`])
      );

      preview.appendChild(meta);
      dayEl.appendChild(preview);

      grid.appendChild(dayEl);

      // Increment day
      currentDay.setDate(currentDay.getDate() + 1);
      dayNum++;
    }
  }
}
