// Data
const sprintData = {
  startDate: new Date("2025-11-28"),
  endDate: new Date("2025-12-25"),
  currentDate: new Date("2025-11-29"),
  phases: [
    {
      name: "Foundation Sprint",
      days: "1-7",
      dates: "Nov 28 - Dec 4",
      color: "#3B82F6",
      bgColor: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
      hoursPerDay: "12-15",
      focus: "Python, C#, Unity, XR, CV, AI basics",
      startDay: 1,
      endDay: 7,
    },
    {
      name: "Build Sprint + Events",
      days: "8-20",
      dates: "Dec 5 - Dec 17",
      color: "#10B981",
      bgColor: "linear-gradient(135deg, #10B981 0%, #14B8A6 100%)",
      hoursPerDay: "8-20",
      focus: "Ship Project 3, attend events, network",
      startDay: 8,
      endDay: 20,
    },
    {
      name: "Consolidation",
      days: "21-28",
      dates: "Dec 18 - Dec 25",
      color: "#F97316",
      bgColor: "linear-gradient(135deg, #F97316 0%, #EC4899 100%)",
      hoursPerDay: "5-8",
      focus: "Reflect, polish portfolio, open source",
      startDay: 21,
      endDay: 28,
    },
  ],
  courses: [
    {
      id: 1,
      name: "Python Fundamentals",
      resource: "DeepLearning.AI",
      hours: 10,
      phase: 1,
      days: "1-2",
      category: "Python/AI",
      topics: [
        "Variables & data types",
        "Loops & functions",
        "API calls & JSON parsing",
        "Error handling",
      ],
      prerequisites: null,
      url: "https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/",
      overview:
        "Master Python basics with hands-on exercises. Learn to write clean, efficient code and work with APIs for real-world applications.",
      intensity: 2,
    },
    {
      id: 2,
      name: "LLM Integration",
      resource: "KDnuggets + DeepL.AI",
      hours: 8,
      phase: 1,
      days: "2-3",
      category: "Python/AI",
      topics: [
        "OpenAI API",
        "Prompt engineering",
        "Streaming responses",
        "Token counting",
      ],
      prerequisites: 1,
      url: "https://www.deeplearning.ai/short-courses/building-systems-with-chatgpt/",
      overview:
        "Build production-ready LLM applications. Learn prompt engineering, API integration, and how to handle streaming responses efficiently.",
      intensity: 3,
    },
    {
      id: 3,
      name: "C# Fundamentals",
      resource: "Code Monkey YouTube",
      hours: 15,
      phase: 1,
      days: "1-3",
      category: "C#/Unity",
      topics: [
        "Variables & types",
        "Classes & OOP",
        "Methods & events",
        "Unity scripting",
      ],
      prerequisites: null,
      url: "https://www.youtube.com/watch?v=IFayQioG71A",
      overview:
        "Complete C# crash course for Unity development. From basic syntax to object-oriented programming with practical game examples.",
      intensity: 3,
    },
    {
      id: 4,
      name: "Unity Fundamentals",
      resource: "Code Monkey course",
      hours: 8,
      phase: 1,
      days: "3-4",
      category: "C#/Unity",
      topics: [
        "Editor & GameObjects",
        "Scenes & transforms",
        "Physics & colliders",
        "Prefabs",
      ],
      prerequisites: 3,
      url: "https://learn.unity.com/course/create-with-code",
      overview:
        "Official Unity beginner course. Learn the Unity editor, scene management, physics system, and prefab workflows through hands-on projects.",
      intensity: 2,
    },
    {
      id: 5,
      name: "XR Interaction Toolkit",
      resource: "Meta + Rob Shocks",
      hours: 12,
      phase: 1,
      days: "4-5",
      category: "XR",
      topics: [
        "XR Rig setup",
        "Teleportation",
        "Grab interactions",
        "Hand tracking basics",
      ],
      prerequisites: 4,
      url: "https://developer.oculus.com/documentation/unity/unity-tutorial-hello-vr/",
      overview:
        "Build immersive VR experiences for Meta Quest. Master XR interactions, locomotion systems, and hand tracking integration.",
      intensity: 4,
    },
    {
      id: 6,
      name: "Computer Vision",
      resource: "freeCodeCamp",
      hours: 12,
      phase: 1,
      days: "5-7",
      category: "Computer Vision",
      topics: [
        "OpenCV",
        "Real-time detection",
        "Object tracking",
        "Hand & pose detection",
      ],
      prerequisites: 1,
      url: "https://www.youtube.com/watch?v=oXlwWbU8l2o",
      overview:
        "Comprehensive OpenCV tutorial covering image processing, object detection, and real-time tracking. Build practical CV applications from scratch.",
      intensity: 4,
    },
    {
      id: 7,
      name: "LLM Agents & Tool Calling",
      resource: "LangChain docs",
      hours: 10,
      phase: 1,
      days: "6-7",
      category: "Python/AI",
      topics: [
        "Agent architecture",
        "Tool calling",
        "Structured outputs",
        "Multi-step reasoning",
      ],
      prerequisites: 2,
      url: "https://python.langchain.com/docs/tutorials/agents/",
      overview:
        "Advanced LLM patterns with LangChain. Build autonomous agents that can use tools, reason through complex tasks, and generate structured outputs.",
      intensity: 5,
    },
    {
      id: 8,
      name: "SensAI Pre-Hack Workshop",
      resource: "YouTube + SensAI Kits",
      hours: 8,
      phase: 1,
      days: "6-7",
      category: "XR",
      topics: [
        "Context-aware AI",
        "Microgestures",
        "PCA overview",
        "SensAI Kits exploration",
      ],
      prerequisites: 5,
      url: "https://www.youtube.com/@SensAI_XR",
      overview:
        "Prepare for the SensAI Hackathon. Learn context-aware AI, microgesture detection, and explore the SensAI development kits.",
      intensity: 3,
    },
    {
      id: 9,
      name: "XR+AI Integration",
      resource: "Meta PCA tutorials",
      hours: 6,
      phase: 1,
      days: "7",
      category: "Integration",
      topics: [
        "Passthrough Camera Access",
        "Real-time AI fusion",
        "Latency optimization",
        "Production patterns",
      ],
      prerequisites: "5,6,7",
      url: "https://developer.oculus.com/documentation/unity/unity-passthrough/",
      overview:
        "Combine XR and AI for cutting-edge applications. Access passthrough cameras, integrate real-time AI processing, and optimize for performance.",
      intensity: 5,
    },
  ],
  projects: [
    {
      id: 1,
      name: "AI LLM Chatbot",
      description:
        "Build a Python chatbot using OpenAI API and deploy it to Streamlit Cloud. Learn API integration, prompt engineering, and web deployment.",
      phase: 1,
      days: "1-3",
      hours: 12,
      difficulty: "Beginner",
      techStack: ["Python", "OpenAI API", "Streamlit"],
      deliverables: [
        "Python script with API integration",
        "Chat interface with Streamlit",
        "Deployed to Streamlit Cloud",
        "GitHub repo with documentation",
        "Tested with 5+ conversation types",
      ],
    },
    {
      id: 2,
      name: "VR Interactive Scene",
      description:
        "Create a VR scene on Meta Quest 3 with grabbable objects, teleportation, and hand tracking. Deploy and test on physical hardware.",
      phase: 1,
      days: "3-7",
      hours: 18,
      difficulty: "Intermediate",
      techStack: ["Unity", "C#", "Meta XR SDK", "Hand Tracking"],
      deliverables: [
        "VR scene with XR Rig",
        "3-4 grabbable objects",
        "Teleportation system",
        "Interactive UI in VR",
        "Deployed APK to Quest",
        "72+ FPS performance verified",
      ],
    },
    {
      id: 3,
      name: "Context-Aware XR+AI App",
      description:
        "Full-stack app combining Quest passthrough camera, OpenCV detection, GPT-4 vision, and VR overlay. The flagship portfolio piece.",
      phase: 2,
      days: "7-18",
      hours: 40,
      difficulty: "Advanced",
      techStack: [
        "Unity",
        "C#",
        "Python",
        "OpenCV",
        "GPT-4 Vision API",
        "Meta PCA",
      ],
      deliverables: [
        "Passthrough camera frame capture",
        "Real-time object detection",
        "LLM integration for reasoning",
        "VR overlay visualization",
        "60+ FPS performance",
        "End-to-end working demo",
        "GitHub repo with full docs",
        "Hackathon submission",
      ],
    },
  ],
  events: [
    {
      id: 1,
      name: "SensAI Hack - XR AI Hackathon",
      date: "2025-12-05",
      endDate: "2025-12-07",
      time: "Friday 10 AM - Sunday 6 PM",
      location: "Frontier Tower, 995 Market St, San Francisco",
      type: "Hackathon",
      description:
        "72-hour hackathon building XR+AI apps on Meta Quest. $1.5M in prizes, networking with 500+ XR developers.",
      prep: [
        "Join SensAI Discord Dec 4",
        "Form team (3+ people)",
        "Review SensAI Kits",
        "Prepare 2-3 app concepts",
      ],
      url: "https://sensaihack.com/sanfrancisco/",
      importance: "CRITICAL",
    },
    {
      id: 2,
      name: "Global AI Expo 2025",
      date: "2025-12-10",
      time: "1 PM - 5 PM",
      location: "San Jose Convention Center, San Jose",
      type: "Conference/Expo",
      description:
        "Large AI expo with 4 tracks: Foundational AI, Agentic AI, Applied AI, Startup Launchpad. 2000+ attendees.",
      prep: [
        "Register online",
        "Prepare elevator pitch",
        "Plan which halls to visit",
      ],
      url: "https://www.globalaiexpo.com/",
      importance: "HIGH",
    },
    {
      id: 3,
      name: "SF AI Week 2025",
      date: "2025-12-11",
      endDate: "2025-12-17",
      time: "Varies by workshop (1-2 hrs each)",
      location: "San Francisco Public Library & various",
      type: "Workshop Series",
      description:
        "Weekly workshops on AI applications: Travel with AI, Cooking with AI, Music & AI, Practical AI for Small Business.",
      prep: [
        "Check SFPL website for schedule",
        "RSVP to 2-3 workshops",
        "Bring laptop",
      ],
      url: "https://www.sf.gov/event-20251211-sf-ai-week-2025",
      importance: "MEDIUM",
    },
    {
      id: 4,
      name: "Built On Bedrock Demo Night",
      date: "2025-12-16",
      time: "5 PM - 7 PM",
      location: "AWS, 525 Market St, San Francisco",
      type: "Demo Night/Networking",
      description:
        "Agentic AI demos from startups using AWS Bedrock. Mix of pitches and networking.",
      prep: [
        "RSVP on AWS Startups",
        "Prepare 1-min intro",
        "Bring business cards",
      ],
      url: "https://aws.amazon.com/startups/",
      importance: "HIGH",
    },
    {
      id: 5,
      name: "Dr. Fei-Fei Li in Conversation",
      date: "2025-12-17",
      time: "10 AM - 12 PM",
      location: "San Francisco Public Library Main, 100 Larkin St",
      type: "Keynote",
      description:
        'The Godmother of AI discussing world models, embodied AI, and the future of vision systems. Author talk for "The Worlds I See".',
      prep: [
        "RSVP early (expect 200+ people)",
        "Arrive 15 min early",
        "Consider reading book summary",
      ],
      url: "https://sfpl.org/events/",
      importance: "CRITICAL",
    },
    {
      id: 6,
      name: "SF AI Engineers Meetup",
      date: "2025-12-03",
      time: "6 PM - 8 PM",
      location: "House of AI, 40 Boardman Pl, San Francisco",
      type: "Meetup",
      description:
        "Monthly tech talk with Google, Nexla, and Anon engineers. Open discussion on production AI systems.",
      prep: ["RSVP on Meetup.com", "Prepare 2-3 questions"],
      url: "https://www.meetup.com/san-francisco-ai-engineers/",
      importance: "MEDIUM",
    },
    {
      id: 7,
      name: "AI & Tech Mixer",
      date: "2025-12-10",
      time: "7 PM - 9 PM",
      location: "Toy Soldier, 52 Belden Pl, San Francisco",
      type: "Networking",
      description:
        "Casual happy hour with AI/ML engineers and founders. Free drinks + networking.",
      prep: ["Optional RSVP", "Just show up and talk"],
      url: "",
      importance: "LOW",
    },
  ],
  dailySchedule: [
    {
      day: 1,
      date: "2025-11-28",
      phase: 1,
      blocks: [
        { name: "Morning (6 hrs)", topic: "Python Fundamentals", hours: 6 },
        { name: "Afternoon (4 hrs)", topic: "C# Basics", hours: 4 },
        { name: "Evening (3 hrs)", topic: "Setup & Install", hours: 3 },
      ],
      totalHours: 13,
    },
    {
      day: 2,
      date: "2025-11-29",
      phase: 1,
      blocks: [
        { name: "Morning (6 hrs)", topic: "LLM Integration", hours: 6 },
        { name: "Afternoon (5 hrs)", topic: "C# Advanced", hours: 5 },
        { name: "Evening (4 hrs)", topic: "Project 1 Start", hours: 4 },
      ],
      totalHours: 15,
    },
  ],
};

