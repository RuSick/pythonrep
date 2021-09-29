import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "../../assets/logo.svg";
import filter from "../../assets/filter.svg";
import hamburger from "../../assets/hamburger.svg";
import filter_active from "../../assets/filter_active.svg";
import FilterDialog from "../filterDialog/filterDialog.container";
import "./header.scss";
import MobileModal from "../mobileModal/mobileModal";

const Header = (props) => {
  const [isMobileHeaderOpen, setIsMobileHeaderOpen] = useState(false);

  return (
    <div className="header-wrapper">
      <div className="header">
        <img src={logo} alt="" className="header__logo" />
        {props.isUserAuthorised && (
          <div className="header__auth-content">
            <Link
              tag="span"
              to="/"
              className={`header__link ${
                props.location.pathname === "/" ? "header__link--active" : ""
              }`}
            >
              Jogs
            </Link>
            <Link
              tag="span"
              to="/info"
              className={`header__link ${
                props.location.pathname === "/info"
                  ? "header__link--active"
                  : ""
              }`}
            >
              Info
            </Link>
            <Link
              tag="span"
              to="/contact-us"
              className={`header__link ${
                props.location.pathname === "/contact-us"
                  ? "header__link--active"
                  : ""
              }`}
            >
              Contact us
            </Link>
            <img
              src={props.isFilterDialogOpen ? filter_active : filter}
              alt=""
              className="header__filter-icon"
              onClick={() => {
                if (props.isFilterDialogOpen) props.onCloseFilterDialog();
                else props.onOpenFilterDialog();
              }}
            />

            <img
              src={hamburger}
              alt=""
              className="header__hamburger"
              onClick={() => {
                setIsMobileHeaderOpen(true);
              }}
            />
            {isMobileHeaderOpen && (
              <MobileModal onClose={() => setIsMobileHeaderOpen(false)} />
            )}
            <span onClick={() => { localStorage.removeItem("jogging_token"); document.location.reload(); }}>Logout</span>
          </div>
        )}
      </div>
      {props.isFilterDialogOpen && <FilterDialog />}
    </div>
  );
};

export default withRouter(Header);
