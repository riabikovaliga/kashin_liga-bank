import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {CreditGoal, CreditStep, INCOME_THRESHOLD_PERCENT} from "../../const";
import {getCreditGoal, getCreditPeriod, getCreditPropertyCost, getInitialFee, getUseCasco, getUseLifeInsurance, getUseMaternityCapital} from "../../store/selectors";
import CreditDeniedPopup from "../credit-denied-popup/credit-denied-popup";
import {calculateCreditCost, formatDecimalWithRubles} from "../../utils";
import {openRequestForm} from "../../store/actions";

const calculateMonthlyPayment = (creditCost, rate, years) => {
  const ratePerYear = (rate / 100) / 12;
  const months = years * 12;

  const monthlyPayment = creditCost * (ratePerYear + (ratePerYear / (Math.pow(1 + ratePerYear, months) - 1)));

  return monthlyPayment;
};

const calculateRequiredIncome = (monthlyPayment) => {
  return monthlyPayment / INCOME_THRESHOLD_PERCENT;
};

const CalculationFormOffers = (props) => {
  const {
    creditGoal,
    creditPropertyCost,
    initialFee,
    creditPeriod,
    useMaternityCapital,
    useCasco,
    useLifeInsurance,
    openRequestFormAction,
  } = props;

  const creditInfo = CreditStep[creditGoal];
  const initialFeePercent = initialFee / creditPropertyCost * 100;

  let creditRate;
  const creditPercentData = creditInfo.creditPercent;

  switch (creditGoal) {
    case CreditGoal.MORTGAGE:

      creditRate = initialFeePercent >= creditPercentData.valueThreshold
        ? creditPercentData.valueWhenMore
        : creditPercentData.valueWhenLess;
      break;

    case CreditGoal.AUTO:
      creditRate = creditPropertyCost >= creditPercentData.valueThreshold
        ? creditPercentData.valueWhenMore
        : creditPercentData.valueWhenLess;

      if (useCasco && useLifeInsurance) {
        creditRate = creditPercentData.cascoAndLifeInsuranceValue;
      } else if (useCasco || useLifeInsurance) {
        creditRate = creditPercentData.cascoOrLifeInsuranceValue;
      }
  }

  const creditCostData = {
    creditPropertyCost,
    initialFee,
    creditGoal,
    useMaternityCapital: creditGoal === CreditGoal.MORTGAGE && useMaternityCapital,
    maternityCapitalCostDown: creditInfo.maternityCapitalCostDown,
  };

  const creditCost = calculateCreditCost(creditCostData);


  if (creditCost < creditInfo.credit.min) {
    return (
      <CreditDeniedPopup
        creditName={creditInfo.creditDenialType}
        creditMinimum={creditInfo.credit.min}
      />
    );
  }

  const monthlyPayment = Math.round(calculateMonthlyPayment(creditCost, creditRate, creditPeriod));
  const requiredIncome = Math.round(calculateRequiredIncome(monthlyPayment));

  const onRequestButtonClick = (evt) => {
    evt.preventDefault();

    openRequestFormAction();
  };

  return (
    <div className="calculation-form__result">
      <h3 className="calculation-form__result-title">Наше предложение</h3>

      <dl className="calculation-form__offers">
        <div className="calculation-form__offer-item">
          <dt className="calculation-form__offer-title">{creditInfo.creditSumTitle}</dt>
          <dd className="calculation-form__offer-value">{formatDecimalWithRubles(creditCost)}</dd>
        </div>
        <div className="calculation-form__offer-item">
          <dt className="calculation-form__offer-title">Процентная ставка</dt>
          <dd className="calculation-form__offer-value">{creditRate}%</dd>
        </div>
        <div className="calculation-form__offer-item">
          <dt className="calculation-form__offer-title">Ежемесячный платеж</dt>
          <dd className="calculation-form__offer-value">{formatDecimalWithRubles(monthlyPayment)}</dd>
        </div>
        <div className="calculation-form__offer-item">
          <dt className="calculation-form__offer-title">Необходимый доход</dt>
          <dd className="calculation-form__offer-value">{formatDecimalWithRubles(requiredIncome)}</dd>
        </div>
      </dl>

      <a
        onClick={onRequestButtonClick}
        href="#"
        className="calculation-form__request-button button"
      >
        Оформить заявку
      </a>
    </div>
  );
};

CalculationFormOffers.propTypes = {
  creditGoal: PropTypes.string.isRequired,
  creditPropertyCost: PropTypes.number.isRequired,
  initialFee: PropTypes.number.isRequired,
  creditPeriod: PropTypes.number.isRequired,
  useMaternityCapital: PropTypes.bool,
  useCasco: PropTypes.bool,
  useLifeInsurance: PropTypes.bool,
  openRequestFormAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  creditGoal: getCreditGoal(state),
  creditPropertyCost: getCreditPropertyCost(state),
  initialFee: getInitialFee(state),
  creditPeriod: getCreditPeriod(state),
  useMaternityCapital: getUseMaternityCapital(state),
  useCasco: getUseCasco(state),
  useLifeInsurance: getUseLifeInsurance(state),
});

const mapDispatchToProps = (dispatch) => ({
  openRequestFormAction() {
    dispatch(openRequestForm());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CalculationFormOffers);