// State Management
const state = {
  currentTab: "dashboard",
  hoursCompleted: 0,
  projectsCompleted: [false, false, false],
  coursesCompleted: Array(9).fill(false),
  eventsAttended: Array(7).fill(false),
  deliverables: {
    1: Array(5).fill(false),
    2: Array(6).fill(false),
    3: Array(8).fill(false),
  },
};

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initEntranceOverlay();
  initParallaxScrolling();
  initNavigation();
  updateCurrentDate();
  renderDashboard();
  renderCalendar();
  renderCourses();
  renderProjects();
  renderEvents();
  setupDarkMode();
  setupExport();
  setupModal();
});

// Entrance Overlay
function initEntranceOverlay() {
  const overlay = document.getElementById("entranceOverlay");
  setTimeout(() => {
    overlay.classList.add("hidden");
  }, 4000);
}

// Parallax Scrolling
function initParallaxScrolling() {
  const parallaxLayers = document.querySelectorAll(".parallax-layer");

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;

    parallaxLayers.forEach((layer, index) => {
      const speed = (index + 1) * 0.15;
      const yPos = -(scrolled * speed);
      layer.style.transform = `translateY(${yPos}px)`;
    });
  });
}

// Navigation
function initNavigation() {
  const tabs = document.querySelectorAll(".nav-tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetTab = tab.dataset.tab;
      switchTab(targetTab);
    });
  });
}

