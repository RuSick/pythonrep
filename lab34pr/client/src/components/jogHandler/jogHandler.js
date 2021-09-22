import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import cancel from "../../assets/cancel.svg";
import moment from "moment";
import "./jogHandler.scss";
import _ from "lodash";

const JogHandler = (props) => {
  const [isEditMode, setIsEditMode] = useState();
  const [distance, setDistance] = useState(null);
  const [time, setTime] = useState(null);
  const [date, setDate] = useState(null);

  useEffect(() => {
    setIsEditMode(!_.isEmpty(props.jog));
    if (!_.isEmpty(props.jog)) {
      setTime(props.jog.time);
      setDate(props.jog.date);
      setDistance(props.jog.distance);
    } else {
      setTime(null);
      setDate(null);
      setDistance(null);
    }
  }, [props.jog]);

  const handleAddJog = () => {
    if (time !== null && distance !== null && date !== null) {
      const formData = new FormData();
      const obj = {
        time: parseInt(time),
        distance: parseFloat(distance),
        date: date,
      };
      Object.keys(obj).forEach((key) => {
        formData.append(key, obj[key]);
      });
      if (isEditMode) {
        formData.append("jog_id", parseInt(props.jog.id));
        formData.append("user_id", props.user.id);
        props.onEditJog(formData);
        console.log(obj);
        return;
      }
      props.onAddJog(formData);
    } else alert("Values cant be null");
  };

  return (
    <div>
      <Modal className="jog-handler" isOpen={props.isOpen}>
        <div className="jog-handler__main">
          <div className="jog-handler__form">
            <span className="jog-handler__form-label">Distance</span>
            <input
              className="jog-handler__form-input"
              onChange={(e) => setDistance(e.target.value)}
              defaultValue={isEditMode ? props.jog.distance : null}
            />
          </div>
          <div className="jog-handler__form">
            <span className="jog-handler__form-label">Time</span>
            <input
              className="jog-handler__form-input"
              defaultValue={isEditMode ? props.jog.time : null}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <div className="jog-handler__form">
            <span className="jog-handler__form-label">Date</span>
            <input
              className="jog-handler__form-input"
              defaultValue={
                isEditMode ? moment(props.jog.date).format("DD.MM.YYYY") : null
              }
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <button
            className="jog-handler__save-btn"
            onClick={() => handleAddJog()}
          >
            Save
          </button>
        </div>
        <div className="jog-handler__close" onClick={props.onClose}>
          <img src={cancel} alt="" />
        </div>
      </Modal>
    </div>
  );
};

export default JogHandler;
