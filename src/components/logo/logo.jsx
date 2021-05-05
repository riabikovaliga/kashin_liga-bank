import React from "react";
import PropTypes from "prop-types";
import logoDesktop from "../../assets/img/logo.svg";
import logoTablet from "../../assets/img/logo-tablet.svg";
import logoMobile from "../../assets/img/logo-mobile.svg";

const Logo = (props) => {
  const {className} = props;

  return (
    <a className={`${className} logo`}>
      <picture className="logo__picture">
        <source media="(max-width: 767px)" srcSet={logoMobile} />
        <source media="(max-width: 1023px)" srcSet={logoTablet} />
        <img className="logo__image" src={logoDesktop} alt="Логотип сайта Лига Банк" width="149" height="25" />
      </picture>
    </a>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
