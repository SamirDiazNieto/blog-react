import logo from "./logo.svg";
import React from 'react';
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Button } from "reactstrap";
import ModalEditar from "./components/ModalEditar/ModalEditar";
// import { useHistory } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
      titulo: "Titulo PR",
      categoria: "Categoría PR",
      descripcion: "Descripción PR",
      contenido:"Lorem",
      imagen:"img ",

    }
  });
  let arregloBlog = blog.data;

  const mostrarModalActualizar = () => {
    setModalActualizar(true);
     console.log(blog.form)
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
