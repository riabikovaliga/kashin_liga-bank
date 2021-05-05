import React from "react";
import PropTypes from "prop-types";
import {ReactComponent as IconClose} from "../../assets/img/icon-close.svg";

const CloseButton = (props) => {
  const {className, onCloseButtonClick} = props;
  return (
    <button
      onClick={onCloseButtonClick}
      className={`${className} close-button`}
      type="button"
    >
      <IconClose className="close-button__icon" />
      <span className="visually-hidden">Закрыть окно</span>
    </button>
  );
};

CloseButton.propTypes = {
  className: PropTypes.string,
  onCloseButtonClick: PropTypes.func,
};

export default CloseButton;
