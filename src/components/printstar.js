import React, { useState } from "react";
import "./star.css";

const Print = () => {
  const [star, setStar] = useState([1, 2, 3, 4, 5,6]);
  const [select, setSelect] = useState();
  function abc(x) {
    // console.log(x);
    setSelect(x);
  }
  return (
    <>
      <div className="starlist">
        {star.map((x) => (
          <p
            style={{ color: select === x ? "yellow" : "black" && select < x ?  "black": "red"  }}
            onClick={() => abc(x)}
          >
            *
          </p>
        ))}
      </div>
    </>
  );
};

export default Print;
