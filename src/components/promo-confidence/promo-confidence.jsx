import React from "react";
import PromoSliderItem from "../promo-slider-item/promo-slider-item";

const PromoConfidence = () => {
  return (
    <PromoSliderItem itemModifierClass="confidence">
      <h2 className="promo-slider__title">Лига Банк</h2>
      <p className="promo-slider__description">Ваша уверенность в завтрашнем дне</p>
    </PromoSliderItem>
  );
};

export default PromoConfidence;
