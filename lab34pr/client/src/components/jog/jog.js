import React from "react";
import running_man from "../../assets/running_man.svg";
import moment from "moment";
import "./jog.scss";

const Jog = (props) => {
  return (
    <div className="jog">
      <img
        src={running_man}
        alt=""
        onClick={props.onClick}
        className="jog__img"
      />
      <div className="jog__main">
        <span className="jog__timestamp">
          {moment(props.date).format("DD.MM.YYYY")}
        </span>
        <span className="jog__info-box">
          <span className="jog__info-title">Speed:</span>
          <span className="jog__info-subtitle">{props.speed} m/min</span>
        </span>
        <span className="jog__info-box">
          <span className="jog__info-title">Distance:</span>
          <span className="jog__info-subtitle">{props.distance} m</span>
        </span>
        <span className="jog__info-box">
          <span className="jog__info-title">Time:</span>
          <span className="jog__info-subtitle">{props.time} min</span>
        </span>
      </div>
    </div>
  );
};

export default React.memo(Jog);
