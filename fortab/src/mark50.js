import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./All.css"

const Mark50 =()=> {
  const [marklist, setMarklist] = useState([]);

  useEffect(() => {
    fetchMarklist();
  }, []);

const fetchMarklist = async () => {

    const response = await axios.get('http://localhost:5000/marklist'); 
    setMarklist(response.data);
 
};
const filteredMarks = marklist.filter((item) => item.mark <=50 || item.mark2 <= 50);


return (
    <div><h1>NotBad</h1>
      <table>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Mark1</th>
            <th>Mark2</th>
          </tr>
        <tbody>
          {filteredMarks.map((item,index) => (
            <tr key={item.id}>
              <td>{index +1}</td>
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

export default Mark50;
