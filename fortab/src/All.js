import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./All.css"


const All =()=> {
  const [marklist, setMarklist] = useState([]);

  useEffect(() => {
    fetchMarklist();
  }, []);

  const fetchMarklist = () => {
    fetch('http://localhost:5000/marklist')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMarklist(data);
});}
return (
    <div>
      <h1>Marklist</h1>
      <table > <thead>
          <tr>
            <th>Roll:No</th>
            <th>Name</th>
            <th>Mark</th>
            <th>Mark2</th>
          </tr></thead>
          <tbody>
          {marklist.map((item) => (
            <tr key={item.id}>
             <td>{item.rollno}</td>
              <td>{item.name}</td>
              <td>{item.mark}</td>
              <td>{item.mark2}</td>              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default All;