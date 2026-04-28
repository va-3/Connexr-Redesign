// Connexr AIOps console — components

const { useState } = React;

const NavIcon = ({ name }) => {
  const map = {
    activity: "M22 12h-4l-3 9L9 3l-3 9H2",
    triangle: "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z",
    book:     "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",
    shield:   "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z",
    layers:   "m12 2 10 6-10 6L2 8l10-6Z",
    settings: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
    bell:     "M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9",
  };
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={map[name]}/></svg>;
};

const Sidebar = ({ active, onSelect }) => (
  <aside className="ax-side">
    <div className="ax-brand">
      <img src="../../assets/connexr-mark.png" alt="" />
      <div>
        <div style={{fontFamily:"DM Sans",fontWeight:700,fontSize:14,color:"#fff"}}>Connexr</div>
        <div className="ax-brand-tag">LeoRix AI</div>
      </div>
    </div>
    <div className="ax-nav-section">Operate</div>
    <div className="ax-nav">
      <div className={`ax-nav-item ${active==='triage'?'active':''}`} onClick={()=>onSelect('triage')}><NavIcon name="activity"/>Triage</div>
      <div className={`ax-nav-item ${active==='alerts'?'active':''}`} onClick={()=>onSelect('alerts')}><NavIcon name="bell"/>Alerts</div>
      <div className={`ax-nav-item ${active==='runbooks'?'active':''}`} onClick={()=>onSelect('runbooks')}><NavIcon name="book"/>Runbooks</div>
    </div>
    <div className="ax-nav-section">Evidence</div>
    <div className="ax-nav">
      <div className="ax-nav-item"><NavIcon name="shield"/>Compliance</div>
      <div className="ax-nav-item"><NavIcon name="layers"/>Audit log</div>
    </div>
    <div className="ax-nav-section">Account</div>
    <div className="ax-nav">
      <div className="ax-nav-item"><NavIcon name="settings"/>Settings</div>
    </div>
  </aside>
);

const TopBar = () => (
  <div className="ax-top">
    <div className="ax-top-title">Triage · us-east-1</div>
    <div className="ax-top-actions">
      <input className="ax-search" placeholder="Search incidents, services, runbooks…" />
      <span className="ax-pill"><span className="dot"/>All systems · operational</span>
      <span className="ax-pill" style={{fontFamily:"IBM Plex Mono"}}>04:12 UTC</span>
    </div>
  </div>
);

const StatRow = () => (
  <div className="ax-stats">
    <div className="ax-stat"><div className="v">3<span className="delta up">↑ 1</span></div><div className="l">Open P1</div></div>
    <div className="ax-stat"><div className="v">8m<span className="delta ok">↓ 64%</span></div><div className="l">MTTR · 24h</div></div>
    <div className="ax-stat"><div className="v">92%<span className="delta ok">↓ noise</span></div><div className="l">Correlation rate</div></div>
    <div className="ax-stat"><div className="v">11k<span className="delta ok">+yr</span></div><div className="l">Engineer-hours back</div></div>
  </div>
);

const ALERTS = [
  { id:"INC-2418", sev:"P1", name:"payments-api · 5xx surge", service:"payments-api", status:"run", statusLabel:"running runbook", ago:"2m" },
  { id:"INC-2417", sev:"P2", name:"ingest-pipeline · lag elevated", service:"ingest", status:"warn", statusLabel:"correlated", ago:"6m" },
  { id:"INC-2416", sev:"P3", name:"kafka-broker-3 · rebalance", service:"kafka", status:"ok", statusLabel:"auto-resolved", ago:"11m" },
  { id:"INC-2415", sev:"P2", name:"checkout · slow rendering", service:"checkout", status:"warn", statusLabel:"investigating", ago:"24m" },
  { id:"INC-2414", sev:"P3", name:"redis-cache-2 · evictions ↑", service:"redis", status:"ok", statusLabel:"auto-resolved", ago:"38m" },
  { id:"INC-2413", sev:"P3", name:"auth-svc · token TTL warn", service:"auth", status:"ok", statusLabel:"auto-resolved", ago:"1h" },
];

const AlertTable = ({ selected, onSelect }) => (
  <div>
    <div className="ax-table-head">
      <span>Sev</span><span>Incident</span><span>Service</span><span>Status</span><span>Age</span>
    </div>
    {ALERTS.map(a => (
      <div key={a.id} className={`ax-row ${selected===a.id?'selected':''}`} onClick={()=>onSelect(a.id)}>
        <span><span className={`sev ${a.sev.toLowerCase()}`}>{a.sev}</span></span>
        <span className="name">{a.name}<small>{a.id}</small></span>
        <span className="meta">{a.service}</span>
        <span className={`status ${a.status}`}>{a.statusLabel}</span>
        <span className="ago">{a.ago}</span>
      </div>
    ))}
  </div>
);