function switchTab(tabName) {
  // Update nav tabs
  document.querySelectorAll(".nav-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.tab === tabName);
  });

  // Update content
  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.toggle("active", content.id === tabName);
  });

  state.currentTab = tabName;
}

// Dashboard
function renderDashboard() {
  updateKPIs();
  renderTimeline();
  renderCurrentPhase();
  renderTodaySchedule();
  renderSkillGauges();
}

function updateCurrentDate() {
  const dateEl = document.getElementById("currentDate");
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  dateEl.textContent = sprintData.currentDate.toLocaleDateString(
    "en-US",
    options
  );
}

function updateKPIs() {
  // Days remaining
  const today = sprintData.currentDate;
  const end = sprintData.endDate;
  const daysRemaining = Math.ceil((end - today) / (1000 * 60 * 60 * 24));
  document.getElementById("daysRemaining").textContent = daysRemaining;

  // Hours completed
  const hoursInput = document.getElementById("hoursCompleted");
  hoursInput.value = state.hoursCompleted;
  hoursInput.addEventListener("change", (e) => {
    state.hoursCompleted = parseInt(e.target.value);
  });

  // Projects shipped
  const completedProjects = state.projectsCompleted.filter((p) => p).length;
  document.getElementById(
    "projectsShipped"
  ).textContent = `${completedProjects}/3`;
  document.getElementById("projectsProgress").style.width = `${
    (completedProjects / 3) * 100
  }%`;

  // Events attended
  const attendedEvents = state.eventsAttended.filter((e) => e).length;
  document.getElementById("eventsAttended").textContent = `${attendedEvents}/7`;
}

