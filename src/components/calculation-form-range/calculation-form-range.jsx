import React from "react";
import PropTypes from "prop-types";
import {Range} from "react-range";
import {ReactComponent as IconRangeThumb} from "../../assets/img/icon-range-thumb.svg";

const CalculationFormRange = (props) => {
  const {
    step,
    min,
    max,
    values,
    onChange,
  } = props;

  return (
    <Range
      step={step}
      min={min}
      max={max}
      values={values}
      onChange={onChange}
      renderTrack={({props: trackProps, children}) => (
        <div
          {...trackProps}
          className="calculation-form__range-track"
        >
          {children}
        </div>
      )}
      renderThumb={({props: thumbProps}) => (
        <IconRangeThumb
          {...thumbProps}
          className="calculation-form__range-thumb"
        />
      )}
    />
  );
};

CalculationFormRange.propTypes = {
  step: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  values: PropTypes.arrayOf(PropTypes.number).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CalculationFormRange;
