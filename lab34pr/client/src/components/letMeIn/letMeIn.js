import React from "react";
import bear_face from "../../assets/bear_face.svg";
import "./letMeIn.scss";

const LetMeIn = (props) => {
  console.log(props);
  return (
    <div className="auth">
      <img src={bear_face} className="" alt="" />
      <button
        className="auth__entry-btn"
        onClick={() => {
          props.onGetIn();
        }}
      >
        Let me in
      </button>
    </div>
  );
};

export default LetMeIn;