function renderTimeline() {
  const container = document.getElementById("timelineContainer");
  const totalDays = 28;

  const bar = document.createElement("div");
  bar.className = "timeline-bar";

  sprintData.phases.forEach((phase) => {
    const phaseDays = phase.endDay - phase.startDay + 1;
    const percentage = (phaseDays / totalDays) * 100;

    const phaseEl = document.createElement("div");
    phaseEl.className = "timeline-phase";
    phaseEl.style.width = `${percentage}%`;
    phaseEl.style.background = phase.bgColor;
    phaseEl.style.borderLeft = `4px solid ${phase.color}`;
    phaseEl.textContent = phase.name;

    bar.appendChild(phaseEl);
  });

  container.innerHTML = "";
  container.appendChild(bar);

  // Add events
  const eventsContainer = document.createElement("div");
  eventsContainer.className = "timeline-events";
  eventsContainer.innerHTML =
    '<h3 style="width: 100%; margin-bottom: 12px; font-size: 16px;">Key Events</h3>';

  const keyEvents = [
    { icon: "🎮", name: "SensAI Hack", date: "Dec 5-7" },
    { icon: "🌐", name: "Global AI Expo", date: "Dec 10" },
    { icon: "🎤", name: "Fei-Fei Li", date: "Dec 17" },
  ];

  keyEvents.forEach((event) => {
    const eventEl = document.createElement("div");
    eventEl.className = "timeline-event";
    eventEl.innerHTML = `${event.icon} <strong>${event.name}</strong> - ${event.date}`;
    eventsContainer.appendChild(eventEl);
  });

  container.appendChild(eventsContainer);
}

