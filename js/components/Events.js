import { Component } from "../core/Component.js";
import { SPRINT_DATA } from "../services/DataService.js";
import { DomUtils } from "../utils/DomUtils.js";

export class Events extends Component {
  constructor(elementId, store) {
    super(elementId, store);
  }

  render() {
    const list = document.getElementById("eventGrid");
    if (!list) return;

    DomUtils.clear(list);

    const { eventsAttended } = this.store.getState();

    SPRINT_DATA.events.forEach((event) => {
      const isAttended = eventsAttended[event.id - 1];
      const eventDate = new Date(event.date);

      const card = DomUtils.create("div", {
        className: `event-card ${isAttended ? "attended" : ""}`,
        style: isAttended
          ? { borderColor: "#10B981", background: "rgba(16, 185, 129, 0.05)" }
          : {},
      });

      // Date Badge
      const badge = DomUtils.create("div", { className: "event-date-badge" }, [
        DomUtils.create("span", { className: "month" }, [
          eventDate.toLocaleString("default", { month: "short" }).toUpperCase(),
        ]),
        DomUtils.create("span", { className: "day" }, [eventDate.getDate()]),
      ]);

      // Content
      const content = DomUtils.create("div", { className: "event-content" });

      // Header
      const header = DomUtils.create("div", { className: "event-header" }, [
        DomUtils.create("h3", { className: "event-title" }, [event.name]),
        DomUtils.create("span", { className: "event-type" }, [event.type]),
      ]);

      // Details
      const details = DomUtils.create("div", { className: "event-details" }, [
        DomUtils.create("div", { className: "event-detail" }, [
          DomUtils.create("span", { className: "icon" }, ["📍"]),
          ` ${event.location}`,
        ]),
        DomUtils.create("div", { className: "event-detail" }, [
          DomUtils.create("span", { className: "icon" }, ["⏰"]),
          ` ${event.time}`,
        ]),
      ]);

      // Description
      const description = DomUtils.create(
        "p",
        { className: "event-description" },
        [event.description]
      );

      // Prep
      const prep = DomUtils.create("div", { className: "event-prep" }, [
        DomUtils.create("h4", {}, ["Preparation"]),
      ]);
      const ul = DomUtils.create("ul", {});
      event.prep.forEach((item) => {
        ul.appendChild(DomUtils.create("li", {}, [item]));
      });
      prep.appendChild(ul);

      // Actions
      const actions = DomUtils.create("div", {
        style: {
          marginTop: "var(--space-md)",
          display: "flex",
          gap: "10px",
          alignItems: "center",
        },
      });

      if (event.url) {
        actions.appendChild(
          DomUtils.create(
            "a",
            {
              href: event.url,
              target: "_blank",
              className: "btn btn--sm btn--outline",
            },
            ["EVENT DETAILS →"]
          )
        );
      }

      const attendBtn = DomUtils.create(
        "button",
        {
          className: `btn btn--sm ${
            isAttended ? "btn--primary" : "btn--outline"
          }`,
          onclick: () => this.toggleAttended(event.id),
        },
        [isAttended ? "ATTENDED ✓" : "MARK ATTENDED"]
      );

      actions.appendChild(attendBtn);

      // Assemble
      content.appendChild(header);
      content.appendChild(details);
      content.appendChild(description);
      content.appendChild(prep);
      content.appendChild(actions);

      card.appendChild(badge);
      card.appendChild(content);

      list.appendChild(card);
    });
  }

  toggleAttended(id) {
    const { eventsAttended } = this.store.getState();
    const index = id - 1;
    const newAttended = [...eventsAttended];
    newAttended[index] = !newAttended[index];

    this.store.setState({ eventsAttended: newAttended });
  }
}
