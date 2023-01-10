import React from "react";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Dashboard.scss";

const Dashboard = () => {
  const navigate = useNavigate();
  const removetoken = localStorage.removeItem("token");
  const logout = () => {
    if (!removetoken) {
      // navigate("/")
      window.location.href = "/";
    }
  };
  return (
    <>
      <div className="dashboard">
        <div className="dash-header">
          <Row>
            <h2>Admin Dashboard</h2>
          </Row>
        </div>
        <Container fluid>
          <Row>
            <Col md={3}>
              <div className="lf-side-bar">
                <Nav className="flex-column">
                  <Nav.Link >Active</Nav.Link>
                  <Nav.Link eventKey="link-1">Link</Nav.Link>
                  <Nav.Link eventKey="link-2">Link</Nav.Link>
                  <Nav.Link eventKey="disabled" disabled>
                    Disabled
                  </Nav.Link>
                </Nav>
              </div>
            </Col>
            <Col md={9}>
              <div className="rt-side-content"></div>
            </Col>
          </Row>
        </Container>
      </div>
      <Button onClick={() => logout()}>Logout</Button>
    </>
  );
};

export default Dashboard;