function renderCurrentPhase() {
  const container = document.getElementById("currentPhase");
  const currentDay =
    Math.ceil(
      (sprintData.currentDate - sprintData.startDate) / (1000 * 60 * 60 * 24)
    ) + 1;

  const phase =
    sprintData.phases.find(
      (p) => currentDay >= p.startDay && currentDay <= p.endDay
    ) || sprintData.phases[0];

  container.innerHTML = `
    <div class="phase-details" style="background: ${
      phase.bgColor
    }; border-left: 4px solid ${phase.color};">
      <h3>${phase.name}</h3>
      <p style="color: var(--color-text-secondary); margin-bottom: 16px;">Day ${currentDay} of 28 • ${
    phase.dates
  }</p>
      <div class="phase-info">
        <div class="phase-info-item">
          <div class="phase-info-label">Daily Commitment</div>
          <div class="phase-info-value">${phase.hoursPerDay} hrs/day</div>
        </div>
        <div class="phase-info-item">
        <div class="phase-info-item">
          <div class="phase-info-label">Burnout Risk</div>
          <div class="phase-info-value" style="color: var(--color-text); font-weight: bold;">  ${
            currentDay < 8 ? "HIGH ⚠️" : "MEDIUM ✓"
          }</div>
        </div>
      </div>
    </div>
  `;
}

function renderTodaySchedule() {
  const container = document.getElementById("todaySchedule");
  const todayStr = sprintData.currentDate.toISOString().split("T")[0];
  const schedule = sprintData.dailySchedule.find((s) => s.date === todayStr);

  if (!schedule) {
    container.innerHTML =
      '<div class="schedule-empty">No scheduled activities for today. Enjoy your rest day! 🎉</div>';
    return;
  }

  const blocksHTML = schedule.blocks
    .map(
      (block) => `
    <div class="schedule-block">
      <div class="schedule-block-content">
        <h4>${block.name}</h4>
        <p>${block.topic}</p>
      </div>
      <div class="schedule-block-hours">${block.hours}h</div>
    </div>
  `
    )
    .join("");

  container.innerHTML = `
    <div class="schedule-blocks">
      ${blocksHTML}
      <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--color-border); font-weight: 600;">
        Total Today: ${schedule.totalHours} hours
      </div>
    </div>
  `;
}

function renderSkillGauges() {
  const container = document.getElementById("skillGauges");
  const skills = [
    { name: "Overall Progress", value: 15 },
    { name: "Technical Skills", value: 10 },
    { name: "Portfolio Readiness", value: 5 },
  ];

  container.innerHTML = skills
    .map(
      (skill) => `
    <div class="skill-gauge">
      <div class="skill-gauge-header">
        <div class="skill-gauge-label">${skill.name}</div>
        <div class="skill-gauge-value">${skill.value}%</div>
      </div>
      <div class="skill-gauge-bar">
        <div class="skill-gauge-fill" style="width: ${skill.value}%;"></div>
      </div>
    </div>
  `
    )
    .join("");
}

// Calendar
function renderCalendar() {
  const grid = document.getElementById("calendarGrid");
  const startDate = new Date(sprintData.startDate);
  const endDate = new Date(sprintData.endDate);

  // Day headers
  const dayHeaders = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  dayHeaders.forEach((day) => {
    const header = document.createElement("div");
    header.className = "calendar-day-header";
    header.textContent = day;
    grid.appendChild(header);
  });

  // Empty cells before start
  const firstDay = startDate.getDay();
  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement("div");
    empty.className = "calendar-day empty";
    grid.appendChild(empty);
  }

  // Calendar days
  let currentDay = new Date(startDate);
  let dayNum = 1;

  while (currentDay <= endDate) {
    const dayEl = document.createElement("div");
    dayEl.className = "calendar-day";

    const phase = sprintData.phases.find(
      (p) => dayNum >= p.startDay && dayNum <= p.endDay
    );
    if (phase) {
      dayEl.style.background = phase.bgColor;
    }

    if (currentDay.toDateString() === sprintData.currentDate.toDateString()) {
      dayEl.classList.add("current");
    }

    const icons = [];
    if (dayNum <= 7) icons.push("📚");
    if (dayNum >= 3 && dayNum <= 18) icons.push("🛠️");

    const dateStr = currentDay.toISOString().split("T")[0];
    const hasEvent = sprintData.events.some(
      (e) =>
        e.date === dateStr ||
        (e.endDate && dateStr >= e.date && dateStr <= e.endDate)
    );
    const event = sprintData.events.find(
      (e) =>
        e.date === dateStr ||
        (e.endDate && dateStr >= e.date && dateStr <= e.endDate)
    );
    if (hasEvent) icons.push("🎮");

    // Generate preview content
    let previewImage = "coding_workspace.png";
    let previewTitle = phase ? phase.name : "Sprint Day";
    let previewSummary = phase ? phase.focus : "Continue your learning journey";
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

    dayEl.innerHTML = `
      <div class="calendar-day-number">${currentDay.getDate()}</div>
      <div class="calendar-day-icons">${icons.join(" ")}</div>
      <div class="calendar-preview">
        <img src="${previewImage}" alt="${previewTitle}" class="preview-image">
        <div class="preview-title">${previewTitle}</div>
        <div class="preview-summary">${previewSummary}</div>
        <div class="preview-meta">
          ${previewTags
            .map((tag) => `<span class="preview-tag">${tag}</span>`)
            .join("")}
          <span class="preview-tag">Day ${dayNum}</span>
        </div>
      </div>
    `;

    dayEl.addEventListener("click", () => showDayModal(currentDay, dayNum));

    grid.appendChild(dayEl);
    currentDay.setDate(currentDay.getDate() + 1);
    dayNum++;
  }
}

