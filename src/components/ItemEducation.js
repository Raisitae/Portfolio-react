import React from "react";

const ItemEducation = ({ educations }) => {
  return (
    <li className="li__item-formacion" key={educations.key}>
      <img
        className="img__formacion"
        src={educations.img}
        alt={educations.alt}
      />
      <h3 className="title__formacion">{educations.name}</h3>
      <p>{educations.description}</p>
      <p>{educations.ano}</p>
    </li>
  );
};

export default ItemEducation;
