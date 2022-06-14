import React from 'react';
import PropTypes from 'prop-types';
import './ModalEditarArticulo.css';
import {
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";
const ModalEditarArticulo = ({ setModalActualizarArticulo, isOpen, blog, editarMeta}) => {
  const cerrarModalActualizarArticulo = () => {
    setModalActualizarArticulo(false);
    const edit = document.getElementById("editar-meta");
    edit.style.display = "none";
  };


return(
<Container>
  <Modal isOpen={isOpen}>
  <ModalHeader>
          <div>
            <h3>Actualizar Articulo</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          {/* <FormGroup>

            <label>
              Id:
            </label>
            <input
              className="form-control"
              readOnly
              type="text"

              value={blog.form._id}
            />
          </FormGroup> */}
          <FormGroup>
            <label>Titulo:</label>
            <input
              className="form-control"
              name="titulo"
              type="text"
              // onChange={handleChange}
              value={blog.form.titulo}
              required
            />
          </FormGroup>

          <FormGroup>
            <label>Categoría:</label>
            <input
              className="form-control"
              name="categoria"
              type="text"
              // onChange={handleChange}
              value={blog.form.categoria}
            />
          </FormGroup>

          <FormGroup>
            <label>Descripción:</label>

            <textarea 
            // onChange={handleChange}
             value={blog.form.descripcion}
             className="form-control"
            id="descripcion" 
            name="descripcion" 
            rows="5" 
            cols="50"></textarea>
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button
            color="primary"
            // onClick={editar}
          >
            Actualizar
          </Button>
          <Button className="btn btn-danger" onClick={cerrarModalActualizarArticulo}>
            Cancelar
          </Button>
        </ModalFooter>
  </Modal>
</Container>
)};

ModalEditarArticulo.propTypes = {};

ModalEditarArticulo.defaultProps = {};

export default ModalEditarArticulo;
