import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getIsRequestFormOpened} from "../../store/selectors";
import CalculationForm from "../calculation-form/calculation-form";
import RequestForm from "../request-form/request-form";

const CreditCalculator = (props) => {
  const {isRequestFormOpened} = props;

  return (
    <section className="page-content__credit-calculator credit-calculator container">
      <h2 className="credit-calculator__title" id="credit-calculator">Кредитный калькулятор</h2>

      <CalculationForm />
      {isRequestFormOpened && <RequestForm />}
    </section>
  );
};

CreditCalculator.propTypes = {
  isRequestFormOpened: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isRequestFormOpened: getIsRequestFormOpened(state),
});

export default connect(mapStateToProps)(CreditCalculator);
