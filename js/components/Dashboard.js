import { Component } from "../core/Component.js";
import { SPRINT_DATA } from "../services/DataService.js";
import { Helpers } from "../utils/Helpers.js";
import { DomUtils } from "../utils/DomUtils.js";

export class Dashboard extends Component {
  constructor(elementId, store) {
    super(elementId, store);
    this.charts = {};
  }

  render() {
    this.renderKPIs();
    this.renderTimeline();
    this.renderCurrentPhase();
    this.renderTodaySchedule();
    // Charts need to be rendered after the DOM is updated
    requestAnimationFrame(() => this.renderCharts());
  }

  createIcon(paths) {
    return DomUtils.createSVG(
      "svg",
      {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
      },
      paths.map((p) => DomUtils.createSVG(p.tag, p.attrs))
    );
  }

  renderKPIs() {
    const daysRemaining = Helpers.getDaysRemaining(SPRINT_DATA.endDate);
    const { hoursCompleted, projectsCompleted, eventsAttended } =
      this.store.getState();

    const kpiContainer = document.getElementById("kpiGrid");
    if (!kpiContainer) return;

    DomUtils.clear(kpiContainer);

    const kpis = [
      {
        label: "Days Remaining",
        value: daysRemaining,
        icon: [
          {
            tag: "rect",
            attrs: {
              x: "3",
              y: "4",
              width: "18",
              height: "18",
              rx: "2",
              ry: "2",
            },
          },
          { tag: "line", attrs: { x1: "16", y1: "2", x2: "16", y2: "6" } },
          { tag: "line", attrs: { x1: "8", y1: "2", x2: "8", y2: "6" } },
          { tag: "line", attrs: { x1: "3", y1: "10", x2: "21", y2: "10" } },
        ],
      },
      {
        label: "Hours Completed",
        value: hoursCompleted,
        icon: [
          { tag: "circle", attrs: { cx: "12", cy: "12", r: "10" } },
          { tag: "polyline", attrs: { points: "12 6 12 12 16 14" } },
        ],
      },
      {
        label: "Projects Shipped",
        value: `${projectsCompleted.filter(Boolean).length}/3`,
        icon: [
          { tag: "path", attrs: { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" } },
          { tag: "polyline", attrs: { points: "22 4 12 14.01 9 11.01" } },
        ],
      },
      {
        label: "Events Attended",
        value: eventsAttended.filter(Boolean).length,
        icon: [
          {
            tag: "path",
            attrs: { d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" },
          },
          { tag: "circle", attrs: { cx: "9", cy: "7", r: "4" } },
          { tag: "path", attrs: { d: "M23 21v-2a4 4 0 0 0-3-3.87" } },
          { tag: "path", attrs: { d: "M16 3.13a4 4 0 0 1 0 7.75" } },
        ],
      },
    ];

    kpis.forEach((kpi) => {
      const card = DomUtils.create("div", { className: "kpi-card" }, [
        DomUtils.create("div", { className: "kpi-icon" }, [
          this.createIcon(kpi.icon),
        ]),
        DomUtils.create("div", { className: "kpi-content" }, [
          DomUtils.create("div", { className: "kpi-value" }, [kpi.value]),
          DomUtils.create("div", { className: "kpi-label" }, [kpi.label]),
        ]),
      ]);
      kpiContainer.appendChild(card);
    });
  }

  renderTimeline() {
    const container = document.getElementById("timeline");
    if (!container) return;

    DomUtils.clear(container);

    const totalDays = 28;
    const start = new Date(SPRINT_DATA.startDate);
    const now = new Date(SPRINT_DATA.currentDate);
    const diff = now - start;
    const currentDay = Math.ceil(diff / (1000 * 60 * 60 * 24));
    const progress = Math.min(100, Math.max(0, (currentDay / totalDays) * 100));

    const header = DomUtils.create(
      "div",
      { className: "card-header flex-between" },
      [
        DomUtils.create("h3", {}, ["Sprint Timeline"]),
        DomUtils.create("div", { className: "text-sm text-muted" }, [
          `Day ${currentDay} of ${totalDays}`,
        ]),
      ]
    );

    const timelineBar = DomUtils.create("div", { className: "timeline-bar" });
    SPRINT_DATA.phases.forEach((phase) => {
      const days =
        parseInt(phase.days.split("-")[1]) -
        parseInt(phase.days.split("-")[0]) +
        1;
      const width = (days / totalDays) * 100;

      timelineBar.appendChild(
        DomUtils.create(
          "div",
          {
            className: "timeline-phase",
            style: {
              width: `${width}%`,
              background: phase.bgColor,
              color: phase.color,
            },
          },
          [phase.name]
        )
      );
    });

    const progressBar = DomUtils.create("div", { className: "progress-bar" }, [
      DomUtils.create("div", {
        className: "progress-fill",
        style: { width: `${progress}%` },
      }),
    ]);

    container.appendChild(header);
    container.appendChild(timelineBar);
    container.appendChild(progressBar);
  }

  renderCurrentPhase() {
    const container = document.getElementById("currentPhase");
    if (!container) return;

    DomUtils.clear(container);

    const start = new Date(SPRINT_DATA.startDate);
    const now = new Date(SPRINT_DATA.currentDate);
    const diff = now - start;
    const currentDay = Math.ceil(diff / (1000 * 60 * 60 * 24));

    const phase = SPRINT_DATA.phases.find(
      (p) => currentDay >= p.startDay && currentDay <= p.endDay
    );

    if (!phase) return;

    container.appendChild(
      DomUtils.create("div", { className: "card-header" }, [
        DomUtils.create("h3", {}, ["Current Phase"]),
      ])
    );

    const isHighRisk = currentDay < 8;

    const phaseInfo = DomUtils.create(
      "div",
      {
        className: "phase-info",
        style: {
          background: phase.bgColor,
          padding: "var(--space-md)",
          borderRadius: "var(--border-radius-sm)",
          color: phase.color,
        },
      },
      [
        DomUtils.create("h2", { style: { marginBottom: "var(--space-xs)" } }, [
          phase.name,
        ]),
        DomUtils.create(
          "div",
          {
            className: "text-sm",
            style: { opacity: "0.9", marginBottom: "var(--space-md)" },
          },
          [`Day ${currentDay} of 28 • ${phase.dates}`]
        ),
        DomUtils.create("div", { className: "grid-2" }, [
          DomUtils.create("div", {}, [
            DomUtils.create(
              "div",
              { className: "text-xs uppercase", style: { opacity: "0.7" } },
              ["Daily Commitment"]
            ),
            DomUtils.create("div", { className: "text-lg font-bold" }, [
              `${phase.hoursPerDay} hrs/day`,
            ]),
          ]),
          DomUtils.create("div", {}, [
            DomUtils.create(
              "div",
              { className: "text-xs uppercase", style: { opacity: "0.7" } },
              ["Burnout Risk"]
            ),
            DomUtils.create(
              "div",
              {
                className: "text-lg font-bold",
                style: { color: isHighRisk ? "#EF4444" : "#10B981" },
              },
              [isHighRisk ? "HIGH ⚠️" : "MEDIUM ✓"]
            ),
          ]),
        ]),
      ]
    );

    container.appendChild(phaseInfo);

    container.appendChild(
      DomUtils.create("div", { style: { marginTop: "var(--space-md)" } }, [
        DomUtils.create(
          "div",
          { className: "text-sm uppercase text-muted mb-sm" },
          ["Current Focus"]
        ),
        DomUtils.create("p", {}, [phase.focus]),
      ])
    );
  }

  renderTodaySchedule() {
    const container = document.getElementById("todaySchedule");
    if (!container) return;

    DomUtils.clear(container);

    const dateStr = SPRINT_DATA.currentDate.toISOString().split("T")[0];
    const schedule = SPRINT_DATA.dailySchedule.find((s) => s.date === dateStr);

    if (!schedule) {
      container.appendChild(
        DomUtils.create("p", {}, ["No specific schedule for today."])
      );
      return;
    }

    container.appendChild(
      DomUtils.create("div", { className: "card-header" }, [
        DomUtils.create("h3", {}, ["Today's Schedule"]),
      ])
    );

    const scheduleList = DomUtils.create("div", { className: "schedule-list" });

    schedule.blocks.forEach((block) => {
      scheduleList.appendChild(
        DomUtils.create(
          "div",
          {
            className: "schedule-block",
            style: {
              padding: "var(--space-sm)",
              borderBottom: "1px solid var(--color-border)",
              display: "flex",
              justifyContent: "space-between",
            },
          },
          [
            DomUtils.create("div", {}, [
              DomUtils.create(
                "div",
                { className: "text-xs uppercase text-muted" },
                [block.name]
              ),
              DomUtils.create("div", { className: "font-bold" }, [block.topic]),
            ]),
            DomUtils.create("div", { className: "text-sm" }, [
              `${block.hours}h`,
            ]),
          ]
        )
      );
    });

    container.appendChild(scheduleList);

    container.appendChild(
      DomUtils.create(
        "div",
        {
          style: {
            marginTop: "var(--space-md)",
            paddingTop: "var(--space-sm)",
            borderTop: "1px solid var(--color-border)",
            fontWeight: "bold",
            textAlign: "right",
          },
        },
        [`Total: ${schedule.totalHours} hours`]
      )
    );
  }

  renderCharts() {
    if (typeof Chart === "undefined") return;

    const timeCtx = document.getElementById("timeAllocationChart");
    if (timeCtx) {
      if (this.charts.timeAllocation) {
        this.charts.timeAllocation.destroy();
      }

      this.charts.timeAllocation = new Chart(timeCtx, {
        type: "pie",
        data: {
          labels: ["Python/AI", "C#/Unity", "XR", "CV", "Integration"],
          datasets: [
            {
              data: [28, 23, 20, 12, 6],
              backgroundColor: [
                "#64748B",
                "#94A3B8",
                "#60A5FA",
                "#93C5FD",
                "#CBD5E1",
              ],
              borderWidth: 2,
              borderColor: "#FFFFFF",
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { position: "bottom" },
          },
        },
      });
    }

    // Add Skill Radar Chart if element exists
    const skillCtx = document.getElementById("skillRadarChart");
    if (skillCtx) {
      if (this.charts.skillRadar) {
        this.charts.skillRadar.destroy();
      }

      this.charts.skillRadar = new Chart(skillCtx, {
        type: "radar",
        data: {
          labels: [
            "Python",
            "Unity/C#",
            "AI/LLMs",
            "XR Design",
            "Comp Vision",
            "System Arch",
          ],
          datasets: [
            {
              label: "Current Skills",
              data: [65, 40, 70, 30, 45, 60],
              fill: true,
              backgroundColor: "rgba(96, 165, 250, 0.2)",
              borderColor: "rgb(96, 165, 250)",
              pointBackgroundColor: "rgb(96, 165, 250)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgb(96, 165, 250)",
            },
          ],
        },
        options: {
          elements: {
            line: { borderWidth: 3 },
          },
          scales: {
            r: {
              angleLines: { display: true },
              suggestedMin: 0,
              suggestedMax: 100,
            },
          },
        },
      });
    }
  }

  destroy() {
    Object.values(this.charts).forEach((chart) => chart.destroy());
    super.destroy();
  }
}
