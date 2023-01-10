import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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
      <h1>Welcome to Dashboard</h1>
      <Button onClick={() => logout()}>Logout</Button>
    </>
  );
};

export default Dashboard;
