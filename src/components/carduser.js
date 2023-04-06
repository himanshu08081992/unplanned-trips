import React from "react";
import data from "../data/usersdata.json";
const Card = () => {
  return (
    <>
      <div className="d-flex flex-wrap bg-danger border border-4 border-dark px-5 "
        // style={{
        //   border: "2px solid black",
        //   background: "red",
        //   display: "grid",
        //   gridTemplateColumns: "repeat(4 , minmax(0 ,1fr))"
        // }}
      >
        {data.map((value) => (
          <>
            <div className="col-lg-3 col-md-6 col-sm-12 bg-light border border-4 border-success my-3"
              // style={{
              //   border: "2px solid green",
              //   background: "pink",
              //   padding: "20px",
              //   margin: "20px"
              // }}
            >
              <h3>ID:{value.id}</h3>
              <h3>FIRST-NAME:{value.first_name}</h3>
              <h3>LAST-NMAE:{value.last_name}</h3>
              <h3>AGE:{value.age}</h3>
            </div>
          </>
        ))}
        ;
      </div>
    </>
  );
};
export default Card;
