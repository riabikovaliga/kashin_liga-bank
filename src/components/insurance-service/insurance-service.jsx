import React from "react";
import heartShapedLockImg from "../../assets/img/heart-shaped-lock.png";
import heartShapedLockImgTablet from "../../assets/img/heart-shaped-lock-tablet.png";
import heartShapedLockImgMobile from "../../assets/img/heart-shaped-lock-mobile.png";

const InsuranceService = () => {

  return (
    <article className="services__service-block service-block service-block--insurance">
      <div className="service-block__description-column">
        <h3 className="service-block__title">Лига Страхование — застрахуем все что захотите</h3>
        <ul className="service-block__features">
          <li className="service-block__features-item">Автомобильное страхование</li>
          <li className="service-block__features-item">Страхование жизни и здоровья</li>
          <li className="service-block__features-item">Страхование недвижимости</li>
        </ul>
        <a href="#" className="service-block__more-button button">Узнать подробнее</a>
      </div>
      <div className="service-block__img-column">
        <picture>
          <source media="(max-width: 767px)" srcSet={heartShapedLockImgMobile} />
          <source media="(max-width: 1023px)" srcSet={heartShapedLockImgTablet} />
          <img className="service-block__image" src={heartShapedLockImg} alt="Замок с иконкой сердечка на нем" width="440" height="290" />
        </picture>
      </div>
    </article>
  );
};

export default InsuranceService;
