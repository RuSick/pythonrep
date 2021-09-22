import React, { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "./filterDialog.scss";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const FilterDialog = (props) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    if (!!startDate && !!endDate && new Date(startDate) < new Date(endDate)) {
      props.onSetFilterValues({
        startDate: moment(startDate).format("DD.MM.YYYY"),
        endDate: moment(endDate).format("DD.MM.YYYY"),
      });
    }
  }, [endDate]);

  return (
    <div className="filter-dialog">
      <div className="filter-dialog__input-container">
        <span className="filter-dialog__container-label">Date from</span>
        <ReactDatePicker
          customInput={
            <input
              className="filter-dialog__container-input"
              value={startDate}
            />
          }
          selected={startDate}
          dateFormat="dd.MM.yyyy"
          onChange={(date) => setStartDate(date)}
        />
      </div>
      <div className="filter-dialog__input-container">
        <span className="filter-dialog__container-label">Date to</span>
        <ReactDatePicker
          customInput={
            <input className="filter-dialog__container-input" value={endDate} />
          }
          dateFormat="dd.MM.yyyy"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
        />
      </div>
    </div>
  );
};

export default FilterDialog;
