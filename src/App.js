import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import {Link} from "react-router-dom"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
function App() {
  return (
    <div className="bg-dark min-vh-100">

<nav className="navbar navbar-dark  fixed-top border-bottom border-secondary py-0">
        <div className="container">
          <span className="navbar-brand fw-bold fs-4">
            <span className="text-info me-2">{"</>"}</span>
            Tanay Murade
          </span>
        </div>
      </nav>

      <main className="container text-light py-5">
        <div className="mb-5 pb-5 border-bottom border-secondary">
          <h1 className="display-4 fw-bold">Tanay Murade</h1>
          <h4 className="text-info mb-4">Full Stack Dev</h4>
          <p>
            Passionate full-stack developer crafting intuitive digital
            experiences with modern technologies
          </p>
          <p className="mb-4">
            Specializing in React, Node.js, and MongoDB to build scalable and
            user-centered applications.
          </p>
          <a  href = "#connect"className="btn btn-primary px-4 py-2">Contact Me</a>
<a 
            href="https://drive.google.com/file/d/1gSLCs6ZTluBYHmxnsSm3Ye68yzomuEle/view?usp=drive_link" 
            rel="noreferrer"
            target="_blank" 
            className="btn btn-outline-light ms-3 px-4 py-2"
          >
            Resume
          </a>
        </div>

        <div className="mb-5 pb-5 border-bottom border-secondary">
          <h2 className="mb-4 fw-bold">Projects</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card bg-dark text-light border-secondary h-100 shadow">
                <div
                  className="card-img-top bg-light"
                  style={{ height: "200px" }}
                >
                  <img
                    src="https://imgs.search.brave.com/7IhQu-sGgLaCmT3tAbHqbfCh4svuqEVOgh-MdoezsEc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9ib29r/c2hlbGYtc2lnbi1s/aW5lLWljb24tbG9n/by1ib29rcy1zaGVs/dmVzLWNvbmNlcHQt/bGlicmFyeS12ZWN0/b3ItbGluZWFyLWls/bHVzdHJhdGlvbi0y/MDUwMjE1NzcuanBn"
                    alt="Book Shelf"
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h4 className="card-title text-info">Book Shelf</h4>
                  <p className="card-text flex-grow-1">
                    A comprehensive online bookstore featuring intuitive search
                    and filtering by genre and author. Includes real-time cart
                    and wishlist updates and seamless orders.
                  </p>
                  <div className="d-flex gap-3 mt-3">
                   <a 
                      href="https://book-shelf-frontend-ym5b.vercel.app" 
                      rel="noreferrer"
                      target="_blank" 
                      className="btn btn-primary w-50"
                    >
                      Demo
                    </a>
                    <a 
                      href="https://github.com/tanaymurade74/BookShelf-Frontend" 
                      rel="noreferrer"
                      target="_blank" 
                      className="btn btn-outline-light w-50"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card bg-dark text-light border-secondary h-100 shadow">
                <div
                  className="card-img-top bg-light"
                  style={{ height: "200px" }}
                >
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/026/590/504/non_2x/crm-logo-design-inspiration-for-a-unique-identity-modern-elegance-and-creative-design-watermark-your-success-with-the-striking-this-logo-vector.jpg"
                    alt="Anvaya CRM"
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h4 className="card-title text-info">Anvaya</h4>
                  <p className="card-text flex-grow-1">
                    An intuitive CRM system designed for lead management with
                    pipeline visualization, follow-ups, and analytics.
                  </p>
                  <div className="d-flex gap-3 mt-3">
                    <a 
                      href="https://crm-frontend-9o5d.vercel.app" 
                      rel="noreferrer"
                      target="_blank" 
                      className="btn btn-primary w-50"
                    >
                      Demo
                    </a>
                    <a 
                      href="https://github.com/tanaymurade74/CRM-Frontend" 
                      rel="noreferrer"
                      target="_blank" 
                      className="btn btn-outline-light w-50"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5 pb-5 border-bottom border-secondary">
          <h2 className="mb-3 fw-bold">Tech Stack</h2>
          <p className="text-secondary mb-4">Technologies and tools used</p>

          <div className="row g-4 mt-2">
            {[
              "React",
              "Node.js",
              "MongoDB",
              "Mongoose",
              "Bootstrap",
              "Express",
              "Git",
              "GitHub",
              "DevTools",
              "Vercel",
            ].map((tech, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-3">
                <div className="d-flex align-items-center gap-3">
                  <span className="text-secondary fs-5">❖</span>
                  <span className="fs-5">{tech}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-3 fw-bold" id = "connect">Connect</h2>
          <p className="text-secondary mb-4">Let's Collaborate</p>
          <div className="row g-3 text-center">
            <div className="col-md-4">
              <a
                href="mailto:tanaymurade8@gmail.com"
                className="text-info text-decoration-none fw-bold fs-5"
              >
                <div className="p-3 border border-secondary rounded hover-bg-light">
                  <FaEnvelope size={40} />
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a
                href="https://github.com/tanaymurade74"
                rel="noreferrer"
                target="_blank"
                className="text-info text-decoration-none fw-bold fs-5"
              >
                <div className="p-3 border border-secondary rounded">
                  <FaGithub size={40} />
                </div>
              </a>
            </div>
            <div className="col-md-4">
                <a
                  href="https://www.linkedin.com/in/tanay-murade-7880b6317/"
                  rel="noreferrer"
                  target = "_blank"
                  className="text-info text-decoration-none fw-bold fs-5"
                >
                                <div className="p-3 border border-secondary rounded">

                  <FaLinkedin size={40} />
                  </div>
                </a>
            </div>
          </div>
        </div>
      </main>
      <footer className="text-center text-light py-4 border-top border-secondary mt-auto">
        <small>© 2026 Tanay Murade • All rights reserved</small>
      </footer>
    </div>
  );
}

export default App;
