import React from "react";
import PromoSliderItem from "../promo-slider-item/promo-slider-item";

const PromoDepartment = () => {
  return (
    <PromoSliderItem itemModifierClass="department">
      <h2 className="promo-slider__title">Лига Банк</h2>
      <p className="promo-slider__description">Всегда рядом</p>
      <a href="#bank-departments" className="promo-slider__promo-button promo-slider__promo-button--department button">Найти отделение</a>
    </PromoSliderItem>
  );
};

export default PromoDepartment;
