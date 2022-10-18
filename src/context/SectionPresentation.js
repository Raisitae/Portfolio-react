import React from "react";

const SectionPresentation = () => {
  return (
    <section>
      <div className="div__presentacion">
        <div className="div__presentacion-texto">
          <h1>
            ¡Hola, soy <br />{" "}
            <span className="span__nombre">Raisa Erlich!</span>
          </h1>
          <p>
            Desarrolladora FrontEnd.
            <br />
            Estudiante avanzanda de Licenciatura en Letras.
            <br />
            Inglés, francés y español.
          </p>
        </div>
      </div>
      <div className="div__sobremi">
        <p>
          Nací en Argentina y en este momento vivo en Tucumán. Me interesan
          profundamente las nuevas tecnologías, los videojuegos y los lenguajes.
          Soy estudiante avanzada de la Licenciatura en Letras en la Universidad
          Nacional de Tucumán. Desarrolladora FrontEnd con muchas ganas de
          seguir creciendo en el mundo de la programación.
        </p>
      </div>
    </section>
  );
};

export default SectionPresentation;
