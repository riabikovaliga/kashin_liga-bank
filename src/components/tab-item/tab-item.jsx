import React from "react";
import PropTypes from "prop-types";
import {Tab} from "../../const";

const TabItem = (props) => {
  const {
    type,
    IconComponent,
    isActive,
    title,
    onTabClick,
  } = props;

  return (
    <li
      className="tabs__item"
      data-tab-type={type}
      onClick={onTabClick}
    >
      <button className={`tabs__button ${isActive ? `tabs__button--active` : ``}`}>
        <IconComponent className="tabs__icon" />
        <span className="tabs__text">{title}</span>
      </button>
    </li>
  );
};

TabItem.propTypes = {
  type: PropTypes.oneOf([...Object.values(Tab)]).isRequired,
  IconComponent: PropTypes.object.isRequired,
  isActive: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export default TabItem;
