import React from "react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {SLIDER_CHANGE_INTERVAL} from "../../const";
import PromoConfidence from "../promo-confidence/promo-confidence";
import PromoCredit from "../promo-credit/promo-credit";
import PromoDepartment from "../promo-department/promo-department";
import SliderButtonItem from "../slider-button-item/slider-button-item";

const PromoSlider = () => {
  return (
    <section className="page-content__promo-slider promo-slider">
      <Carousel
        className="promo-slider__list slider-buttons slider-buttons--promo-slider"
        interval={SLIDER_CHANGE_INTERVAL}
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        stopOnHover={true}
        autoPlay
        infiniteLoop
        dynamicHeight
        renderIndicator={(onClickHandler, isSelected, index) => (
          <SliderButtonItem
            onClickHandler={onClickHandler}
            isSelected={isSelected}
            index={index}
          />
        )}
      >
        <PromoCredit />
        <PromoConfidence />
        <PromoDepartment />
      </Carousel>
    </section>
  );
};

export default PromoSlider;
