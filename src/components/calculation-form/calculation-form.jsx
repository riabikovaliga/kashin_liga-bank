import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {setCreditGoal, setDefaultValues} from "../../store/actions";
import {getCreditGoal} from "../../store/selectors";
import CalculationFormOffers from "../calculation-form-offers/calculation-form-offers";
import CalculationFormSecondStep from "../calculation-form-second-step/calculation-form-second-step";
import SelectField from "../select-field/select-field";

const CalculationForm = (props) => {
  const {creditGoal, setCreditGoalAction} = props;

  const onCreditGoalChange = (option) => {
    setCreditGoalAction(option.value);
  };

  return (
    <form action="#" className="credit-calculator__calculation-form calculation-form">
      <div className="calculation-form__form-column-wrapper">
        <fieldset className="calculation-form__step-field-area calculation-form__step-field-area--step-1">
          <legend className="calculation-form__step-legend">Шаг 1. Цель кредита</legend>

          <div className="calculation-form__input-field-row">
            <label htmlFor="calculation-form-credit-goal" className="visually-hidden">Выберите цель кредита</label>
            <SelectField onChange={onCreditGoalChange} />
          </div>
        </fieldset>

        {creditGoal && <CalculationFormSecondStep />}
      </div>

      {creditGoal && <CalculationFormOffers/>}
    </form>
  );
};

CalculationForm.propTypes = {
  creditGoal: PropTypes.string,
  setCreditGoalAction: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  creditGoal: getCreditGoal(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCreditGoalAction(newCreditGoal) {
    dispatch(setCreditGoal(newCreditGoal));
    dispatch(setDefaultValues(newCreditGoal));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CalculationForm);
