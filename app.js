const data = {
  currentUser: "Mona T",
  statuses: ["Intake", "In Progress", "Waiting", "Resolved"],
  tickets: [
    {
      id: "TK-1024",
      title: "Checkout timeout in EU region",
      requester: "Arianna Reed",
      account: "Alpine Threads",
      channel: "Email",
      priority: "P1",
      slaState: "At risk",
      responseDue: "58m",
      resolutionDue: "4h 12m",
      status: "In Progress",
      assignee: "Mona T",
      tags: ["checkout", "payments", "eu"],
      lastUpdate: "2h",
      plan: "Scale",
      timeline: [
        {
          time: "Today 09:18",
          author: "Mona T",
          note: "Repro confirmed on EU2 cluster, caching layer spikes on payment auth.",
        },
        {
          time: "Today 08:45",
          author: "Arianna Reed",
          note: "Timeouts started after the morning promotion launched.",
        },
        {
          time: "Yesterday 17:05",
          author: "Auto",
          note: "SLA escalated to P1 due to 12 impacted orders.",
        },
      ],
    },
    {
      id: "TK-1031",
      title: "SSO redirect loop for Okta tenants",
      requester: "Luis Vega",
      account: "Northwind Media",
      channel: "Chat",
      priority: "P2",
      slaState: "At risk",
      responseDue: "1h 20m",
      resolutionDue: "7h 30m",
      status: "Waiting",
      assignee: "Jenna L",
      tags: ["sso", "okta", "login"],
      lastUpdate: "3h",
      plan: "Enterprise",
      timeline: [
        {
          time: "Today 10:02",
          author: "Jenna L",
          note: "Shared patched metadata file, waiting on tenant validation.",
        },
        {
          time: "Today 09:11",
          author: "Luis Vega",
          note: "Loop begins after MFA prompt, browser returns 302.",
        },
      ],
    },
    {
      id: "TK-1040",
      title: "Billing export missing Q3 invoices",
      requester: "Maya Tran",
      account: "Copperstone Labs",
      channel: "Portal",
      priority: "P2",
      slaState: "On track",
      responseDue: "3h 10m",
      resolutionDue: "1d 2h",
      status: "Intake",
      assignee: "Mona T",
      tags: ["billing", "export", "csv"],
      lastUpdate: "25m",
      plan: "Growth",
      timeline: [
        {
          time: "Today 10:40",
          author: "Auto",
          note: "Ticket created from billing export alert trigger.",
        },
      ],
    },
    {
      id: "TK-1047",
      title: "Webhook retries spiking after 17:00 UTC",
      requester: "Nora Bell",
      account: "Vantage Outfitters",
      channel: "API",
      priority: "P1",
      slaState: "Breached",
      responseDue: "-35m",
      resolutionDue: "-20m",
      status: "In Progress",
      assignee: "Raj P",
      tags: ["webhook", "retries", "latency"],
      lastUpdate: "1h",
      plan: "Scale",
      timeline: [
        {
          time: "Today 09:55",
          author: "Raj P",
          note: "Infra team rolling back queue config to restore throughput.",
        },
        {
          time: "Today 08:10",
          author: "Auto",
          note: "SLA breached. Alert sent to on-call channel.",
        },
      ],
    },
    {
      id: "TK-1055",
      title: "Mobile SDK crash on Android 14",
      requester: "Quinn Patel",
      account: "Juniper Health",
      channel: "Email",
      priority: "P1",
      slaState: "At risk",
      responseDue: "40m",
      resolutionDue: "5h 10m",
      status: "Intake",
      assignee: "Mona T",
      tags: ["sdk", "android", "crash"],
      lastUpdate: "15m",
      plan: "Enterprise",
      timeline: [
        {
          time: "Today 10:50",
          author: "Mona T",
          note: "Requested crash logs and device matrix for repro.",
        },
      ],
    },
    {
      id: "TK-1062",
      title: "Usage dashboard stuck on last week",
      requester: "Casey Yi",
      account: "Monarch Cargo",
      channel: "Portal",
      priority: "P3",
      slaState: "On track",
      responseDue: "6h",
      resolutionDue: "2d 4h",
      status: "Waiting",
      assignee: "Jenna L",
      tags: ["analytics", "dashboard"],
      lastUpdate: "6h",
      plan: "Growth",
      timeline: [
        {
          time: "Yesterday 16:22",
          author: "Jenna L",
          note: "Backfill job queued for missing data points.",
        },
        {
          time: "Yesterday 15:40",
          author: "Casey Yi",
          note: "Dashboard stopped updating after CSV import.",
        },
      ],
    },
    {
      id: "TK-1068",
      title: "Live chat transcripts not syncing to CRM",
      requester: "Priya Das",
      account: "Ridgeway Retail",
      channel: "Chat",
      priority: "P2",
      slaState: "On track",
      responseDue: "4h",
      resolutionDue: "1d",
      status: "In Progress",
      assignee: "Raj P",
      tags: ["integrations", "crm", "sync"],
      lastUpdate: "3h",
      plan: "Scale",
      timeline: [
        {
          time: "Today 07:12",
          author: "Raj P",
          note: "Investigating webhook auth token rotation.",
        },
      ],
    },
    {
      id: "TK-1074",
      title: "Password reset emails delayed",
      requester: "Eli Grant",
      account: "Studio Meridian",
      channel: "Email",
      priority: "P2",
      slaState: "At risk",
      responseDue: "1h 40m",
      resolutionDue: "9h",
      status: "Waiting",
      assignee: "Mona T",
      tags: ["email", "auth", "deliverability"],
      lastUpdate: "4h",
      plan: "Growth",
      timeline: [
        {
          time: "Today 06:25",
          author: "Mona T",
          note: "Asked customer to validate SPF record updates.",
        },
      ],
    },
    {
      id: "TK-1081",
      title: "Feature flag audit log missing entries",
      requester: "Samir Kho",
      account: "Peakline Bio",
      channel: "Portal",
      priority: "P3",
      slaState: "On track",
      responseDue: "8h",
      resolutionDue: "3d",
      status: "Resolved",
      assignee: "Jenna L",
      tags: ["audit", "feature-flags"],
      lastUpdate: "1d",
      plan: "Enterprise",
      timeline: [
        {
          time: "Yesterday 14:12",
          author: "Jenna L",
          note: "Hotfix deployed, audit log backfilled to 30 days.",
        },
      ],
    },
  ],
};

