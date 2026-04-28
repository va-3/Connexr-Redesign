// Connexr marketing-site components — JSX, no JSX-runtime imports.
// Loaded via <script type="text/babel" src="components.jsx"></script>.
// Exposes everything to window at the bottom for cross-script usage.

const { useState } = React;

// -------------------------------------------------------------
// Lucide-style icons (1.5px stroke, 24x24)
// -------------------------------------------------------------
const Icon = ({ name, size = 24, color = "currentColor" }) => {
  const paths = {
    activity: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
    shield:   <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></>,
    network:  <><circle cx="12" cy="12" r="3" /><circle cx="5" cy="6" r="2" /><circle cx="19" cy="6" r="2" /><circle cx="5" cy="18" r="2" /><circle cx="19" cy="18" r="2" /><path d="M7 6h2M15 6h2M7 18h2M15 18h2M6 8v8M18 8v8" /></>,
    layers:   <><path d="m12 2 10 6-10 6L2 8l10-6Z" /><path d="m2 17 10 6 10-6" /><path d="m2 12 10 6 10-6" /></>,
    cpu:      <><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" /></>,
    book:     <><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /></>,
    heart:    <path d="M19 14c1.5-1.5 3-3.4 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.1 1.5 4 3 5.5l7 7Z" />,
    coins:    <><circle cx="8" cy="8" r="6" /><path d="M18.09 10.37A6 6 0 1 1 10.34 18M7 6h1v4M16.71 13.88l.71.71-2.82 2.82" /></>,
    factory:  <><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" /><path d="M17 18h1M12 18h1M7 18h1" /></>,
    umbrella: <><path d="M12 2v2M22 12h-2M4 12H2M16.93 7.07 18.36 5.64M5.64 5.64l1.43 1.43M12 4a8 8 0 0 1 8 8H4a8 8 0 0 1 8-8Z" /><path d="M12 12v7a2 2 0 1 0 4 0" /></>,
    cart:     <><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></>,
    server:   <><rect x="2" y="3" width="20" height="7" rx="1" /><rect x="2" y="14" width="20" height="7" rx="1" /><path d="M6 6.01h.01M6 17.01h.01" /></>,
    arrow:    <path d="M5 12h14M12 5l7 7-7 7" />,
    code:     <><path d="m18 16 4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16" /></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="ms-icon">
      {paths[name] || null}
    </svg>
  );
};

// -------------------------------------------------------------
// Button
// -------------------------------------------------------------
const Button = ({ variant = "primary", size = "md", children, onClick, icon }) => (
  <button className={`ms-btn ms-btn--${variant} ${size === "lg" ? "ms-btn--lg" : ""}`} onClick={onClick}>
    {children}
    {icon && <span style={{display:"inline-flex"}}><Icon name={icon} size={16} /></span>}
  </button>
);

// -------------------------------------------------------------
// Nav (sticky)
// -------------------------------------------------------------
const Nav = ({ onCta }) => (
  <header className="ms-nav">
    <div className="ms-nav-inner">
      <div className="ms-nav-left">
        <img className="ms-nav-logo" src="../../assets/connexr-logo.png" alt="Connexr" />
        <nav className="ms-nav-links">
          <a>Services</a><a>Products</a><a>Industries</a><a>Insights</a><a>Company</a>
        </nav>
      </div>
      <Button variant="primary" onClick={onCta}>Book a demo</Button>
    </div>
  </header>
);

// -------------------------------------------------------------
// Hero — operator-credible, asymmetric grid (7/5)
// -------------------------------------------------------------
const Hero = () => (
  <section className="ms-section ms-hero">
    <div className="ms-container ms-hero-grid">
      <div>
        <span className="ms-eyebrow">AIOps · Managed Services</span>
        <h1>AI at the Core.<br/>Scale at Speed.</h1>
        <p className="ms-lead">We run AI-native operations for enterprise IT — eliminating alert fatigue, automating incident response, and giving your team back the hours.</p>
        <div className="ms-hero-ctas">
          <Button variant="primary" size="lg" icon="arrow">Book a demo</Button>
          <Button variant="ghost" size="lg">Explore the platform</Button>
        </div>
        <div className="ms-hero-trust">
          <span className="ms-cert">SOC 2 Type II</span>
          <span className="ms-cert">HIPAA</span>
          <span className="ms-cert">ISO 27001</span>
          <span className="ms-cert">GDPR</span>
        </div>
      </div>
      <HeroPanel />
    </div>
  </section>
);

