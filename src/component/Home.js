import PropTypes from "prop-types";
import React, { Component, useState } from "react";
import Card from "../common/card";
import AddMoreModel from "../common/model";
import './Home.scss';

const developers = [
  { devloperName: "Gulshan Rajput", devloperDesignation: "React Developer" },
  { devloperName: "Bhupendra Patidar", devloperDesignation: "React Developer" },
  { devloperName: "Monika Patidar", devloperDesignation: "React Developer" },
  { devloperName: "shivakant Tiwari", devloperDesignation: "React Developer" },
  { devloperName: "Sonali Chouhan", devloperDesignation: "React Developer" },
  { devloperName: "Nikita Patel", devloperDesignation: "React Developer" },
  { devloperName: "Alok Patekar", devloperDesignation: "React Developer" },
  { devloperName: "Rakesh Kumawat", devloperDesignation: "React Developer" },
  { devloperName: "Anurag verma", devloperDesignation: "React Developer" },
  { devloperName: "Umesh Patel", devloperDesignation: "React Developer" },
  { devloperName: "Parmanand Kumavat", devloperDesignation: "React Developer" },
  { devloperName: "Aript Sharma", devloperDesignation: "React Developer" },
  {
    devloperName: "Ambalika Shikerwar",
    devloperDesignation: "React Developer",
  },
  { devloperName: "Sanjay Gupta", devloperDesignation: "React Developer" },
  { devloperName: "Karuna Shakle", devloperDesignation: "React Developer" },
  { devloperName: "Mahima Janoriya", devloperDesignation: "React Developer" },
  { devloperName: "Deepak yadav", devloperDesignation: "React Developer" },
  { devloperName: "Madhu Malviya", devloperDesignation: "React Developer" },
  { devloperName: "Mohit mondore", devloperDesignation: "React Developer" },
];

export const Home = () => {
  const [show, setShow] = useState(false);
  const [record, setRecord] = useState(developers);
  const addModel = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  const getData = (val) => {
    console.log(2222, val);
    setRecord([...record, val]);
  };
  console.log(record);
  return (
    <>
      {show && (
        <AddMoreModel show={show} onHide={handleClose} sendData={getData} />
      )}
      <div className="main-page-wr">
        <div className="add-btn">
          <button onClick={addModel}>Add More</button>
        </div>
        <h1>React Team</h1>
        <div className="card_wr">
          <Card dev={record} />
        </div>
      </div>
    </>
  );
};

export default Home;
