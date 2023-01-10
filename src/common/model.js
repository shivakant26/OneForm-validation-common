import React, { useState } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./model.scss";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const AddMoreModel = (props) => {
    const [list , setList] = useState([]);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm();

      const onSubmit = (data) => {
        props.sendData(data);
        props.onHide();
      };

  return (
    <div>
      <Modal show={props.show} onHide={props.onHide} style={customStyles} >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Memember</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Control type="text" 
                placeholder="Developer Name"
                {...register("devloperName", {
                    required: true,
                  })}
                />
                {errors?.devloperName?.type === "required" && <p style={{color:"red"}}>Required*</p>}
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Control type="text" 
                placeholder="Developer Designation"
                {...register("devloperDesignation", {
                    required: true,
                  })}
                />
                {errors?.devloperDesignation?.type === "required" && <p style={{color:"red"}}>Required*</p>}
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button className="site-btn-cancel" onClick={props.onHide}>
            Cancel
          </Button>
          <Button type="submit" className="site-btn-success">
            Add
          </Button>
        </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default AddMoreModel;
