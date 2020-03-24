

import React, {useState} from "react";
import './style.css';

export const MyCoolButton = (props) => {
    const [commentHistory, setCommentHistory] = useState([]);
    const [count, setCount] = useState(0);

    const clickHandler =  (c) => {
      setCount(count+1);
      setCommentHistory([...commentHistory, props.comment]);
      // alert("comment bichigdlee: " + props.comment);
    }
    return (

    <div>
      <span style={css}>{props.tovchNer? props.tovchNer: "Real Cool Butt"}</span><br/>
      <br/>
      <input 
      className="MyCoolButton" 
      type="button" 
      onClick={clickHandler}
      value = {props.text ? `${count}) ${props.text}` : "клик"} />
    <div>
      {commentHistory.map(el=>(
      <div>{el}</div>
      ))}
    </div>
    </div>

    );
  };


  const css = {
    color: "red",
  };