import React from "react";
import ItemSkill from "./ItemSkill";
import ItemProject from "./ItemProject";
import ItemEducation from "./ItemEducation";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

const ItemList = ({ skills, educations, projects }) => {
  AOS.init();
  return (
    <section className="section__listas">
      <div className="div__skills">
        <h2
          className="titulo__sections"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          Skills
        </h2>
        <ul
          className="ul__skills-lista"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
        >
          {skills.map((dato, id) => (
            <ItemSkill key={id} skills={dato} />
          ))}
        </ul>
      </div>
      <div className="div__proyectos">
        <h2
          className="titulo__sections"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          Formacion
        </h2>
        <ul
          className="ul__formacion-lista"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
        >
          {educations.map((dato, id) => (
            <ItemEducation key={id} educations={dato} />
          ))}
        </ul>
      </div>
      <div className="div__proyectos">
        <h2
          className="titulo__sections"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          Proyectos
        </h2>
        <ul>
          {projects.map((dato, id) => (
            <ItemProject key={id} projects={dato} />
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
