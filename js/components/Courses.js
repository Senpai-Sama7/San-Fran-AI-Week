import { Component } from "../core/Component.js";
import { SPRINT_DATA } from "../services/DataService.js";
import { DomUtils } from "../utils/DomUtils.js";

export class Courses extends Component {
  constructor(elementId, store) {
    super(elementId, store);
    this.currentFilter = "all";
    this.initFilters();
  }

  initFilters() {
    const filterBtns = this.element.querySelectorAll(".course-filter-btn");
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Update active state
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        // Update filter and re-render
        this.currentFilter = btn.dataset.filter;
        this.render();
      });
    });
  }

  render() {
    const grid = document.getElementById("coursesGrid");
    if (!grid) return;

    DomUtils.clear(grid);

    const { coursesCompleted } = this.store.getState();

    const courses = SPRINT_DATA.courses.filter((course) => {
      if (this.currentFilter === "all") return true;
      return course.category === this.currentFilter;
    });

    courses.forEach((course) => {
      const isCompleted = coursesCompleted[course.id - 1];

      const card = DomUtils.create("div", {
        className: `course-card ${isCompleted ? "completed" : ""}`,
        style: isCompleted
          ? { borderColor: "#10B981", background: "rgba(16, 185, 129, 0.05)" }
          : {},
      });

      // Header
      const header = DomUtils.create("div", { className: "course-header" }, [
        DomUtils.create("div", { className: "course-icon" }, [
          this.getCategoryIcon(course.category),
        ]),
        DomUtils.create("div", { className: "course-meta" }, [
          DomUtils.create("span", { className: "course-category" }, [
            course.category,
          ]),
          DomUtils.create("span", { className: "course-phase" }, [
            `Phase ${course.phase}`,
          ]),
        ]),
      ]);

      // Title
      const title = DomUtils.create("h3", { className: "course-title" }, [
        course.name,
      ]);
      if (isCompleted) {
        title.appendChild(
          DomUtils.create(
            "span",
            { style: { marginLeft: "8px", color: "#10B981" } },
            ["✓"]
          )
        );
      }

      // Details
      const details = DomUtils.create("div", { className: "course-details" }, [
        DomUtils.create("div", { className: "course-detail" }, [
          DomUtils.create("span", { className: "detail-label" }, ["Resource"]),
          DomUtils.create("span", { className: "detail-value" }, [
            course.resource,
          ]),
        ]),
        DomUtils.create("div", { className: "course-detail" }, [
          DomUtils.create("span", { className: "detail-label" }, ["Duration"]),
          DomUtils.create("span", { className: "detail-value" }, [
            `${course.hours} Hours`,
          ]),
        ]),
      ]);

      // Overview
      const overview = DomUtils.create(
        "div",
        { className: "course-overview" },
        [course.overview]
      );

      // Topics
      const topics = DomUtils.create("div", { className: "course-topics" });
      course.topics.forEach((topic) => {
        topics.appendChild(
          DomUtils.create("span", { className: "topic-tag" }, [topic])
        );
      });

      // Footer
      const footer = DomUtils.create("div", { className: "course-footer" });

      // Intensity Gauge
      const intensityGauge = DomUtils.create(
        "div",
        {
          className: "intensity-gauge",
          title: `Intensity: ${course.intensity}/5`,
        },
        [
          "●".repeat(course.intensity) + "○".repeat(5 - course.intensity),
          DomUtils.create("span", { className: "intensity-label" }, [
            "INTENSITY",
          ]),
        ]
      );

      // Actions
      const actions = DomUtils.create("div", {
        style: { display: "flex", gap: "10px", alignItems: "center" },
      });

      const viewBtn = DomUtils.create(
        "a",
        {
          href: course.url,
          target: "_blank",
          className: "btn btn--sm btn--outline",
        },
        ["VIEW COURSE →"]
      );

      const completeBtn = DomUtils.create(
        "button",
        {
          className: `btn btn--sm ${
            isCompleted ? "btn--primary" : "btn--outline"
          }`,
          onclick: () => this.toggleComplete(course.id),
        },
        [isCompleted ? "COMPLETED" : "MARK COMPLETE"]
      );

      actions.appendChild(completeBtn);
      actions.appendChild(viewBtn);

      footer.appendChild(intensityGauge);
      footer.appendChild(actions);

      // Assemble Card
      card.appendChild(header);
      card.appendChild(title);
      card.appendChild(details);
      card.appendChild(overview);
      card.appendChild(topics);
      card.appendChild(footer);

      grid.appendChild(card);
    });
  }

  toggleComplete(id) {
    const { coursesCompleted, hoursCompleted } = this.store.getState();
    const index = id - 1;
    const isNowComplete = !coursesCompleted[index];

    const newCompleted = [...coursesCompleted];
    newCompleted[index] = isNowComplete;

    // Calculate hours change
    const course = SPRINT_DATA.courses.find((c) => c.id === id);
    const hoursChange = isNowComplete ? course.hours : -course.hours;

    this.store.setState({
      coursesCompleted: newCompleted,
      hoursCompleted: hoursCompleted + hoursChange,
    });
  }

  getCategoryIcon(category) {
    switch (category) {
      case "Python/AI":
        return "🐍";
      case "C#/Unity":
        return "🎮";
      case "XR":
        return "🥽";
      case "Computer Vision":
        return "👁️";
      case "Integration":
        return "🔄";
      default:
        return "📚";
    }
  }
}
