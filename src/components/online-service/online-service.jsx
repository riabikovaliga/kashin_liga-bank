import React from "react";
import ligaBankOnMobileImg from "../../assets/img/liga-bank-on-mobile.png";
import ligaBankOnMobileImgTablet from "../../assets/img/liga-bank-on-mobile-tablet.png";
import ligaBankOnMobileImgMobile from "../../assets/img/liga-bank-on-mobile-mobile.png";

const OnlineService = () => {

  return (
    <article className="services__service-block service-block service-block--mobile">
      <div className="service-block__description-column">
        <h3 className="service-block__title">Лига Банк — это огромное количество онлайн-сервисов для вашего удобства</h3>
        <ul className="service-block__features">
          <li className="service-block__features-item">Мобильный банк,<br/> который всегда под рукой</li>
          <li className="service-block__features-item">Приложение Лига-проездной позволит вам оплачивать билеты по всему миру</li>
        </ul>
        <a href="#" className="service-block__more-button button">Узнать подробнее</a>
      </div>
      <div className="service-block__img-column">
        <picture>
          <source media="(max-width: 767px)" srcSet={ligaBankOnMobileImgMobile} />
          <source media="(max-width: 1023px)" srcSet={ligaBankOnMobileImgTablet} />
          <img className="service-block__image" src={ligaBankOnMobileImg} alt="Приложение Лига-Банка на телефоне" width="440" height="290" />
        </picture>
      </div>
    </article>
  );
};

export default OnlineService;
