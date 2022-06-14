import React from 'react';
import PropTypes from 'prop-types';
import './ModalEditarBanner.css';
import {
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const ModalEditarBanner = ({setModalActualizarContenido, isOpen, blog}) => {

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
               <h3>Actualizar Banner</h3>
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
            <label>Imagen:</label>
            <input
              className="form-control"
              name="imagen"
              type="file"
              // onChange={handleChange}
              // value={blog.form.imagen}
            />
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

ModalEditarBanner.propTypes = {};

ModalEditarBanner.defaultProps = {};

export default ModalEditarBanner;
