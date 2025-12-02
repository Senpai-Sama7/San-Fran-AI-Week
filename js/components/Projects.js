import { Component } from "../core/Component.js";
import { SPRINT_DATA } from "../services/DataService.js";
import { DomUtils } from "../utils/DomUtils.js";

export class Projects extends Component {
  constructor(elementId, store) {
    super(elementId, store);
  }

  render() {
    const grid = document.getElementById("projectsGrid");
    if (!grid) return;

    DomUtils.clear(grid);

    const { projectsCompleted } = this.store.getState();

    SPRINT_DATA.projects.forEach((project) => {
      const isCompleted = projectsCompleted[project.id - 1];

      const card = DomUtils.create("div", {
        className: `project-card ${isCompleted ? "completed" : ""}`,
        style: isCompleted
          ? { borderColor: "#10B981", background: "rgba(16, 185, 129, 0.05)" }
          : {},
      });

      // Header
      const header = DomUtils.create("div", { className: "project-header" }, [
        DomUtils.create("div", { className: "project-icon" }, ["🚀"]),
        DomUtils.create("div", { className: "project-meta" }, [
          DomUtils.create(
            "span",
            {
              className: `project-difficulty ${project.difficulty.toLowerCase()}`,
            },
            [project.difficulty]
          ),
          DomUtils.create("span", { className: "project-hours" }, [
            `${project.hours} Hours`,
          ]),
        ]),
      ]);

      // Title
      const title = DomUtils.create("h3", { className: "project-title" }, [
        project.name,
      ]);
      if (isCompleted) {
        title.appendChild(
          DomUtils.create(
            "span",
            { style: { marginLeft: "8px", color: "#10B981" } },
            ["✓ SHIPPED"]
          )
        );
      }

      // Description
      const description = DomUtils.create(
        "p",
        { className: "project-description" },
        [project.description]
      );

      // Tech Stack
      const stack = DomUtils.create("div", { className: "project-stack" });
      project.techStack.forEach((tech) => {
        stack.appendChild(
          DomUtils.create("span", { className: "tech-tag" }, [tech])
        );
      });

      // Deliverables
      const deliverables = DomUtils.create(
        "div",
        { className: "project-deliverables" },
        [DomUtils.create("h4", {}, ["Deliverables"])]
      );
      const ul = DomUtils.create("ul", {});
      project.deliverables.forEach((item) => {
        ul.appendChild(
          DomUtils.create("li", {}, [
            DomUtils.create("span", { className: "check-icon" }, ["✓"]),
            item,
          ])
        );
      });
      deliverables.appendChild(ul);

      // Actions
      const actions = DomUtils.create("div", {
        style: { marginTop: "var(--space-md)", textAlign: "right" },
      });
      const shipBtn = DomUtils.create(
        "button",
        {
          className: `btn ${isCompleted ? "btn--primary" : "btn--outline"}`,
          style: { width: "100%" },
          onclick: () => this.toggleComplete(project.id),
        },
        [isCompleted ? "PROJECT SHIPPED!" : "SHIP PROJECT 🚀"]
      );

      actions.appendChild(shipBtn);

      // Assemble
      card.appendChild(header);
      card.appendChild(title);
      card.appendChild(description);
      card.appendChild(stack);
      card.appendChild(deliverables);
      card.appendChild(actions);

      grid.appendChild(card);
    });
  }

  toggleComplete(id) {
    const { projectsCompleted } = this.store.getState();
    const index = id - 1;
    const newCompleted = [...projectsCompleted];
    newCompleted[index] = !newCompleted[index];

    this.store.setState({ projectsCompleted: newCompleted });
  }
}
