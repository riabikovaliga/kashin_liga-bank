import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getIsCreditRequestedPopupOpened, getIsLoginPopupOpened} from "../../store/selectors";
import BankDepartments from "../bank-departments/bank-departments";
import CreditCalculator from "../credit-calculator/credit-calculator";
import PromoSlider from "../promo-slider/promo-slider";
import Services from "../services/services";
import LoginPopup from "../login-popup/login-popup";
import CreditRequestedPopup from "../credit-requested-popup/credit-requested-popup";

const PageContent = (props) => {
  const {isLoginPopupOpened, isCreditRequestedPopupOpened} = props;

  return (
    <main className="page-content">
      <h1 className="visually-hidden">Сайт Лига Банка</h1>

      <PromoSlider />
      <Services />

      <CreditCalculator />

      <BankDepartments />

      {isLoginPopupOpened && <LoginPopup />}
      {isCreditRequestedPopupOpened && <CreditRequestedPopup />}
    </main>
  );
};

PageContent.propTypes = {
  isLoginPopupOpened: PropTypes.bool.isRequired,
  isCreditRequestedPopupOpened: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isLoginPopupOpened: getIsLoginPopupOpened(state),
  isCreditRequestedPopupOpened: getIsCreditRequestedPopupOpened(state),
});

export default connect(mapStateToProps)(PageContent);
