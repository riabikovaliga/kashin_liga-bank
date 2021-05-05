import React from "react";
import PropTypes from "prop-types";
import {ReactComponent as IconSliderItem} from "../../assets/img/icon-slider-item.svg";

const SliderButtonItem = (props) => {
  const {
    onClickHandler,
    isSelected,
    index,
  } = props;

  return (
    <li
      onClick={onClickHandler}
      className={`slider-buttons__item ${isSelected ? `slider-buttons__item--active` : ``}`}
    >
      <button className="slider-buttons__button" type="button">
        <IconSliderItem className="slider-buttons__icon" />
        <span className="visually-hidden">{index + 1} слайд</span>
      </button>
    </li>
  );
};

SliderButtonItem.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};

export default SliderButtonItem;
