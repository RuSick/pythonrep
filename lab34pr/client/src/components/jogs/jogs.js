import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import JogHandler from "../jogHandler/jogHandler.container";
import Jog from "../jog/jog";
import "./jogs.scss";
import add from "../../assets/add.svg";
import moment from "moment";
import _ from "lodash";
import EmptyJogs from "../emptyJogs/emptyJogs";

const Jogs = (props) => {
  const [isOpen, setIsOpenModal] = useState(false);
  const [currentJog, setCurrentJog] = useState({});

  useEffect(() => {
    if (!props.jogs.length) props.onMount();
  }, []);

  const handleJogs = () => {
    if (!_.isEmpty(props.filterValues)) {
      return props.jogs.filter((jog) => {
        const jogDateMoment = moment(jog.date, "DD.MM.YYYY");
        const startDateMoment = moment(
          props.filterValues.startDate,
          "DD.MM.YYYY"
        );
        const endDateMoment = moment(props.filterValues.endDate, "DD.MM.YYYY");
        return (
          jogDateMoment.isAfter(startDateMoment) &&
          jogDateMoment.isBefore(endDateMoment)
        );
      });
    } else return props.jogs;
  };

  const handleModalOpen = (jog) => {
    setIsOpenModal(true);
    setCurrentJog(jog);
  };

  const handleModalClose = () => {
    setIsOpenModal(false);
    setCurrentJog({});
  };

  return (
    <div className="jogs">
      {props.jogs && props.jogs.length === 0 ? (
        <EmptyJogs onCreateNewJog={() => handleModalOpen({})} />
      ) : (
        <>
          <div className="jogs__aside">
            <img src={add} alt="" onClick={() => handleModalOpen({})} />
          </div>
          {props.jogs.length &&
            handleJogs().map((jog) => (
              <Jog
                speed={jog.speed}  
                time={jog.time}
                distance={jog.distance}
                date={jog.date}
                onClick={() => handleModalOpen(jog)}
                key={jog.id}
              />
            ))}
        </>
      )}
      <JogHandler
        jog={currentJog}
        isOpen={isOpen}
        onClose={() => handleModalClose()}
      />
    </div>
  );
};

export default withRouter(React.memo(Jogs));
