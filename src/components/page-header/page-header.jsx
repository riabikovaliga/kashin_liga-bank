import React, {useState} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ReactComponent as IconLogin} from "../../assets/img/icon-login.svg";
import {ReactComponent as IconMenu} from "../../assets/img/icon-menu.svg";
import {ReactComponent as IconTopMenuClose} from "../../assets/img/icon-top-menu-close.svg";
import {openLoginPopup} from "../../store/actions";
import Logo from "../logo/logo";
import {useMobileMenuPreventScroll} from "../../hooks/use-mobile-menu-prevent-scroll/use-mobile-menu-prevent-scroll";

const PageHeader = (props) => {
  const {openLoginPopupAction} = props;

  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const onLoginClick = (evt) => {
    evt.preventDefault();
    openLoginPopupAction();
  };

  const onMenuButtonClick = () => {
    setIsMenuOpened((prevState) => !prevState);
  };

  const onCloseButtonClick = () => {
    setIsMenuOpened(false);
  };

  useMobileMenuPreventScroll(isMenuOpened);

  return (
    <header className="page-header">
      <nav className={`page-header__main-navigation main-navigation container ${isMenuOpened ? `main-navigation--opened` : ``}`}>
        <div className="main-navigation__top-menu-wrapper">
          <button
            onClick={onMenuButtonClick}
            className="main-navigation__menu-button"
            type="button"
          >
            <IconMenu className="main-navigation__menu-icon" />
            <span className="visually-hidden">Открыть меню</span>
          </button>

          <Logo className="main-navigation__logo" />

          <div className="main-navigation__toggle-menu-wrapper">
            <a
              onClick={onLoginClick}
              href="#"
              className="main-navigation__login main-navigation__login--togglable login login--always-short"
            >
              <IconLogin className="login__icon" />
              <span className="login__title">Войти в Интернет-банк</span>
            </a>

            <button
              onClick={onCloseButtonClick}
              className="main-navigation__close-menu"
            >
              <IconTopMenuClose className="main-navigation__close-menu-icon" />
              <span className="visually-hidden">Закрыть меню</span>
            </button>
          </div>
        </div>

        <div className="main-navigation__navigation-wrapper">
          <ul className="main-navigation__site-navigation site-navigation site-navigation--header">
            <li className="site-navigation__item">
              <a href="#" className="site-navigation__link">Услуги</a>
            </li>
            <li className="site-navigation__item">
              <a href="#" className="site-navigation__link">Рассчитать кредит</a>
            </li>
            <li className="site-navigation__item">
              <a href="#" className="site-navigation__link">Конвертер валют</a>
            </li>
            <li className="site-navigation__item">
              <a href="#" className="site-navigation__link">Контакты</a>
            </li>
          </ul>

          <a
            onClick={onLoginClick}
            href="#"
            className="main-navigation__login login login--with-text"
          >
            <IconLogin className="login__icon" />
            <span className="login__title">Войти в Интернет-банк</span>
          </a>
        </div>

      </nav>
    </header>
  );
};

PageHeader.propTypes = {
  openLoginPopupAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  openLoginPopupAction() {
    dispatch(openLoginPopup());
  },
});

export {PageHeader};
export default connect(null, mapDispatchToProps)(PageHeader);
