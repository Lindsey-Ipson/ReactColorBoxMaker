import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";

function Box({id, handleRemove, backgroundColor = "gray", width = 100, height = 100}) {
  const remove = () => handleRemove(id);
  return (
    <div className="Box">
      <div style={{backgroundColor, width: `${width}px`, height: `${height}px`}}>
      </div>
      <button class="Box-remove-btn" onClick={remove}>X</button>   
    </div>
  );
}

export default Box;