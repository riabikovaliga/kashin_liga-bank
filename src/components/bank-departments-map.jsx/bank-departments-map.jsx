import React from "react";
import PropTypes from "prop-types";
import {Map, Placemark} from "react-yandex-maps";
import {MapCoordinate, MAP_PLACEMARKS} from "../../const";

const MAP_STATE = {center: MapCoordinate.EKATERINBURG, zoom: 5};

const BankDepartmentsMap = (props) => {
  const {
    onLoad,
    iconLayoutTemplate,
  } = props;

  return (
    <Map
      modules={[
        `templateLayoutFactory`,
      ]}
      className="bank-departments__map"
      height="462px"
      defaultState={MAP_STATE}
      onLoad={onLoad}
    >
      {MAP_PLACEMARKS.map((placemark, i) => (
        <Placemark
          key={`placemark-${i}`}
          geometry={placemark}
          options={{
            iconLayout: iconLayoutTemplate,
          }}
        />
      ))}
    </Map>
  );
};

BankDepartmentsMap.propTypes = {
  onLoad: PropTypes.func.isRequired,
  iconLayoutTemplate: PropTypes.func,
};

export default BankDepartmentsMap;
