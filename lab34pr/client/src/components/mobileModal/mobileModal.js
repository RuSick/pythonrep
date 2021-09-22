import React from "react";
import { withRouter } from "react-router";
import green_logo from "../../assets/green_logo.png";
import cancel_grey from "../../assets/cancel_grey.svg";
import "./mobileModal.scss";
import { Link } from "react-router-dom";

const mobileModal = (props) => {
  return (
    <div className="mobile-modal">
      <div className="mobile-modal__header">
        <div className="mobile-modal__icon-wrapper">
          <img src={green_logo} alt="" className="mobile-modal__logo" />
        </div>
        <div className="mobile-modal__icon-wrapper mobile-modal__icon-wrapper--end">
          <img
            src={cancel_grey}
            alt=""
            className="mobile-modal__close"
            onClick={() => props.onClose()}
          />
        </div>
      </div>
      <div className="mobile-modal__content">
        <span
          onClick={() => {
            props.history.push("/");
            props.onClose();
          }}
          className={`mobile-modal__link ${
            props.location.pathname === "/" && "mobile-modal__link--active"
          }`}
        >
          Jogs
        </span>
        <span
          className={`mobile-modal__link ${
            props.location.pathname === "/info" && "mobile-modal__link--active"
          }`}
          onClick={() => {
            props.history.push("/info");
            props.onClose();
          }}
        >
          Info
        </span>
        <span
          className={`mobile-modal__link ${
            props.location.pathname === "/contact-us" &&
            "mobile-modal__link--active"
          }`}
          onClick={() => {
            props.history.push("/contact-us");
            props.onClose();
          }}
        >
          Contact Us
        </span>
      </div>
    </div>
  );
};

export default withRouter(mobileModal);