const HeroPanel = () => (
  <aside className="ms-hero-panel">
    <div className="ms-hero-panel-head">
      <div><span className="ms-hero-panel-dot"></span><span className="ms-hero-panel-title">leorix · live triage</span></div>
      <span className="ms-hero-panel-title">us-east-1</span>
    </div>
    <div className="ms-ticker">
      <div><span className="t-time">04:12:07</span> <span className="t-p1">P1</span> payments-api · <span className="t-warn">47 alerts</span> → <span className="t-ok">1 root cause</span></div>
      <div><span className="t-time">04:12:08</span> <span className="t-p1">P2</span> ingest-pipeline · <span className="t-warn">12 alerts</span> → correlated</div>
      <div><span className="t-time">04:12:09</span> <span className="t-mute">··</span> kafka-broker-3 · rebalance ok · lag <span className="t-ok">0ms</span></div>
      <div><span className="t-time">04:12:11</span> <span className="t-mute">··</span> runbook attached · <span className="t-ok">auto-resolved</span></div>
      <div><span className="t-time">04:12:14</span> <span className="t-mute">··</span> on-call notified · pageduty silenced</div>
      <div style={{marginTop:12,paddingTop:12,borderTop:"1px solid rgba(255,255,255,.1)"}}><span className="t-mute">MTTR</span> <span className="t-ok">↓ 64%</span> &nbsp;·&nbsp; <span className="t-mute">noise</span> <span className="t-ok">↓ 92%</span></div>
    </div>
  </aside>
);

// -------------------------------------------------------------
// Trust strip
// -------------------------------------------------------------
const TrustStrip = () => (
  <div className="ms-trust-strip">
    <div className="ms-container">
      <div className="ms-trust-row">
        {["Northwind Health","Gradient Capital","Orbital Bank","Helix Manufacturing","Continuum Insurance","Ridgeline Retail"].map(n => (
          <div key={n} className="ms-trust-cell">{n}</div>
        ))}
      </div>
    </div>
  </div>
);

// -------------------------------------------------------------
// Section header
// -------------------------------------------------------------
const SectionHeader = ({ eyebrow, title, lead }) => (
  <div className="ms-shead">
    {eyebrow && <span className="ms-eyebrow">{eyebrow}</span>}
    <h2>{title}</h2>
    {lead && <p className="ms-lead">{lead}</p>}
  </div>
);

// -------------------------------------------------------------
// Service card
// -------------------------------------------------------------
const ServiceCard = ({ icon, title, body }) => (
  <article className="ms-card">
    <Icon name={icon} />
    <h4>{title}</h4>
    <p>{body}</p>
    <a className="ms-card-link">Read more →</a>
  </article>
);

const ServicesSection = () => (
  <section className="ms-section ms-section--alt">
    <div className="ms-container">
      <SectionHeader
        eyebrow="What we run"
        title="Services that ship, not slides."
        lead="Six service lines run by operators who carry pagers. No 80-page strategy decks; we own the runbook and the on-call."
      />
      <div className="ms-grid-3">
        <ServiceCard icon="activity" title="Managed AIOps" body="24×7 incident triage, alert correlation, and runbook execution. Your team owns architecture; we own pages." />
        <ServiceCard icon="cpu" title="AI Transformation" body="Discover, architect, and ship LLM workloads in production — with evals, guardrails, and observability." />
        <ServiceCard icon="layers" title="Cloud Modernization" body="Migration and platform engineering across AWS, Azure, GCP. FinOps baked in. Real cost takeouts, documented." />
        <ServiceCard icon="shield" title="Security Operations" body="SOC 2 / HIPAA / ISO 27001 readiness, plus continuous detection engineering. Real evidence, real audits." />
        <ServiceCard icon="network" title="Platform & SRE" body="Kubernetes, service mesh, and reliability engineering for engineering orgs that have outgrown their first platform." />
        <ServiceCard icon="server" title="Data Engineering" body="Pipelines, warehouses, lakehouses. Built for the AI workloads that consume them — not as standalone projects." />
      </div>
    </div>
  </section>
);

