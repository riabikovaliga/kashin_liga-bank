import React from "react";
import PromoSliderItem from "../promo-slider-item/promo-slider-item";

const PromoCredit = () => {
  return (
    <PromoSliderItem itemModifierClass="credit">
      <h2 className="promo-slider__title">Лига Банк</h2>
      <p className="promo-slider__description">Кредиты на любой случай</p>
      <a href="#credit-calculator" className="promo-slider__promo-button button button--white">Рассчитать кредит</a>
    </PromoSliderItem>
  );
};

export default PromoCredit;
