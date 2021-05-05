import React from "react";
import piggyBankImg from "../../assets/img/piggybank.png";
import piggyBankImgTablet from "../../assets/img/piggybank-tablet.png";
import piggyBankImgMobile from "../../assets/img/piggybank-mobile.png";

const DepositService = () => {

  return (
    <article className="services__service-block service-block service-block--service">
      <div className="service-block__description-column">
        <h3 className="service-block__title">Вклады Лига Банка – это выгодная инвестиция в свое будущее</h3>
        <ul className="service-block__features">
          <li className="service-block__features-item">Проценты по вкладам до 7%</li>
          <li className="service-block__features-item">Разнообразные условия</li>
          <li className="service-block__features-item">Возможность ежемесячной капитализации или вывод процентов на банковскую карту</li>
        </ul>
        <a href="#" className="service-block__more-button button">Узнать подробнее</a>
      </div>
      <div className="service-block__img-column">
        <picture>
          <source media="(max-width: 767px)" srcSet={piggyBankImgMobile} />
          <source media="(max-width: 1023px)" srcSet={piggyBankImgTablet} />
          <img className="service-block__image" src={piggyBankImg} alt="Копилка с возрастающими столбиками монет" width="440" height="290" />
        </picture>
      </div>
    </article>
  );
};

export default DepositService;
