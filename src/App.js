import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

const RESUME =
  "https://drive.google.com/file/d/18Rmwwj-eL1ZCchu41edn39IWmd-25hlj/view?usp=drive_link";

const projects = [
  {
    title: "Book Shelf",
    kind: "Web app",
    cover: "bg-info",
    icon: "bi-book",
    // domain: "book-shelf.vercel.app",
    desc: "An online bookstore with intuitive search and filtering by genre and author, real-time cart and wishlist updates, and a smooth checkout flow.",
    tags: ["React", "Express", "MongoDB"],
    demo: "https://book-shelf-frontend-ym5b.vercel.app",
    code: "https://github.com/tanaymurade74/BookShelf-Frontend",
  },
  {
    title: "Rapport",
    kind: "CRM platform",
    cover: "bg-primary",
    icon: "bi-funnel-fill",
    // domain: "anvaya-crm.vercel.app",
    desc: "An intuitive CRM for lead management — with pipeline visualisation, scheduled follow-ups, and analytics to keep every deal moving.",
    tags: ["React", "Node.js", "MongoDB"],
    demo: "https://crm-frontend-9o5d.vercel.app",
    code: "https://github.com/tanaymurade74/Rapport-Frontend",
  },
  {
    title: "Nexus Chat",
    kind: "Real-time",
    cover: "bg-danger",
    icon: "bi-chat-dots-fill",
    // domain: "chat-app.vercel.app",
    desc: "A real-time messaging app built on Socket.io — typing indicators, read receipts, emoji, plus message editing, deletion, and reply threads.",
    tags: ["React", "Socket.io", "Node.js"],
    demo: "https://chat-app-frontend-three-umber.vercel.app",
    code: "https://github.com/tanaymurade74/NexusChatFrontend",
  },
];

const stack = {
  Frontend: [
    ["React", "info"],
    ["Bootstrap", "primary"],
  ],
  Backend: [
    ["Node.js", "success"],
    ["Express", "light"],
    ["MongoDB", "success"],
    ["Mongoose", "danger"],
  ],
  Tools: [
    ["Git", "danger"],
    ["GitHub", "light"],
    ["DevTools", "warning"],
    ["Vercel", "light"],
  ],
};

const contacts = [
  {
    label: "Email",
    value: "tanaymurade8@gmail.com",
    icon: "bi-envelope-fill",
    href: "mailto:tanaymurade8@gmail.com",
    external: false,
  },
  {
    label: "GitHub",
    value: "@tanaymurade74",
    icon: "bi-github",
    href: "https://github.com/tanaymurade74",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "Tanay Murade",
    icon: "bi-linkedin",
    href: "https://www.linkedin.com/in/tanay-murade-7880b6317/",
    external: true,
  },
];

const dotStyle = { fontSize: ".5rem", verticalAlign: "middle" };

