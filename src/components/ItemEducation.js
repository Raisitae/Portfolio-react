import React from "react";

const ItemEducation = ({ educations }) => {
  return (
    <li className="ul__skills-lista" key={educations.key}>
      <div className="li__item-skill">
        <img src={educations.img} />
        <p>{educations.name}</p>
      </div>
    </li>
  );
};

export default ItemEducation;
