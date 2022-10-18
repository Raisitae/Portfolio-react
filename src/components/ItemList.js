import React from "react";
import ItemSkill from "./ItemSkill";
import ItemProject from "./ItemProject";
import ItemEducation from "./ItemEducation";

const ItemList = ({ skills, educations, projects }) => {
  return (
    <section id="section__listas">
      <div className="div__skills">
        <ul className="ul__skills-lista">
          {skills.map((dato, id) => (
            <ItemSkill key={id} skills={dato} />
          ))}
        </ul>
      </div>
      <div className="div__proyectos">
        <ul className="ul__proyecto-lista">
          {projects.map((dato, id) => (
            <ItemProject key={id} projects={dato} />
          ))}
        </ul>
      </div>
      <div className="div__formacion">
        <ul className="ul__formacion-lista">
          {educations.map((dato, id) => (
            <ItemEducation key={id} educations={dato} />
          ))}
        </ul>
      </div>
    </section>
  );
};

/*
  if ((idCategoria != "productos") & (idCategoria != undefined)) {
    let productosFiltrados = productos.filter(function (obj) {
      return obj.category === `${idCategoria}`;
    });
    return <ItemList productos={productosFiltrados} />;
  } else {
    return <ItemList productos={productos} />;
  }

};
*/
export default ItemList;