const pipelineEl = document.getElementById("pipeline");
const listViewEl = document.getElementById("listView");
const detailPanel = document.getElementById("detailPanel");
const searchInput = document.getElementById("searchInput");
const slaFilter = document.getElementById("slaFilter");
const assigneeFilter = document.getElementById("assigneeFilter");
const metricOpen = document.getElementById("metricOpen");
const metricRisk = document.getElementById("metricRisk");
const metricBreached = document.getElementById("metricBreached");

let selectedId = data.tickets[0]?.id || null;

const slaClassMap = {
  "On track": "on-track",
  "At risk": "at-risk",
  Breached: "breached",
};

function getInitials(name) {
  if (!name) return "";
  const parts = name.split(" ").filter(Boolean);
  return parts
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function matchesSearch(ticket, query) {
  if (!query) return true;
  const haystack = [
    ticket.id,
    ticket.title,
    ticket.requester,
    ticket.account,
    ticket.channel,
    ticket.status,
    ticket.priority,
    ticket.tags.join(" "),
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(query);
}

function getFilteredTickets() {
  const query = searchInput.value.trim().toLowerCase();
  const slaValue = slaFilter.value;
  const assigneeValue = assigneeFilter.value;

  return data.tickets.filter((ticket) => {
    const matchesQuery = matchesSearch(ticket, query);
    const matchesSla = slaValue === "all" || ticket.slaState === slaValue;
    const matchesAssignee =
      assigneeValue === "all" || ticket.assignee === data.currentUser;
    return matchesQuery && matchesSla && matchesAssignee;
  });
}

function updateMetrics(filtered) {
  const openCount = filtered.filter((ticket) => ticket.status !== "Resolved").length;
  const riskCount = filtered.filter((ticket) => ticket.slaState === "At risk").length;
  const breachedCount = filtered.filter((ticket) => ticket.slaState === "Breached").length;
  metricOpen.textContent = openCount;
  metricRisk.textContent = riskCount;
  metricBreached.textContent = breachedCount;
}

function renderPipeline(filtered) {
  pipelineEl.innerHTML = "";
  data.statuses.forEach((status, colIndex) => {
    const column = document.createElement("div");
    column.className = "column";

    const columnTickets = filtered.filter((ticket) => ticket.status === status);

    column.innerHTML = `
      <div class="column-header">
        <div>${status}</div>
        <span>${columnTickets.length} tickets</span>
      </div>
    `;

    columnTickets.forEach((ticket, index) => {
      const card = document.createElement("div");
      card.className = "card" + (ticket.id === selectedId ? " selected" : "");
      card.style.animationDelay = `${(index + colIndex) * 0.05}s`;
      card.dataset.id = ticket.id;
      card.innerHTML = `
        <div class="card-head">
          <span class="ticket-id">${ticket.id}</span>
          <span class="priority ${ticket.priority.toLowerCase()}">${ticket.priority}</span>
        </div>
        <h4>${ticket.title}</h4>
        <div class="card-meta">
          <span>${ticket.requester}</span>
          <span>${ticket.account}</span>
        </div>
        <div class="card-row">
          <span class="sla ${slaClassMap[ticket.slaState]}">${ticket.slaState}</span>
          <span>Updated ${ticket.lastUpdate}</span>
        </div>
        <div class="tags">
          ${ticket.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
      `;
      card.addEventListener("click", () => selectTicket(ticket.id));
      column.appendChild(card);
    });

    if (columnTickets.length === 0) {
      const empty = document.createElement("div");
      empty.className = "card";
      empty.innerHTML = `<div class="card-meta">No tickets here.</div>`;
      column.appendChild(empty);
    }

    pipelineEl.appendChild(column);
  });
}

function renderList(filtered) {
  listViewEl.innerHTML = `
    <table class="table">
      <thead>
        <tr>
          <th>Ticket</th>
          <th>Account</th>
          <th>SLA</th>
          <th>Owner</th>
          <th>Status</th>
          <th>Updated</th>
        </tr>
      </thead>
      <tbody>
        ${filtered
          .map(
            (ticket) => `
            <tr data-id="${ticket.id}">
              <td><strong>${ticket.id}</strong> ${ticket.title}</td>
              <td>${ticket.account}</td>
              <td><span class="sla ${slaClassMap[ticket.slaState]}">${ticket.slaState}</span></td>
              <td>${ticket.assignee}</td>
              <td>${ticket.status}</td>
              <td>${ticket.lastUpdate}</td>
            </tr>
          `
          )
          .join("")}
      </tbody>
    </table>
  `;

  listViewEl.querySelectorAll("tbody tr").forEach((row) => {
    row.addEventListener("click", () => {
      selectTicket(row.dataset.id);
    });
  });
}

function renderDetail(ticket) {
  if (!ticket) {
    detailPanel.innerHTML = `
      <div class="detail-empty">
        <h2>No matching tickets</h2>
        <p>Adjust search or filters to see ticket details.</p>
      </div>
    `;
    return;
  }

  detailPanel.innerHTML = `
    <div class="detail-card">
      <div class="detail-header">
        <div>
          <span class="ticket-id">${ticket.id}</span>
          <h2>${ticket.title}</h2>
          <p>${ticket.requester} - ${ticket.account} - ${ticket.channel}</p>
        </div>
        <button class="detail-cta">Open full</button>
      </div>
      <div class="tags">
        ${ticket.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
      <div class="info-grid">
        <div class="info-item">
          <span>Status</span>
          ${ticket.status}
        </div>
        <div class="info-item">
          <span>SLA state</span>
          <span class="sla ${slaClassMap[ticket.slaState]}">${ticket.slaState}</span>
        </div>
        <div class="info-item">
          <span>Response due</span>
          ${ticket.responseDue}
        </div>
        <div class="info-item">
          <span>Resolution due</span>
          ${ticket.resolutionDue}
        </div>
        <div class="info-item">
          <span>Assignee</span>
          <div class="assignee">
            <div class="avatar">${getInitials(ticket.assignee)}</div>
            <div>${ticket.assignee}</div>
          </div>
        </div>
        <div class="info-item">
          <span>Plan</span>
          ${ticket.plan}
        </div>
      </div>
      <div>
        <h3>Timeline notes</h3>
        <div class="timeline">
          ${ticket.timeline
            .map(
              (item) => `
              <div class="timeline-item">
                <strong>${item.time} - ${item.author}</strong>
                <div>${item.note}</div>
              </div>
            `
            )
            .join("")}
        </div>
      </div>
    </div>
  `;
}

function selectTicket(id) {
  selectedId = id;
  render();
}

function render() {
  const filtered = getFilteredTickets();
  if (!filtered.find((ticket) => ticket.id === selectedId)) {
    selectedId = filtered[0]?.id || null;
  }

  updateMetrics(filtered);
  renderPipeline(filtered);
  renderList(filtered);
  renderDetail(filtered.find((ticket) => ticket.id === selectedId));
}

function setView(view) {
  const isPipeline = view === "pipeline";
  pipelineEl.style.display = isPipeline ? "grid" : "none";
  listViewEl.classList.toggle("active", !isPipeline);
}

searchInput.addEventListener("input", render);
[slaFilter, assigneeFilter].forEach((select) => {
  select.addEventListener("change", render);
});

document.querySelectorAll(".toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".toggle").forEach((el) => el.classList.remove("active"));
    btn.classList.add("active");
    setView(btn.dataset.view);
  });
});

