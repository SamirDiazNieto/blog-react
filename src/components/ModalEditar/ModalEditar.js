import React from "react";
// import PropTypes from 'prop-types';
import "./ModalEditar.css";
import {
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const ModalEditar = ({ setModalActualizar, isOpen, blog }) => {
  const cerrarModalActualizar = () => {
    setModalActualizar(false);
  };

  return (
    <Container>
      <Modal isOpen={isOpen}>
        <ModalHeader>
          <div>
            <h3>Actualizar Blog {"usuario"}</h3>
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
            <input
              className="form-control"
              name="descripcion"
              type="text"
              // onChange={handleChange}
              value={blog.form.descripcion}
            />
          </FormGroup>

          <FormGroup>
            <label>Contenido:</label>
            <input
              className="form-control"
              name="contenido"
              type="text"
              // onChange={handleChange}
              value={blog.form.contenido}
            />
          </FormGroup>
          {/* <FormGroup>
            <label>Imagen:</label>
            <input
              className="form-control"
              name="imagen"
              type="file"
              // onChange={handleChange}
              value={blog.form.imagen}
            />
          </FormGroup> */}
        </ModalBody>

        <ModalFooter>
          <Button
            color="primary"
            // onClick={editar}
          >
            Actualizar
          </Button>
          <Button className="btn btn-danger" onClick={cerrarModalActualizar}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

// ModalEditar.propTypes = {};

// ModalEditar.defaultProps = {};

export default ModalEditar;
