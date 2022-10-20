import React from "react";

const ItemSkill = ({ skills }) => {
  return (
    <li className="ul__skills-lista" key={skills.key}>
      <div className="li__item-skill">
        <img className="img__skill" src={skills.img} alt={skills.alt} />
        <h3>{skills.name}</h3>
      </div>
    </li>
  );
};

export default ItemSkill;