// New Ticket Modal
const newTicketModal = document.getElementById("newTicketModal");
const newTicketBtn = document.querySelector(".btn.primary");
const modalClose = document.querySelector(".modal-close");
const modalBackdrop = document.querySelector(".modal-backdrop");
const cancelTicketBtn = document.getElementById("cancelTicket");
const newTicketForm = document.getElementById("newTicketForm");

function openModal() {
  newTicketModal.removeAttribute("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  newTicketModal.setAttribute("hidden", "");
  document.body.style.overflow = "";
  newTicketForm.reset();
}

function generateTicketId() {
  const existingIds = data.tickets.map((t) => parseInt(t.id.split("-")[1]));
  const maxId = Math.max(...existingIds);
  return `TK-${maxId + 1}`;
}

function getSlaState(priority) {
  if (priority === "P1") return "At risk";
  if (priority === "P2") return "On track";
  return "On track";
}

function getDueTimes(priority) {
  if (priority === "P1") {
    return { responseDue: "4h", resolutionDue: "8h" };
  }
  if (priority === "P2") {
    return { responseDue: "8h", resolutionDue: "1d" };
  }
  return { responseDue: "1d", resolutionDue: "3d" };
}

function createNewTicket(formData) {
  const ticketId = generateTicketId();
  const dueTimes = getDueTimes(formData.priority);
  const tags = formData.tags
    ? formData.tags
        .split(",")
        .map((tag) => tag.trim().toLowerCase())
        .filter(Boolean)
    : [];

  const newTicket = {
    id: ticketId,
    title: formData.title,
    requester: formData.requester,
    account: formData.account,
    channel: formData.channel,
    priority: formData.priority,
    slaState: getSlaState(formData.priority),
    responseDue: dueTimes.responseDue,
    resolutionDue: dueTimes.resolutionDue,
    status: "Intake",
    assignee: formData.assignee,
    tags: tags,
    lastUpdate: "Just now",
    plan: formData.plan,
    timeline: [
      {
        time: new Date().toLocaleString("en-US", {
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
        author: "Auto",
        note: `Ticket created and assigned to ${formData.assignee}.`,
      },
    ],
  };

  data.tickets.unshift(newTicket);
  selectedId = ticketId;
  render();
  closeModal();
}

newTicketBtn.addEventListener("click", openModal);
modalClose.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", closeModal);
cancelTicketBtn.addEventListener("click", closeModal);

newTicketForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = {
    title: document.getElementById("ticketTitle").value,
    requester: document.getElementById("ticketRequester").value,
    account: document.getElementById("ticketAccount").value,
    channel: document.getElementById("ticketChannel").value,
    priority: document.getElementById("ticketPriority").value,
    assignee: document.getElementById("ticketAssignee").value,
    plan: document.getElementById("ticketPlan").value,
    tags: document.getElementById("ticketTags").value,
  };

  createNewTicket(formData);
});

// Close modal with Escape key
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !newTicketModal.hasAttribute("hidden")) {
    closeModal();
  }
});

setView("pipeline");
render();
