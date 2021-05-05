import React from "react";
import PropTypes from "prop-types";

const PromoSliderItem = (props) => {
  const {
    itemModifierClass,
    children,
  } = props;

  return (
    <div className={`promo-slider__item promo-slider__item--${itemModifierClass}`}>
      <div className="promo-slider__wrapper">
        <div className="promo-slider__content">
          {children}
        </div>
      </div>
    </div>
  );
};

PromoSliderItem.propTypes = {
  itemModifierClass: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
};

export default PromoSliderItem;