const Correlation = () => (
  <div className="ax-correl">
    <ul>
      <li><span className="t">04:10:14</span><span>payments-api · 5xx burst (n=23)</span><span className="x">apm</span></li>
      <li><span className="t">04:10:18</span><span>payments-api · latency p99 → 4.2s</span><span className="x">apm</span></li>
      <li><span className="t">04:10:22</span><span>postgres-primary · connection pool 98%</span><span className="x">db</span></li>
      <li><span className="t">04:10:24</span><span>postgres-primary · lock waits ↑</span><span className="x">db</span></li>
      <li><span className="t">04:10:31</span><span>… 43 more correlated signals</span><span className="x">+43</span></li>
    </ul>
    <div className="ax-correl-foot">→ root cause: postgres-primary connection saturation · confidence 0.94</div>
  </div>
);

const Runbook = () => (
  <div className="ax-runbook">
    <ol>
      <li className="done">Auto-acknowledge incident in PagerDuty<small>04:12:07 · executed by leorix-agent</small></li>
      <li className="done">Snapshot postgres-primary connection state<small>04:12:08 · 487 active, 12 idle</small></li>
      <li className="done">Drain non-critical batch consumers<small>04:12:14 · payments-export, reporting-export</small></li>
      <li>Scale postgres-primary read replicas (1 → 3)<small>requires SRE approval · awaiting</small></li>
      <li>Validate p99 returns under SLO<small>target: latency p99 &lt; 400ms · sustained 5m</small></li>
      <li>Post-incident summary attached to ServiceNow ticket<small>blocked on previous</small></li>
    </ol>
  </div>
);

const Feed = () => (
  <div className="ax-feed">
    <div><span className="t-time">04:12:07</span> <span className="t-tag">[INC-2418]</span> opened · severity P1</div>
    <div><span className="t-time">04:12:08</span> <span className="t-tag">[leorix]</span> 47 signals correlated → 1 root cause</div>
    <div><span className="t-time">04:12:09</span> <span className="t-tag">[leorix]</span> runbook attached: pg-conn-saturation-v3</div>
    <div><span className="t-time">04:12:11</span> <span className="t-tag">[leorix]</span> drained batch consumers · <span className="t-ok">ok</span></div>
    <div><span className="t-time">04:12:14</span> <span className="t-tag">[on-call]</span> M. Chen acknowledged</div>
    <div><span className="t-time">04:12:18</span> <span className="t-tag">[leorix]</span> awaiting approval to scale replicas</div>
  </div>
);

const IncidentDetail = ({ id }) => (
  <div>
    <div className="ax-detail-head">
      <div>
        <div className="ax-detail-name">payments-api · 5xx surge</div>
        <div className="ax-detail-id">{id} · P1 · started 04:10:14 UTC</div>
      </div>
      <div className="ax-detail-buttons">
        <button className="ax-btn ax-btn--ghost">Hand off</button>
        <button className="ax-btn ax-btn--primary">Approve step 4</button>
      </div>
    </div>

    <div className="ax-section">
      <div className="ax-section-title">Correlation · 47 → 1</div>
      <Correlation />
    </div>

    <div className="ax-section">
      <div className="ax-section-title">Runbook · pg-conn-saturation-v3</div>
      <Runbook />
    </div>

    <div className="ax-section">
      <div className="ax-section-title">Live feed</div>
      <Feed />
    </div>
  </div>
);

const App = () => {
  const [selected, setSelected] = useState("INC-2418");
  return (
    <div className="ax-app">
      <Sidebar active="triage" onSelect={()=>{}} />
      <div className="ax-main">
        <TopBar />
        <div className="ax-body">
          <div className="ax-pane">
            <h2 className="ax-h2">Open incidents</h2>
            <p className="ax-sub">6 active across 4 services. LeoRix AI is auto-handling P3s; you're paged on P1/P2.</p>
            <StatRow />
            <AlertTable selected={selected} onSelect={setSelected} />
          </div>
          <div className="ax-pane">
            <IncidentDetail id={selected} />
          </div>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { Sidebar, TopBar, StatRow, AlertTable, IncidentDetail, Correlation, Runbook, Feed, App });
