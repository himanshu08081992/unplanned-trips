




// import { data } from 'jquery';
import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [user, setUser] = useState([]);
  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUser(data);
      });
  };
//   useEffect(() => {
//     fetchData();
//   }, []);
  return (
    <>
    <button onClick={fetchData}>Fetch data</button>
      {user.map((val) => (
        <h1 className="text-center " >{val.id}</h1>
        ))}
    </>
  );
};

export default Fetch;
