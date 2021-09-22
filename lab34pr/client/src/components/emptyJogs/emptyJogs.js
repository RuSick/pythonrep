import React from "react";
import sad_icon from "../../assets/sad_icon.svg";
import "./emptyJogs.scss";

const EmptyJogs = (props) => (
  <div className="empty-jogs">
    <img src={sad_icon} alt="" className="empty-jogs__icon" />
    <div className="empty-jogs__article">Nothing is here</div>
    <button
      className="empty-jogs__create-jog-btn"
      onClick={() => props.onCreateNewJog()}
    >
      Create your jog first
    </button>
  </div>
);

export default EmptyJogs;
