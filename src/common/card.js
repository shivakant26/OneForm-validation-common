import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./card.scss";

const Card = ({dev}) => {

  return (
    <>
    {
      dev? (<>
      {
         dev?.map((data,key)=>{
          return(
            <div className="card" key={key}>
               <h3>{data?.devloperName}</h3>
               <p>{data?.devloperDesignation}</p>
               <Link to="/details">Read More</Link>
            </div>
          )
        })
      }
      </>) : "no Record Found!"
    }
    </>   
  );
};

export default Card;
