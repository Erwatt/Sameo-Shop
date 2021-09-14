import React from "react";
import '../CSS/Popup.css';
 
const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={(e) => props.handleClose(props.id)}>x</span>
        {props.content}
      </div>
    </div>
  );
};
 
export default Popup;