function showDayModal(date, dayNum) {
  const modal = document.getElementById("dayModal");
  const title = document.getElementById("modalTitle");
  const body = document.getElementById("modalBody");

  const phase = sprintData.phases.find(
    (p) => dayNum >= p.startDay && dayNum <= p.endDay
  );
  const dateStr = date.toISOString().split("T")[0];
  const schedule = sprintData.dailySchedule.find((s) => s.date === dateStr);
  const event = sprintData.events.find(
    (e) =>
      e.date === dateStr ||
      (e.endDate && dateStr >= e.date && dateStr <= e.endDate)
  );

  title.textContent = `Day ${dayNum} - ${date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  })}`;

  let content = `<div style="margin-bottom: 16px;"><strong>Phase:</strong> ${
    phase ? phase.name : "N/A"
  }</div>`;

  if (schedule) {
    content += '<h3 style="margin-bottom: 12px;">Schedule</h3>';
    schedule.blocks.forEach((block) => {
      content += `
        <div style="background: var(--color-secondary); padding: 12px; border-radius: 8px; margin-bottom: 8px;">
          <strong>${block.name}</strong>: ${block.topic} (${block.hours}h)
        </div>
      `;
    });
  }

  if (event) {
    content += `
      <h3 style="margin: 16px 0 12px;">Event</h3>
      <div style="background: var(--color-bg-1); padding: 16px; border-radius: 8px;">
        <strong>${event.name}</strong><br>
        <span style="color: var(--color-text-secondary);">${event.time} • ${event.location}</span>
      </div>
    `;
  }

  if (!schedule && !event) {
    content +=
      '<p style="color: var(--color-text-secondary);">No specific activities scheduled for this day.</p>';
  }

  body.innerHTML = content;
  modal.classList.add("active");
}

// Courses
function renderCourses() {
  renderPrereqTree();
  renderTimeAllocationChart();
  renderCourseCards();
  setupCourseFilters();
}

function renderPrereqTree() {
  const container = document.getElementById("prereqTree");
  const levels = [
    ["Python Fundamentals", "C# Fundamentals"],
    ["LLM Integration", "Unity Fundamentals"],
    ["LLM Agents", "XR Interaction Toolkit", "Computer Vision"],
    ["XR+AI Integration"],
  ];

  container.innerHTML = levels
    .map(
      (level, idx) => `
    <div class="prereq-level">
      ${level
        .map((course) => `<div class="prereq-node">${course}</div>`)
        .join('<span class="prereq-arrow">→</span>')}
      ${
        idx < levels.length - 1
          ? '<div style="width: 100%; text-align: center; color: var(--color-text-secondary);">↓</div>'
          : ""
      }
    </div>
  `
    )
    .join("");
}

function renderTimeAllocationChart() {
  const ctx = document.getElementById("timeAllocationChart").getContext("2d");

  const categories = {
    "Python/AI": 28,
    "C#/Unity": 23,
    XR: 20,
    "Computer Vision": 12,
    Integration: 6,
  };

  new Chart(ctx, {
    type: "pie",
    data: {
      labels: Object.keys(categories),
      datasets: [
        {
          data: Object.values(categories),
          backgroundColor: [
            "#3B82F6",
            "#8B5CF6",
            "#EC4899",
            "#F97316",
            "#10B981",
          ],
          borderWidth: 2,
          borderColor: "#FFFFFF",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            color: getComputedStyle(document.body).getPropertyValue(
              "--color-text"
            ),
          },
        },
        tooltip: {
          callbacks: {
            label: (context) => `${context.label}: ${context.parsed} hours`,
          },
        },
      },
    },
  });
}