// -------------------------------------------------------------
// Tech partners
// -------------------------------------------------------------
const PartnersSection = () => (
  <section className="ms-section">
    <div className="ms-container">
      <SectionHeader eyebrow="Tech partners" title="The stack we run in production." />
      <div className="ms-partners">
        {["AWS","Azure","GCP","ServiceNow","Datadog","Microsoft 365"].map(p => (
          <div key={p} className="ms-partner">{p}</div>
        ))}
      </div>
    </div>
  </section>
);

// -------------------------------------------------------------
// Service tabs (3-deep dive)
// -------------------------------------------------------------
const ServiceTabs = () => {
  const tabs = [
    { id: "aiops", label: "Managed AIOps",
      title: "Production-grade incident operations.",
      body: "Embedded SREs, AI-native triage, and runbook automation. We run the on-call so your platform team builds.",
      bullets: ["Alert correlation across Datadog, ServiceNow, PagerDuty", "P1–P3 runbook automation with LeoRix AI", "SLA-backed MTTR commitments", "Quarterly executive read-out, not 100-slide decks"] },
    { id: "transform", label: "AI Transformation",
      title: "Ship LLMs that survive contact with production.",
      body: "Architecture, evals, guardrails, and observability — for use cases that have to clear compliance review.",
      bullets: ["Greenfield + brownfield reference architectures", "Eval harnesses with regression tracking", "PII redaction, lineage, and audit logs", "RAG, agentic, and on-prem deployment patterns"] },
    { id: "cloud", label: "Cloud & Platform",
      title: "Migration with the cost takeout actually documented.",
      body: "Multi-cloud platform engineering with FinOps and SRE folded in. We own the rollback plan.",
      bullets: ["Landing zones for AWS, Azure, GCP", "EKS / AKS / GKE platform standards", "Cost takeout reporting (real $, not %)", "Hybrid + on-prem patterns for regulated workloads"] },
  ];
  const [active, setActive] = useState(tabs[0].id);
  const t = tabs.find(x => x.id === active);
  return (
    <section className="ms-section ms-section--alt">
      <div className="ms-container">
        <SectionHeader
          eyebrow="Deep dives"
          title="Three lines, run in production."
          lead="Each service ships with operator-credible deliverables. Click a tab to see what that actually looks like in practice."
        />
        <div className="ms-tabs">
          {tabs.map(tab => (
            <div key={tab.id} className={`ms-tab ${active === tab.id ? "active" : ""}`} onClick={() => setActive(tab.id)}>
              {tab.label}
            </div>
          ))}
        </div>
        <div className="ms-tab-body">
          <div>
            <h3>{t.title}</h3>
            <p className="ms-lead">{t.body}</p>
          </div>
          <ul>
            {t.bullets.map(b => <li key={b}><span className="arr">→</span><span>{b}</span></li>)}
          </ul>
        </div>
      </div>
    </section>
  );
};

