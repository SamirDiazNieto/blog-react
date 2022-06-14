import logo from "./logo.svg";
import React from 'react';
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Button } from "reactstrap";
import ModalEditar from "./components/ModalEditar/ModalEditar";
// import { useHistory } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Articulo from "./components/Articulo/Articulo";

const data = [];

function App() {
  const [modalActualizar, setModalActualizar] = React.useState(false);
  // const [modalInsertar, setModalInsertar] = React.useState(false);
  // const [errors, setErrors] = React.useState(null);
  // const [newVal, setNewVal] = React.useState(0);
  // const history = useHistory();
  const [blog, setblog] = React.useState({
    data: data,
    form: {
      // id: "",˜
      titulo: "Titulo PR Blog",
      categoria: "Categoría PR Blog",
      tituloDescripcion: "¿Qué es Lorem Ipsum?",
      descripcion: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.",
      tituloContenido: "¿Por qué lo usamos?",
      contenido: 'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).',
      imagen: "img ",

    }
  });
  let arregloBlog = blog.data;

  const mostrarModalActualizar = () => {
    setModalActualizar(true);
  };


  return (
    <div>
      <Header />
      <div>
        <hgroup className="centrar-texto">
          <h2>Titulo Principal</h2>
          <h3>Sub Titulo</h3>
        </hgroup>
        <div className="container-list-cards">
          {/* card 1 */}
          <div className="card container-card tile">
            <div class="hover12">
              <div class="contenedor">
                <img onClick={mostrarModalActualizar}
                  className="card-img-top img-cards"
                  src="https://ximg.es/286x429/EC111A/fff"
                  alt="dummy"
                />
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title centrar-texto">Titulo Blog</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              {/* <a onClick={mostrarArticulo} className="btn btn-arrow"></a> */}
              <a href="/articulo" className="btn btn-arrow"></a>
            </div>
          </div>
          {/* card 2 */}
          <div className="card container-card">
            <img
              className="card-img-top img-cards"
              src="https://ximg.es/286x429/EC111A/fff"
              alt="dummy"
            />
            <div className="card-body">
              <h5 className="card-title centrar-texto">Titulo Blog</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/" className="btn btn-arrow"></a>
            </div>
          </div>
          {/* card 3 */}
          <div className="card container-card">
            <img
              className="card-img-top img-cards"
              src="https://ximg.es/286x429/EC111A/fff"
              alt="dummy"
            />
            <div className="card-body">
              <h5 className="card-title centrar-texto">Titulo Blog</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/" className="btn btn-arrow"></a>
            </div>
          </div>
          {/* card 4 */}
          <div className="card container-card">
            <img
              className="card-img-top img-cards"
              src="https://ximg.es/286x429/EC111A/fff"
              alt="dummy"
            />
            <div className="card-body">
              <h5 className="card-title centrar-texto">Titulo Blog</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/" className="btn btn-arrow"></a>
            </div>
          </div>
          {/* card 5 */}
          <div className="card container-card">
            <img
              className="card-img-top img-cards"
              src="https://ximg.es/286x429/EC111A/fff"
              alt="dummy"
            />
            <div className="card-body">
              <h5 className="card-title centrar-texto">Titulo Blog</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/" className="btn btn-arrow"></a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <ModalEditar
        blog={blog}
        // handleChange={handleChange}
        setModalActualizar={setModalActualizar}
        isOpen={modalActualizar}
      // setNewVal={setNewVal}
      // newVal={newVal}
      // BASE_URL={BASE_URL}
      // PATH_CUSTOMERS={PATH_CUSTOMERS}
      />
      <Footer />
    </div>
  );
}

export default App;
