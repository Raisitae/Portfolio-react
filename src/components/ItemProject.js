import React from "react";

const ItemProject = ({ projects }) => {
  return (
    <li
      className="li__item-proyecto"
      key={projects.key}
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-easing="ease-in-out"
    >
      <img className="img__proyecto" src={projects.img} alt={projects.alt} />
      <h3>{projects.name}</h3>
      <p>{projects.description}</p>
      <p>{projects.langages}</p>

      {projects.demo && projects.repo ? (
        <div className="div__botonera-proyecto">
          <a href={projects.demolink} target="_blank">
            <button className="button__proyecto-demo">DEMO</button>
          </a>
          <a href={projects.repolink} target="_blank">
            <button className="button__proyecto-repo">REPOSITORIO</button>
          </a>
        </div>
      ) : (
        <div className="div__botonera-proyecto">
          <a href={projects.repolink} target="_blank">
            <button className="button__proyecto-demo">DEMO</button>
          </a>
        </div>
      )}
    </li>
  );
};

export default ItemProject;