function renderCourseCards() {
  const container = document.getElementById("courseGrid");

  container.innerHTML = sprintData.courses
    .map((course, idx) => {
      // Generate intensity gauge (1-5 scale)
      const intensityDots = Array(5)
        .fill(0)
        .map((_, i) => (i < course.intensity ? "●" : "○"))
        .join("");

      return `
    <div class="course-card" data-category="${course.category}">
      <div class="course-card-header">
        <div>
          <h3>${course.name}</h3>
          <div style="color: var(--color-text-secondary); font-size: 12px; margin-top: 4px;">${
            course.resource
          }</div>
        </div>
        <div class="course-badge">Phase ${course.phase}</div>
      </div>
      
      <p class="course-overview">${course.overview}</p>
      
      <div class="course-meta">
        <div>⏱️ ${course.hours}h</div>
        <div>📅 Days ${course.days}</div>
        <div>📂 ${course.category}</div>
      </div>
      
      <div class="intensity-gauge">
        <span class="intensity-label">INTENSITY</span>
        <span class="intensity-dots">${intensityDots}</span>
        <span class="intensity-value">${course.intensity}/5</span>
      </div>
      
      <ul class="course-topics">
        ${course.topics.map((topic) => `<li>${topic}</li>`).join("")}
      </ul>
      
      <div class="course-footer">
        <a href="${
          course.url
        }" target="_blank" rel="noopener noreferrer" class="course-link">
          VIEW COURSE →
        </a>
        <label class="checkbox-label">
          <input type="checkbox" ${
            state.coursesCompleted[idx] ? "checked" : ""
          } onchange="toggleCourse(${idx})">
          Complete
        </label>
      </div>
    </div>
  `;
    })
    .join("");
}

function setupCourseFilters() {
  const buttons = document.querySelectorAll(".course-filters .filter-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      const cards = document.querySelectorAll(".course-card");

      cards.forEach((card) => {
        if (filter === "all" || card.dataset.category === filter) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

function toggleCourse(idx) {
  state.coursesCompleted[idx] = !state.coursesCompleted[idx];
  renderCourseCards();
}

// Projects
function renderProjects() {
  renderProjectComparison();
  renderProjectCards();
}

function renderProjectComparison() {
  const ctx = document
    .getElementById("projectComparisonChart")
    .getContext("2d");

  const difficultyMap = { Beginner: 1, Intermediate: 2, Advanced: 3 };

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: sprintData.projects.map((p) => p.name),
      datasets: [
        {
          label: "Hours",
          data: sprintData.projects.map((p) => p.hours),
          backgroundColor: "#3B82F6",
        },
        {
          label: "Difficulty (1-3)",
          data: sprintData.projects.map(
            (p) => difficultyMap[p.difficulty] * 10
          ),
          backgroundColor: "#8B5CF6",
        },
        {
          label: "Deliverables",
          data: sprintData.projects.map((p) => p.deliverables.length),
          backgroundColor: "#10B981",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            color: getComputedStyle(document.body).getPropertyValue(
              "--color-text"
            ),
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: getComputedStyle(document.body).getPropertyValue(
              "--color-text"
            ),
          },
          grid: { color: "rgba(0,0,0,0.1)" },
        },
        x: {
          ticks: {
            color: getComputedStyle(document.body).getPropertyValue(
              "--color-text"
            ),
          },
          grid: { display: false },
        },
      },
    },
  });
}

