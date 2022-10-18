import React from "react";

const ItemProject = ({ projects }) => {
  return (
    <li className="li__item-proyecto" key={projects.key}>
      <div className="li__item-skill">
        <img src={projects.img} />
        <p>{projects.name}</p>
      </div>
    </li>
  );
};

export default ItemProject;
