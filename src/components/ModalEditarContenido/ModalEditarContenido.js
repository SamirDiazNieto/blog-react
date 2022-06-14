import React from 'react';
import PropTypes from 'prop-types';
import './ModalEditarContenido.css';
import {
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const ModalEditarContenido = ({setModalActualizarContenido, isOpen, blog, editarDesc}) => {

  const cerrarModalActualizarContenido = () => {
    setModalActualizarContenido(false);
      const edit = document.getElementById("editar-contenido");
      edit.style.display = "none";
  };
return(
 <Container>
   <Modal isOpen={isOpen}>
   <ModalHeader>
          <div>
            <h3>Actualizar Contenido</h3>
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
            <label>Contenido:</label>
            <textarea 
            // onChange={handleChange}
             value={blog.form.contenido}
             className="form-control"
            id="contenido" 
            name="contenido" 
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
          <Button className="btn btn-danger" onClick={cerrarModalActualizarContenido}>
            Cancelar
          </Button>
        </ModalFooter>
   </Modal>
 </Container>
  
)
};

ModalEditarContenido.propTypes = {};

ModalEditarContenido.defaultProps = {};

export default ModalEditarContenido;
