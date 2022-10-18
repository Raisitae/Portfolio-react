import React from "react";

const ItemSkill = ({ skills }) => {
  return (
    <li className="ul__skills-lista" key={skills.key}>
      <div className="li__item-skill">
        <img src={skills.img} />
        <p>{skills.name}</p>
      </div>
    </li>
  );
};

export default ItemSkill;
