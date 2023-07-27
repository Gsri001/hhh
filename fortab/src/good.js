import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./All.css";

const Good = () => {
  const [marklist, setMarklist] = useState([]);
 
  useEffect(() => {
    fetchMarklist();
  }, []);

  const fetchMarklist = async () => {
      const response = await axios.get('http://localhost:5000/marklists');
      setMarklist(response.data);
  };

  return (
    <div>
        <h1>Excellent</h1>
      <table><thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Mark</th>
            <th>Mark2</th>
          </tr></thead>
        <tbody>
            {marklist.map((item,index) => (
              <tr key={item.id}>
                <td>{index +1}</td>
                <td>{item.name}</td>
                <td>{item.mark}</td>
                <td>{item.mark2}</td>
              </tr>
            ))
            }
        </tbody>
      </table>
    </div>
  );
};

export default Good;