// -------------------------------------------------------------
// LeoRix AI dark callout
// -------------------------------------------------------------
const LeoRixSection = () => (
  <section className="ms-section ms-section--dark">
    <div className="ms-container">
      <div className="ms-leorix">
        <div>
          <span className="ms-eyebrow">Flagship product</span>
          <h2 style={{marginTop:16,marginBottom:24}}>LeoRix AI.<br/>Operator-grade reasoning for AIOps.</h2>
          <p className="ms-lead">An incident-response agent trained on Connexr runbooks. Correlates alerts, attaches runbooks, executes safe remediations, and hands off cleanly when a human is needed.</p>
          <div style={{marginTop:32,display:"flex",gap:12}}>
            <Button variant="primary">See it triage</Button>
            <Button variant="ghost" onClick={(e)=>e.preventDefault()}><span style={{color:"#fff"}}>Read the spec</span></Button>
          </div>
        </div>
        <div>
          <div className="ms-grid-2" style={{gap:16}}>
            <div className="ms-stat"><span className="num">2.8<span className="unit">M</span></span><span className="lbl">Alerts triaged</span><span className="cap">2025 · across 42 engagements</span></div>
            <div className="ms-stat"><span className="num">64<span className="unit">%</span></span><span className="lbl">MTTR reduction</span><span className="cap">P1–P3, healthcare client</span></div>
            <div className="ms-stat"><span className="num">11<span className="unit">k</span></span><span className="lbl">Engineer-hours back</span><span className="cap">Annualized, mid-market avg</span></div>
            <div className="ms-stat"><span className="num">92<span className="unit">%</span></span><span className="lbl">Alert noise reduction</span><span className="cap">Median across deployments</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// -------------------------------------------------------------
// Industries
// -------------------------------------------------------------
const IndustriesSection = () => {
  const ind = [
    { icon:"heart", name:"Healthcare", cap:"HIPAA-eligible deployments" },
    { icon:"coins", name:"FinTech", cap:"Latency- and audit-bound systems" },
    { icon:"factory", name:"Manufacturing", cap:"OT / IT convergence" },
    { icon:"umbrella", name:"Insurance", cap:"Claims, underwriting, fraud" },
    { icon:"cart", name:"Retail", cap:"Peak readiness, omni-stack" },
    { icon:"server", name:"AIOps & IT Ops", cap:"Greenfield + brownfield" },
  ];
  return (
    <section className="ms-section">
      <div className="ms-container">
        <SectionHeader
          eyebrow="Industries"
          title="Where we run."
          lead="Six verticals where AI-native operations have moved from pilot to production. Each has its own compliance posture and its own incident vocabulary."
        />
        <div className="ms-ind-grid">
          {ind.map(i => (
            <div key={i.name} className="ms-ind">
              <Icon name={i.icon} />
              <span className="name">{i.name}</span>
              <span className="cap">{i.cap}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// -------------------------------------------------------------
// Proof — stats + case study + cert badges
// -------------------------------------------------------------
const ProofSection = () => (
  <section className="ms-section ms-section--alt">
    <div className="ms-container">
      <SectionHeader
        eyebrow="Proof"
        title="Numbers we can defend in a board review."
        lead="Real proxies, not vanity metrics. Each datapoint is tied to a specific engagement and survives audit."
      />
      <div className="ms-grid-4">
        <div className="ms-stat"><span className="num">42</span><span className="lbl">Enterprise engagements</span><span className="cap">2025, active</span></div>
        <div className="ms-stat"><span className="num">2.8<span className="unit">M</span></span><span className="lbl">Alerts triaged</span><span className="cap">Across all clients</span></div>
        <div className="ms-stat"><span className="num">64<span className="unit">%</span></span><span className="lbl">Median MTTR cut</span><span className="cap">P1–P3, healthcare</span></div>
        <div className="ms-stat"><span className="num">11<span className="unit">k</span></span><span className="lbl">Engineer-hours back</span><span className="cap">Annualized, mid-market</span></div>
      </div>

      <div className="ms-case">
        <div>
          <span className="ms-eyebrow">Case study · Healthcare</span>
          <p className="quote">"Connexr ran our P1 incident response for 14 months. Alert volume dropped from 380k/month to 31k. We didn't replace the platform team — we gave them their nights back."</p>
          <div className="who"><strong>Mara Chen</strong>VP Platform, Northwind Health</div>
        </div>
        <div>
          <Button variant="ghost" icon="arrow">Read the full case study</Button>
        </div>
      </div>

      <div className="ms-proof-bar">
        <span className="ms-cert">SOC 2 Type II</span>
        <span className="ms-cert">HIPAA</span>
        <span className="ms-cert">ISO/IEC 27001:2022</span>
        <span className="ms-cert">GDPR</span>
      </div>
    </div>
  </section>
);

// -------------------------------------------------------------
// Methodology
// -------------------------------------------------------------
const MethodologySection = () => {
  const steps = [
    { n:"01", name:"Discover", cap:"Two-week instrumented audit. Real data, real systems." },
    { n:"02", name:"Architect", cap:"Reference architecture for your compliance posture." },
    { n:"03", name:"Build", cap:"Engineering. Ours, yours, or a joint pod." },
    { n:"04", name:"Deploy", cap:"Cutover with rollback plan. We carry the pager." },
    { n:"05", name:"Optimize", cap:"Quarterly read-out. Cost, MTTR, change-failure rate." },
  ];
  return (
    <section className="ms-section">
      <div className="ms-container">
        <SectionHeader
          eyebrow="Methodology"
          title="Five steps. Same on every engagement."
          lead="No bespoke methodology slides. The process is operator-tested across 42 engagements, and it survives contact with reality."
        />
        <div className="ms-method">
          {steps.map(s => (
            <div key={s.n} className="ms-step">
              <span className="num">{s.n}</span>
              <span className="name">{s.name}</span>
              <span className="cap">{s.cap}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// -------------------------------------------------------------
// Resources
// -------------------------------------------------------------
const ResourcesSection = () => (
  <section className="ms-section ms-section--alt">
    <div className="ms-container">
      <SectionHeader
        eyebrow="Insights"
        title="Field notes from production."
        lead="Long-form pieces from the engineers who run the systems. No thought leadership. No conference recap."
      />
      <div className="ms-grid-3">
        <article className="ms-resource ms-resource--feat" style={{gridColumn:"span 2"}}>
          <div className="img"></div>
          <div className="body">
            <span className="tag">Featured · 18 min read</span>
            <h4>Why your AIOps deployment stalls at the 60% threshold (and what to do about it).</h4>
            <div className="meta">By Connexr SRE — published Mar 2026</div>
          </div>
        </article>
        <article className="ms-resource">
          <div className="img"></div>
          <div className="body">
            <span className="tag">Field note · 7 min</span>
            <h4>P1 retro: 47 alerts to one root cause in 9 minutes.</h4>
            <div className="meta">Feb 2026</div>
          </div>
        </article>
        <article className="ms-resource">
          <div className="img"></div>
          <div className="body">
            <span className="tag">Reference · 12 min</span>
            <h4>An on-prem RAG architecture that clears HIPAA review.</h4>
            <div className="meta">Jan 2026</div>
          </div>
        </article>
        <article className="ms-resource">
          <div className="img"></div>
          <div className="body">
            <span className="tag">Field note · 5 min</span>
            <h4>FinOps: real $-takeout vs the percentage trap.</h4>
            <div className="meta">Dec 2025</div>
          </div>
        </article>
      </div>
    </div>
  </section>
);

// -------------------------------------------------------------
// CTA strip
// -------------------------------------------------------------
const CtaStrip = () => (
  <section className="ms-cta-strip">
    <div className="ms-container">
      <div className="ms-cta-row">
        <h2>Ready to run AI-native operations in production?</h2>
        <Button variant="primary" size="lg" icon="arrow">Book a demo</Button>
      </div>
    </div>
  </section>
);

// -------------------------------------------------------------
// Footer
// -------------------------------------------------------------
const Footer = () => (
  <footer className="ms-footer">
    <div className="ms-container">
      <div className="ms-footer-grid">
        <div className="ms-footer-brand">
          <img src="../../assets/connexr-logo-white.png" alt="Connexr" style={{height:36}} />
          <p style={{marginTop:24,maxWidth:280,fontSize:13,color:"rgba(255,255,255,.6)"}}>
            AI-native managed services for enterprise IT. A division of RSA Tech Group.
          </p>
        </div>
        <div><h5>Services</h5><ul><li><a>Managed AIOps</a></li><li><a>AI Transformation</a></li><li><a>Cloud</a></li><li><a>Security</a></li><li><a>Platform & SRE</a></li></ul></div>
        <div><h5>Products</h5><ul><li><a>LeoRix AI</a></li><li><a>Runbook Studio</a></li><li><a>Eval Harness</a></li></ul></div>
        <div><h5>Industries</h5><ul><li><a>Healthcare</a></li><li><a>FinTech</a></li><li><a>Manufacturing</a></li><li><a>Insurance</a></li><li><a>Retail</a></li></ul></div>
        <div><h5>Company</h5><ul><li><a>About</a></li><li><a>Insights</a></li><li><a>Careers</a></li><li><a>Contact</a></li></ul></div>
      </div>
      <div className="ms-footer-bottom">
        <span>© 2026 Connexr · A division of RSA Tech Group</span>
        <span>SOC 2 Type II · HIPAA · ISO 27001 · GDPR</span>
      </div>
    </div>
  </footer>
);

// -------------------------------------------------------------
// Page assembly — the canonical 13-block landing
// -------------------------------------------------------------
const Page = () => (
  <div className="ms-page">
    <Nav />
    <Hero />
    <TrustStrip />
    <ServicesSection />
    <PartnersSection />
    <ServiceTabs />
    <LeoRixSection />
    <IndustriesSection />
    <ProofSection />
    <MethodologySection />
    <ResourcesSection />
    <CtaStrip />
    <Footer />
  </div>
);

Object.assign(window, { Icon, Button, Nav, Hero, TrustStrip, SectionHeader, ServiceCard, ServicesSection, PartnersSection, ServiceTabs, LeoRixSection, IndustriesSection, ProofSection, MethodologySection, ResourcesSection, CtaStrip, Footer, Page });
