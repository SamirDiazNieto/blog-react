import React from "react";
import PropTypes from "prop-types";
import "./Articulo.css";
import { Container } from "reactstrap";

<<<<<<< HEAD
const Articulo = () => (
=======
const Articulo = () => {
  
const editar=() =>{

  const edit = document.getElementById("editar");
  edit.style.display = "block";
}

  return(
>>>>>>> a380aa7b472b3c247d1d7239a9092bf3150d3a26
  <div className="Articulo" data-testid="Articulo">
    <div className="banner-articulo">
      <img
        className="img-responsive"
        src="https://ximg.es/1350x560/EC111A/fff"
<<<<<<< HEAD
        
=======

>>>>>>> a380aa7b472b3c247d1d7239a9092bf3150d3a26
        alt="dummy"
      />
    </div>
    <Container>
<<<<<<< HEAD
    <hgroup className="cuerpo-articulo">
      <h2 className="centrar-texto">Titulo del Blog</h2>
      <h3 className="centrar-texto">Categoría</h3>
      <hr/>
      <h4><b>¿Qué es Lorem Ipsum?</b></h4>      
      <p>Lorem Ipsum es simplemente el texto de relleno de
        las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
        relleno estándar de las industrias desde el año 1500, cuando un impresor
        (N. del T. persona que se dedica a la imprenta) desconocido usó una
        galería de textos y los mezcló de tal manera que logró hacer un libro de
        textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó
        como texto de relleno en documentos electrónicos, quedando esencialmente
        igual al original. Fue popularizado en los 60s con la creación de las
        hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más
        recientemente con software de autoedición, como por ejemplo Aldus
        PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
      <h4><b>¿Por qué lo usamos?</b></h4> 
      <p> Es un hecho establecido hace demasiado tiempo que un lector se distraerá
        con el contenido del texto de un sitio mientras que mira su diseño. El
        punto de usar Lorem Ipsum es que tiene una distribución más o menos
        normal de las letras, al contrario de usar textos como por ejemplo
        "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un
        español que se puede leer. Muchos paquetes de autoedición y editores de
        páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer
        una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web
        que usan este texto si se encuentran en estado de desarrollo. Muchas
        versiones han evolucionado a través de los años, algunas veces por
        accidente, otras veces a propósito (por ejemplo insertándole humor y
        cosas por el estilo).</p>    
      <h4><b>¿De dónde viene?</b></h4>     
      <p> Al contrario del pensamiento
        popular, el texto de Lorem Ipsum no es simplemente texto aleatorio.
        Tiene sus raices en una pieza cl´sica de la literatura del Latin, que
        data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000
        años de antiguedad. Richard McClintock, un profesor de Latin de la
        Universidad de Hampden-Sydney en Virginia, encontró una de las palabras
        más oscuras de la lengua del latín, "consecteur", en un pasaje de Lorem
        Ipsum, y al seguir leyendo distintos textos del latín, descubrió la
        fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33
        de "de Finnibus Bonorum et Malorum" (Los Extremos del Bien y El Mal) por
        Cicero, escrito en el año 45 antes de Cristo. Este libro es un tratado
        de teoría de éticas, muy popular durante el Renacimiento. La primera
        linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una
        linea en la sección 1.10.32{" "}</p>    
    </hgroup>
    </Container>
  </div>
);
=======
      <hgroup className="cuerpo-articulo">
        <h2 className="centrar-texto">Titulo del Blog</h2>
        <h3 className="centrar-texto">Categoría</h3>
      </hgroup>
      <hr />
      <div className="contenedor-admin" onClick={editar}>
        <div>
          <h4><b>¿Qué es Lorem Ipsum?</b></h4>
          <p>Lorem Ipsum es simplemente el texto de relleno de
            las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
            relleno estándar de las industrias desde el año 1500, cuando un impresor
            (N. del T. persona que se dedica a la imprenta) desconocido usó una
            galería de textos y los mezcló de tal manera que logró hacer un libro de
            textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó
            como texto de relleno en documentos electrónicos, quedando esencialmente
            igual al original. Fue popularizado en los 60s con la creación de las
            hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más
            recientemente con software de autoedición, como por ejemplo Aldus
            PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
        </div>
        <div className="contenedor-admin">
          <span className="contenedor-admin" id="editar">  <a href="/">Editar</a></span>
        </div>
      </div>
      <hr />
      <div className="contenedor-admin">
      <div>
      <h4><b>¿Por qué lo usamos?</b></h4>
        <p> Es un hecho establecido hace demasiado tiempo que un lector se distraerá
          con el contenido del texto de un sitio mientras que mira su diseño. El
          punto de usar Lorem Ipsum es que tiene una distribución más o menos
          normal de las letras, al contrario de usar textos como por ejemplo
          "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un
          español que se puede leer. Muchos paquetes de autoedición y editores de
          páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer
          una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web
          que usan este texto si se encuentran en estado de desarrollo. Muchas
          versiones han evolucionado a través de los años, algunas veces por
          accidente, otras veces a propósito (por ejemplo insertándole humor y
          cosas por el estilo).</p>
        <h4><b>¿De dónde viene?</b></h4>
        <p> Al contrario del pensamiento
          popular, el texto de Lorem Ipsum no es simplemente texto aleatorio.
          Tiene sus raices en una pieza cl´sica de la literatura del Latin, que
          data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000
          años de antiguedad. Richard McClintock, un profesor de Latin de la
          Universidad de Hampden-Sydney en Virginia, encontró una de las palabras
          más oscuras de la lengua del latín, "consecteur", en un pasaje de Lorem
          Ipsum, y al seguir leyendo distintos textos del latín, descubrió la
          fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33
          de "de Finnibus Bonorum et Malorum" (Los Extremos del Bien y El Mal) por
          Cicero, escrito en el año 45 antes de Cristo. Este libro es un tratado
          de teoría de éticas, muy popular durante el Renacimiento. La primera
          linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una
          linea en la sección 1.10.32{" "}</p>
      </div>
      <div className="contenedor-admin">
          <span className="contenedor-admin">  <a href="/">Editar</a></span>
        </div>
      </div>

     


    </Container>
  </div>
)
          };
>>>>>>> a380aa7b472b3c247d1d7239a9092bf3150d3a26

Articulo.propTypes = {};

Articulo.defaultProps = {};

export default Articulo;
