import React from "react";
import data from "../data/usersdata.json";

const User = () => {
  return (
    <>
      <table border={1}>
        <thead>
        <tr>
          <th colspan={1}> ID</th>
          <th colspan={3}>NAME</th>
          <th colspan={2}>LAST-NAME</th>
        </tr>
        </thead>
        {data.map((val) => (
            <tbody>
          <tr style={{ textAlign: "center", color: "white" }}>
            <td style={{ background: "hotpink" }}>{val.id}</td>
            <td colSpan={3} style={{ background: "rgb(31,170,0)" }}>
              {val.first_name}
            </td>
            <td colSpan={2} style={{ background: "rgb(120,120,0)" }}>
              {val.last_name}
            </td>
            <td style={{ background: " rgb(31, 190, 124)" }}>{val.age}</td>
          </tr>
          </tbody>
        ))}
      </table>
    </>
  );
};
export default User;
