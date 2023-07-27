import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./All.css"

const Above50 =()=> {
  const [marklist, setMarklist] = useState([]);

  useEffect(() => {
    fetchMarklist();
  }, []);

const fetchMarklist = async () => {
    const response = await axios.get('http://localhost:5000/marklist'); 
    setMarklist(response.data);
};

 let serial=1;
return (
    <div><h1>Average</h1>
      <table>
          <tr>
          <th>No.</th>
            <th>Name</th>
            <th>Mark</th>
            <th>Mark2</th>
            
          </tr>
        <tbody>
          {marklist.map((item) => {
            if(item.mark >=51 && item.mark<=75 && item.mark2>=51 && item.mark2 <=75){
              const ser=serial;
              serial++
                return(
            <tr key={item.id}>
              <td>{ser}</td>
              <td>{item.name}</td>
              <td>{item.mark}</td>
              <td>{item.mark2}</td>
            </tr>
            );
            }}
          )}
          
        </tbody>
      </table>
    </div>
  );
};

export default Above50;