function renderProjectCards() {
  const container = document.getElementById("projectGrid");

  container.innerHTML = sprintData.projects
    .map((project, idx) => {
      const completed = state.deliverables[project.id].filter((d) => d).length;
      const total = project.deliverables.length;
      const progress = Math.round((completed / total) * 100);

      return `
      <div class="project-card">
        <div class="project-card-header">
          <div>
            <h3>${project.name}</h3>
            <div class="project-difficulty ${project.difficulty.toLowerCase()}">${
        project.difficulty
      }</div>
          </div>
        </div>
        <p class="project-description">${project.description}</p>
        <div class="project-meta">
          <div class="project-meta-item">
            <div class="project-meta-label">Timeline</div>
            <div class="project-meta-value">Days ${project.days}</div>
          </div>
          <div class="project-meta-item">
            <div class="project-meta-label">Duration</div>
            <div class="project-meta-value">${project.hours} hours</div>
          </div>
          <div class="project-meta-item">
            <div class="project-meta-label">Phase</div>
            <div class="project-meta-value">Phase ${project.phase}</div>
          </div>
        </div>
        <div class="project-tech-stack">
          ${project.techStack
            .map((tech) => `<span class="tech-tag">${tech}</span>`)
            .join("")}
        </div>
        <div class="project-progress">
          <div class="project-progress-header">
            <strong>Progress</strong>
            <span>${progress}%</span>
          </div>
          <div class="progress-bar" style="height: 12px;">
            <div class="progress-fill" style="width: ${progress}%;"></div>
          </div>
        </div>
        <ul class="project-deliverables">
          ${project.deliverables
            .map(
              (d, dIdx) => `
            <li>
              <label class="checkbox-label">
                <input type="checkbox" ${
                  state.deliverables[project.id][dIdx] ? "checked" : ""
                } onchange="toggleDeliverable(${project.id}, ${dIdx})">
                ${d}
              </label>
            </li>
          `
            )
            .join("")}
        </ul>
      </div>
    `;
    })
    .join("");
}

function toggleDeliverable(projectId, deliverableIdx) {
  state.deliverables[projectId][deliverableIdx] =
    !state.deliverables[projectId][deliverableIdx];
  renderProjectCards();
  updateKPIs();
}

// Events
function renderEvents() {
  renderEventCards();
  setupEventFilters();
}

function renderEventCards() {
  const container = document.getElementById("eventGrid");

  container.innerHTML = sprintData.events
    .map((event, idx) => {
      const isFeatured = event.importance === "CRITICAL";
      const typeClass = event.type.toLowerCase().replace(/[^a-z]/g, "");

      return `
      <div class="event-card ${isFeatured ? "featured" : ""}" data-type="${
        event.type
      }">
        <div class="event-card-header">
          <div>
            <h3>${event.name}</h3>
            ${
              isFeatured
                ? '<div style="color: var(--color-error); font-size: 12px; font-weight: 600; margin-top: 4px;">⭐ CRITICAL EVENT</div>'
                : ""
            }
          </div>
          <div class="event-type ${typeClass}">${event.type}</div>
        </div>
        <div class="event-meta">
          <div class="event-meta-item">
            <div class="event-meta-label">Date</div>
            <div class="event-meta-value">${new Date(
              event.date
            ).toLocaleDateString("en-US", { month: "short", day: "numeric" })}${
        event.endDate
          ? " - " +
            new Date(event.endDate).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })
          : ""
      }</div>
          </div>
          <div class="event-meta-item">
            <div class="event-meta-label">Time</div>
            <div class="event-meta-value">${event.time}</div>
          </div>
          <div class="event-meta-item">
            <div class="event-meta-label">Location</div>
            <div class="event-meta-value">${event.location}</div>
          </div>
        </div>
        <p class="event-description">${event.description}</p>
        <div class="event-prep">
          <h4>PREP REQUIRED:</h4>
          <ul>
            ${event.prep.map((p) => `<li>${p}</li>`).join("")}
          </ul>
        </div>
        <div class="event-footer">
          ${
            event.url
              ? `<a href="${event.url}" target="_blank" class="event-link">Event Website →</a>`
              : "<span></span>"
          }
          <label class="checkbox-label">
            <input type="checkbox" ${
              state.eventsAttended[idx] ? "checked" : ""
            } onchange="toggleEvent(${idx})">
            RSVP / Attended
          </label>
        </div>
      </div>
    `;
    })
    .join("");
}

function setupEventFilters() {
  const buttons = document.querySelectorAll(".event-filters .filter-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      const cards = document.querySelectorAll(".event-card");

      cards.forEach((card) => {
        if (filter === "all" || card.dataset.type === filter) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

function toggleEvent(idx) {
  state.eventsAttended[idx] = !state.eventsAttended[idx];
  renderEventCards();
  updateKPIs();
}

// Dark Mode
function setupDarkMode() {
  const btn = document.getElementById("darkModeToggle");
  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}

// Export
function setupExport() {
  const btn = document.getElementById("exportBtn");
  btn.addEventListener("click", () => {
    const data = JSON.stringify(state, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "sprint-progress.json";
    a.click();
  });
}

// Modal
function setupModal() {
  const modal = document.getElementById("dayModal");
  const closeBtn = document.getElementById("modalClose");

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
}
