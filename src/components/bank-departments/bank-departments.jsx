import React from "react";
import departmentsMapImg from "../../assets/img/deps-map-with-blips.jpg";
import departmentsMapImgTablet from "../../assets/img/deps-map-with-blips-tablet.jpg";
import departmentsMapImgMobile from "../../assets/img/deps-map-with-blips-mobile.jpg";
import BankDepartmentsMap from "../bank-departments-map.jsx/bank-departments-map";
import withYandexMap from "../../hocs/withYandexMap/with-yandex-map";

const BankDepartmentsMapWrapped = withYandexMap(BankDepartmentsMap);

const BankDepartments = () => {
  return (
    <section className="page-content__bank-departments bank-departments container">
      <h2 className="bank-departments__title" id="bank-departments">Отделения Лига Банка</h2>

      <div className="bank-departments__map-wrapper">
        <picture className="bank-departments__picture-container">
          <source media="(max-width: 767px)" srcSet={departmentsMapImgMobile} />
          <source media="(max-width: 1023px)" srcSet={departmentsMapImgTablet} />
          <img className="bank-departments__map-image" src={departmentsMapImg} alt="Расположение отделений Лига Банков" width="1170" height="462" />
        </picture>
        <BankDepartmentsMapWrapped />
      </div>
    </section>
  );
};

export default BankDepartments;
