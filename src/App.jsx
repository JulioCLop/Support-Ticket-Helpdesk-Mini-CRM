import { useMemo, useState, useEffect } from "react";

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

export default function App() {
  const [query, setQuery] = useState("");
  const [slaFilter, setSlaFilter] = useState("all");
  const [assigneeFilter, setAssigneeFilter] = useState("all");
  const [view, setView] = useState("pipeline");
  const [selectedId, setSelectedId] = useState(data.tickets[0]?.id ?? null);

  const filteredTickets = useMemo(() => {
    const trimmedQuery = query.trim().toLowerCase();
    return data.tickets.filter((ticket) => {
      const matchesQuery = matchesSearch(ticket, trimmedQuery);
      const matchesSla = slaFilter === "all" || ticket.slaState === slaFilter;
      const matchesAssignee =
        assigneeFilter === "all" || ticket.assignee === data.currentUser;
      return matchesQuery && matchesSla && matchesAssignee;
    });
  }, [query, slaFilter, assigneeFilter]);

  useEffect(() => {
    if (filteredTickets.length === 0) {
      if (selectedId !== null) setSelectedId(null);
      return;
    }
    if (!filteredTickets.find((ticket) => ticket.id === selectedId)) {
      setSelectedId(filteredTickets[0].id);
    }
  }, [filteredTickets, selectedId]);

  const metrics = useMemo(() => {
    const openCount = filteredTickets.filter(
      (ticket) => ticket.status !== "Resolved"
    ).length;
    const riskCount = filteredTickets.filter(
      (ticket) => ticket.slaState === "At risk"
    ).length;
    const breachedCount = filteredTickets.filter(
      (ticket) => ticket.slaState === "Breached"
    ).length;
    return { openCount, riskCount, breachedCount };
  }, [filteredTickets]);

  const detailTicket = filteredTickets.find(
    (ticket) => ticket.id === selectedId
  );

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">
          <div className="logo">ST</div>
          <div>
            <p className="eyebrow">Workflow UI</p>
            <h1>Support Ticket</h1>
            <p className="subtitle">Helpdesk Mini-CRM</p>
          </div>
        </div>
        <div className="top-actions">
          <div className="metrics">
            <div className="metric">
              <span className="metric-label">Open</span>
              <span className="metric-value">{metrics.openCount}</span>
            </div>
            <div className="metric">
              <span className="metric-label">At risk</span>
              <span className="metric-value">{metrics.riskCount}</span>
            </div>
            <div className="metric">
              <span className="metric-label">Breached</span>
              <span className="metric-value">{metrics.breachedCount}</span>
            </div>
          </div>
          <button className="btn primary" type="button">
            New ticket
          </button>
        </div>
      </header>

      <section className="control-bar">
        <div className="search">
          <label htmlFor="searchInput">Search</label>
          <input
            id="searchInput"
            type="search"
            placeholder="Search tickets, tags, accounts, IDs"
            autoComplete="off"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <div className="filters">
          <div className="filter-group">
            <label htmlFor="slaFilter">SLA state</label>
            <select
              id="slaFilter"
              value={slaFilter}
              onChange={(event) => setSlaFilter(event.target.value)}
            >
              <option value="all">All SLA states</option>
              <option value="On track">On track</option>
              <option value="At risk">At risk</option>
              <option value="Breached">Breached</option>
            </select>
          </div>
          <div className="filter-group">
            <label htmlFor="assigneeFilter">Assignee</label>
            <select
              id="assigneeFilter"
              value={assigneeFilter}
              onChange={(event) => setAssigneeFilter(event.target.value)}
            >
              <option value="all">All assignees</option>
              <option value="me">Assigned to me</option>
            </select>
          </div>
          <div className="filter-group">
            <label>View</label>
            <div className="view-toggle">
              <button
                className={`toggle ${view === "pipeline" ? "active" : ""}`}
                data-view="pipeline"
                type="button"
                onClick={() => setView("pipeline")}
              >
                Pipeline
              </button>
              <button
                className={`toggle ${view === "list" ? "active" : ""}`}
                data-view="list"
                type="button"
                onClick={() => setView("list")}
              >
                List
              </button>
            </div>
          </div>
        </div>
      </section>

      <main className="workspace">
        <section
          className="pipeline"
          style={{ display: view === "pipeline" ? "grid" : "none" }}
        >
          {data.statuses.map((status, colIndex) => {
            const columnTickets = filteredTickets.filter(
              (ticket) => ticket.status === status
            );
            return (
              <div className="column" key={status}>
                <div className="column-header">
                  <div>{status}</div>
                  <span>{columnTickets.length} tickets</span>
                </div>
                {columnTickets.length === 0 ? (
                  <div className="card">
                    <div className="card-meta">No tickets here.</div>
                  </div>
                ) : (
                  columnTickets.map((ticket, index) => (
                    <div
                      className={`card ${
                        ticket.id === selectedId ? "selected" : ""
                      }`}
                      key={ticket.id}
                      style={{
                        animationDelay: `${(index + colIndex) * 0.05}s`,
                      }}
                      onClick={() => setSelectedId(ticket.id)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          setSelectedId(ticket.id);
                        }
                      }}
                    >
                      <div className="card-head">
                        <span className="ticket-id">{ticket.id}</span>
                        <span
                          className={`priority ${ticket.priority.toLowerCase()}`}
                        >
                          {ticket.priority}
                        </span>
                      </div>
                      <h4>{ticket.title}</h4>
                      <div className="card-meta">
                        <span>{ticket.requester}</span>
                        <span>{ticket.account}</span>
                      </div>
                      <div className="card-row">
                        <span
                          className={`sla ${slaClassMap[ticket.slaState]}`}
                        >
                          {ticket.slaState}
                        </span>
                        <span>Updated {ticket.lastUpdate}</span>
                      </div>
                      <div className="tags">
                        {ticket.tags.map((tag) => (
                          <span className="tag" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))
                )}
              </div>
            );
          })}
        </section>

        <section className={`list-view ${view === "list" ? "active" : ""}`}>
          <table className="table">
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
              {filteredTickets.map((ticket) => (
                <tr
                  key={ticket.id}
                  onClick={() => setSelectedId(ticket.id)}
                >
                  <td>
                    <strong>{ticket.id}</strong> {ticket.title}
                  </td>
                  <td>{ticket.account}</td>
                  <td>
                    <span className={`sla ${slaClassMap[ticket.slaState]}`}>
                      {ticket.slaState}
                    </span>
                  </td>
                  <td>{ticket.assignee}</td>
                  <td>{ticket.status}</td>
                  <td>{ticket.lastUpdate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <aside className="detail">
          {!detailTicket ? (
            <div className="detail-empty">
              <h2>No matching tickets</h2>
              <p>Adjust search or filters to see ticket details.</p>
            </div>
          ) : (
            <div className="detail-card">
              <div className="detail-header">
                <div>
                  <span className="ticket-id">{detailTicket.id}</span>
                  <h2>{detailTicket.title}</h2>
                  <p>
                    {detailTicket.requester} - {detailTicket.account} -{" "}
                    {detailTicket.channel}
                  </p>
                </div>
                <button className="detail-cta" type="button">
                  Open full
                </button>
              </div>
              <div className="tags">
                {detailTicket.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="info-grid">
                <div className="info-item">
                  <span>Status</span>
                  {detailTicket.status}
                </div>
                <div className="info-item">
                  <span>SLA state</span>
                  <span className={`sla ${slaClassMap[detailTicket.slaState]}`}>
                    {detailTicket.slaState}
                  </span>
                </div>
                <div className="info-item">
                  <span>Response due</span>
                  {detailTicket.responseDue}
                </div>
                <div className="info-item">
                  <span>Resolution due</span>
                  {detailTicket.resolutionDue}
                </div>
                <div className="info-item">
                  <span>Assignee</span>
                  <div className="assignee">
                    <div className="avatar">
                      {getInitials(detailTicket.assignee)}
                    </div>
                    <div>{detailTicket.assignee}</div>
                  </div>
                </div>
                <div className="info-item">
                  <span>Plan</span>
                  {detailTicket.plan}
                </div>
              </div>
              <div>
                <h3>Timeline notes</h3>
                <div className="timeline">
                  {detailTicket.timeline.map((item) => (
                    <div className="timeline-item" key={`${item.time}${item.author}`}>
                      <strong>
                        {item.time} - {item.author}
                      </strong>
                      <div>{item.note}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </aside>
      </main>
    </div>
  );
}
