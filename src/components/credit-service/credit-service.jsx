import React from "react";
import carOnAPileOfCoinsImg from "../../assets/img/car-on-a-pile-of-coins.png";
import carOnAPileOfCoinsImgTablet from "../../assets/img/car-on-a-pile-of-coins-tablet.png";
import carOnAPileOfCoinsImgMobile from "../../assets/img/car-on-a-pile-of-coins-mobile.png";

const CreditService = () => {

  return (
    <article className="services__service-block service-block service-block--credit">
      <div className="service-block__description-column">
        <h3 className="service-block__title">Лига Банк выдает кредиты под любые цели</h3>
        <ul className="service-block__features">
          <li className="service-block__features-item">Ипотечный кредит</li>
          <li className="service-block__features-item">Автокредит</li>
          <li className="service-block__features-item">Потребительский кредит</li>
        </ul>
        <p className="service-block__description">Рассчитайте ежемесячный платеж<br/> и ставку по кредиту воспользовавшись нашим <a className="service-block__link" href="#">кредитным калькулятором</a></p>
      </div>
      <div className="service-block__img-column">
        <picture>
          <source media="(max-width: 767px)" srcSet={carOnAPileOfCoinsImgMobile} />
          <source media="(max-width: 1023px)" srcSet={carOnAPileOfCoinsImgTablet} />
          <img className="service-block__image" src={carOnAPileOfCoinsImg} alt="Автомобиль на стопке монет" width="440" height="290" />
        </picture>
      </div>
    </article>
  );
};

export default CreditService;
