import React from "react";

import Typewriter from "typewriter-effect";
const SectionPresentation = () => {
  return (
    <section>
      <div className="div__presentacion" id="about">
        <div className="div__fakecode">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("<![CDATA[<data><</data>")
                .typeString("body")
                .typeString("<![CDATA[<data>></data><br/>")

                .typeString("<![CDATA[<data><</data>")
                .typeString("div")
                .typeString("<![CDATA[<data>></data><br/>")

                .typeString("<![CDATA[<data><</data>")
                .typeString("h1")
                .typeString("<![CDATA[<data>></data>")

                .typeString(
                  '<span style="color: lightblue"> ¡Hola soy Raisa Erlich! </span>'
                )
                .typeString("<![CDATA[<data><</data>")
                .typeString("h1")
                .typeString("<![CDATA[<data>/></data></br>")

                .typeString("<![CDATA[<data><</data>")
                .typeString("h2")
                .typeString("<![CDATA[<data>></data>")
                .typeString(
                  '<span style="color: lightblue"> Desarrolladora Frontend. </span>'
                )
                .typeString("<![CDATA[<data><</data>")
                .typeString("h2")
                .typeString("<![CDATA[<data>/></data></br>")

                .typeString("<![CDATA[<data><</data>")
                .typeString("h2")
                .typeString("<![CDATA[<data>></data>")
                .typeString(
                  '<span style="color: lightblue"> Estudiante avanzanda de Licenciatura en Letras. </span>'
                )
                .typeString("<![CDATA[<data><</data>")
                .typeString("h2")
                .typeString("<![CDATA[<data>/></data></br>")

                .typeString("<![CDATA[<data><</data>")
                .typeString("h2")
                .typeString("<![CDATA[<data>></data>")
                .typeString(
                  '<span style="color: lightblue"> Inglés, francés y español </span>'
                )
                .typeString("<![CDATA[<data><</data>")
                .typeString("h2")
                .typeString("<![CDATA[<data>/></data></br>")

                .typeString("<![CDATA[<data><</data>")
                .typeString("div")
                .typeString("<![CDATA[<data>/></data><br/>")

                .typeString("<![CDATA[<data><</data>")
                .typeString("body")
                .typeString("<![CDATA[<data>/></data><br/>")

                .pauseFor(2500)
                .start();
            }}
          />
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