function App() {
  return (
    <div className="bg-dark min-vh-100" data-bs-theme="dark">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark border-bottom border-secondary sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold d-flex align-items-center gap-2" href="#top">
            <i className="bi bi-code-slash text-info" /> Tanay Murade
          </a>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
            aria-controls="nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav ms-auto align-items-md-center gap-md-2">
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#stack">Stack</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#connect">Connect</a>
              </li>
              <li className="nav-item ms-md-2 mt-2 mt-md-0">
                <a
                  className="btn btn-outline-light btn-sm px-3"
                  href={RESUME}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-download me-1" /> Résumé
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="top" className="py-5">
        <div className="container py-md-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h1 className="display-3 fw-bold mb-2">Tanay Murade</h1>
              <p className="fs-3 fw-semibold mb-3">
                <span className="text-info">Full Stack</span> Developer
              </p>
              <p className="text-secondary fs-5 mb-2">
                I build intuitive digital experiences with modern web technologies —
                turning ideas into fast, reliable products.
              </p>
              <p className="text-secondary mb-3">
                I specialise in React, Node.js, and MongoDB to ship scalable,
                user-centered applications end to end.
              </p>
              <span className="badge rounded-pill text-bg-dark border border-secondary py-2 px-3 mb-4">
                <i className="bi bi-circle-fill text-warning me-1" style={{ fontSize: ".55rem", verticalAlign: "middle" }} />
                  Eager to learn and contribute
              </span>
              <div className="d-flex flex-wrap gap-2">
                <a href="#connect" className="btn btn-info px-4">
                  <i className="bi bi-envelope-fill me-1" /> Contact me
                </a>
                <a href={RESUME} target="_blank" rel="noreferrer" className="btn btn-outline-light px-4">
                  <i className="bi bi-file-earmark-text me-1" /> Résumé
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-5 border-top border-secondary" style={{ scrollMarginTop: "80px" }}>
        <div className="container py-md-3">
          <div className="text-info font-monospace small mb-1">// projects</div>
          <h2 className="fw-bold mb-1">Selected work</h2>
          <p className="text-secondary mb-4">
            Full-stack apps I designed, built, and deployed end to end.
          </p>

          <div className="row g-4">
            {projects.map((p) => (
              <div className="col-md-6 col-lg-4" key={p.title}>
                <div className="card h-100 bg-dark border-secondary shadow-sm">
                  <div
                    className={`position-relative overflow-hidden rounded-top bg-gradient d-flex align-items-center justify-content-center ${p.cover}`}
                    style={{ height: "172px" }}
                  >
                    
                    <i className={`bi ${p.icon} display-3 text-white`} />
                  </div>
                  <div className="card-body d-flex flex-column">
                    <div className="text-info text-uppercase small fw-semibold mb-1">{p.kind}</div>
                    <h5 className="card-title fw-bold">{p.title}</h5>
                    <p className="card-text text-secondary flex-grow-1">{p.desc}</p>
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {p.tags.map((t) => (
                        <span className="badge text-bg-dark border border-secondary fw-normal" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="d-flex gap-2 mt-auto">
                      <a href={p.demo} target="_blank" rel="noreferrer" className="btn btn-info btn-sm">
                        Live demo <i className="bi bi-box-arrow-up-right ms-1" />
                      </a>
                      <a href={p.code} target="_blank" rel="noreferrer" className="btn btn-outline-light btn-sm">
                        <i className="bi bi-github me-1" /> Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="py-5 border-top border-secondary" style={{ scrollMarginTop: "80px" }}>
        <div className="container py-md-3">
          <div className="text-info font-monospace small mb-1">// stack</div>
          <h2 className="fw-bold mb-1">Tech stack</h2>
          <p className="text-secondary mb-4">
            The tools and technologies I reach for, day to day.
          </p>

          {Object.entries(stack).map(([group, items]) => (
            <div className="mb-4" key={group}>
              <div className="text-uppercase small fw-semibold text-secondary mb-2">{group}</div>
              <div className="d-flex flex-wrap gap-2">
                {items.map(([name, color]) => (
                  <span className="badge rounded-pill text-bg-dark border border-secondary fw-normal fs-6 px-3 py-2" key={name}>
                    <i className={`bi bi-circle-fill text-${color} me-2`} style={dotStyle} />
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="connect" className="py-5 border-top border-secondary" style={{ scrollMarginTop: "80px" }}>
        <div className="container py-md-3">
          <div className="text-info font-monospace small mb-1">// connect</div>
          <h2 className="fw-bold mb-1">Let's collaborate</h2>
          <p className="text-secondary mb-4">
            Open to full-stack roles and freelance projects — the fastest way to reach me is below.
          </p>

          <div className="row g-4">
            {contacts.map((c) => (
              <div className="col-md-4" key={c.label}>
                <a
                  href={c.href}
                  className="card h-100 bg-dark border-secondary text-decoration-none"
                  {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  <div className="card-body">
                    <span
                      className="d-inline-flex align-items-center justify-content-center rounded-circle border border-secondary mb-3"
                      style={{ width: "56px", height: "56px" }}
                    >
                      <i className={`bi ${c.icon} fs-4 text-info`} />
                    </span>
                    <div className="text-uppercase small text-secondary">{c.label}</div>
                    <div className="fw-semibold text-light text-break">{c.value}</div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="text-center text-secondary py-4 border-top border-secondary">
        <div className="container">
          <div className="fw-semibold mb-1">
            <i className="bi bi-code-slash text-info me-1" /> Tanay Murade
          </div>
          <small className="font-monospace">© 2026 Tanay Murade · All rights reserved</small>
        </div>
      </footer>
    </div>
  );
}

export default App;