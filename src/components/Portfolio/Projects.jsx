import { useEffect } from "react";
import Link from "next/link";
import projects from "@data/Portfolio/projects.json";

const Projects = ({ style = "4" }) => {
  const projectsData = projects;

  useEffect(() => {
    setTimeout(() => {
      if (!mixitup) return;
      mixitup(".portfolio-projects");
    }, 0);
  }, []);

  return (
    <section
      className={`portfolio-projects pt-10 style-1 ${
        style === "5" ? "" : "bg-white"
      }`}
    >
      <div className="container">
        <div
          className={`section-head text-center style-${style} ${
            style === "5" ? "mb-30" : "mb-10"
          }`}
        >
          {style === "4" && <small className="title_small">Portfolio</small>}
          <h2 className="mb-0">
            {"Our"} <span> {"Projects"} </span>{" "}
          </h2>
        </div>
        <div className="controls">
          {
          projectsData.filters.map((filter, i) => (
            <button
              key={i}
              type="button"
              className="control"
              data-filter={filter.filter}
            >
              {filter.title}
            </button>
          ))}
        </div>
        <section className="portfolio style-1">
          <div className="content">
            <div className="row mix-container">
              {
              projectsData.projects.map((project, i) => (
                <div className={`col-lg-4 mix ${project.filter}`} key={i}>
                  <div
                    className={`portfolio-card ${
                      i !== projects.projects.length - 1 ? "mb-10" : ""
                    }`}
                  >
                    <div className="img">
                      <img src={project.image} alt="" />
                    </div>
                    <div className="info">
                      <h5>
                        <Link href={project.link}>
                          <a>{project.title}</a>
                        </Link>
                      </h5>
                      <small className="d-block color-main text-uppercase">
                        {project.type}
                      </small>
                      <div className="text">{project.details}</div>
                      <div className="tags">
                        {project.tags.map((tag, i) => (
                          <a key={i} href="#" className="me-1">
                            {tag}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="text-center">
            <a
              href="#"
              className={`btn rounded-pill fw-bold ${
                style === "5"
                  ? "mt-30 sm-butn hover-blue2 blue5-3Dbutn"
                  : "me-4 text-white bg-blue4"
              }`}
              target="_blank"
            >
              <small>{"Show More"} (24)</small>
            </a>
          </div> */}
        </section>
      </div>
    </section>
  );
};

export default Projects;
