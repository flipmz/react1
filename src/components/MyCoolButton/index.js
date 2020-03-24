

import React from "react";
import './style.css';

export const MyCoolButton = (props) => {

    const clickHandler =  (c) => alert("comment bichigdlee: " + props.comment);

    return (

    <div>
      <span style={css}>{props.tovchNer? props.tovchNer: "Real Cool Butt"}</span><br/>
      
      <br/>
      <input 
      className="MyCoolButton" 
      type="button" 
      onClick={clickHandler}
      value = {props.text ? props.text: "клик"} />
    </div>

    );
  };
  const css = {
    color: "red"
  };