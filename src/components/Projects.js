import React from "react";
import projects from "./Data/projects";
import Card from "./Card";

const Projects = () => {
  return (
    <div className="projects">
      {projects.map((project, index) => (
        <Card
          image={project.image}
          backgroundStyle={project.backgroundStyle}
          imageTitle={project.imageTitle}
          title={project.title}
          labels={project.labels}
          key={index}
          style={{ animationDelay: `${index * 120}ms` }}
        >
          {/* <div className="card__desc">
            <div className="card__desc__details">
              <ul className="card__desc__details-ul">
                {project.content.map((paragraph, index) => (
                  <li className="card__desc__details-ul-li" key={index}>
                    {paragraph}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card__desc__btn">
              {project.button.map((btn, index) => (
                <a
                  className={`btn__effect btn__effect-left ${btn.style}`}
                  href={btn.link}
                  style={{ background: btn.color }}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {btn.name}
                </a>
              ))}
            </div>
          </div> */}
        </Card>
      ))}
    </div>
  );
};

export default Projects;
