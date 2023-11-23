import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import './App.css';

function BoxList() {

  const [boxes, setBoxes] = useState([]);

  const addBox = newBox => {
      setBoxes(boxes => [...boxes, newBox]);
  }

  const remove = id => {
      setBoxes(boxes => boxes.filter(box => box.id !== id));
  }

  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />
      {boxes.map(box => (
        <Box 
          key={box.id}
          id={box.id}
          backgroundColor={box.backgroundColor} 
          width={box.width} 
          height={box.height} 
          handleRemove={remove}
        />
      ))}
    </div>
  );
}

export default BoxList;