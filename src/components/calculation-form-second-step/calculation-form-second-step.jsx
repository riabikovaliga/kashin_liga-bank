import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import CalculationFormRange from "../calculation-form-range/calculation-form-range";
import {CreditGoal, CreditStep} from "../../const";
import NumericField from "../numeric-field/numeric-field";
import {calculatePercentInRange, formatDecimal, formatDecimalWithRubles, formatDecimalWithYears, packNumberInMinMax, calculateInitialFee} from "../../utils";
import {ReactComponent as IconMinus} from "../../assets/img/icon-minus.svg";
import {ReactComponent as IconPlus} from "../../assets/img/icon-plus.svg";
import {getCreditGoal, getCreditPeriod, getCreditPropertyCost, getInitialFee, getUseCasco, getUseLifeInsurance, getUseMaternityCapital} from "../../store/selectors";
import {
  setCascoUse,
  setCreditPeriod as setCreditPeriodAction,
  setCreditPropertyCost as setCreditPropertyCostAction,
  setInitialFee as setInitialFeeAction,
  setLifeInsuranceUse,
  setMaternityCapitalUse as setMaternityCapitalUseAction
} from "../../store/actions";

const getFactorsByCreditInfo = (creditInfo, creditGoal, factorData) => {
  creditInfo.factors.forEach((factor, i) => {
    factor.value = factorData[creditGoal][i].value;
    factor.setter = factorData[creditGoal][i].setter;
  });

  return (
    <>
      {creditInfo.factors.map((factor, i) => (
        <div key={`factor-${i}-${factor.name}`} className="calculation-form__checkbox-row">
          <input
            onChange={() => {
              factor.setter(!factor.value);
            }}
            value={factor.value}
            className="calculation-form__checkbox visually-hidden"
            type="checkbox"
            name={`calculation-form-${factor.name}`}
            id={`calculation-form-${factor.name}`}
            checked={factor.value}
          />
          <label
            className="calculation-form__checkbox-label"
            htmlFor={`calculation-form-${factor.name}`}
          >
            {factor.title}
          </label>
        </div>
      ))}
    </>
  );
};

const CalculationFormSecondStep = (props) => {
  const {
    creditGoal,
    creditPropertyCost,
    initialFee,
    creditPeriod,
    useMaternityCapital,
    useCasco,
    useLifeInsurance,
    setCreditPropertyCost,
    setCreditPeriod,
    setInitialFee,
    setUseMaternityCapital,
    setUseCasco,
    setUseLifeInsurance,
  } = props;

  const creditInfo = CreditStep[creditGoal];

  const factorData = {
    [CreditGoal.MORTGAGE]: [
      {value: useMaternityCapital, setter: setUseMaternityCapital},
    ],
    [CreditGoal.AUTO]: [
      {value: useCasco, setter: setUseCasco},
      {value: useLifeInsurance, setter: setUseLifeInsurance},
    ],
  };
  const FactorsContainer = getFactorsByCreditInfo(creditInfo, creditGoal, factorData);

  const initialFeePercent = calculatePercentInRange(initialFee, creditPropertyCost, creditInfo.initialFee.min, creditInfo.initialFee.rangeMax);

  const onPropertyCostChange = (evt) => {
    const propertyCost = Number(evt.target.value);
    const initialFeeValue = calculateInitialFee(propertyCost, creditInfo.initialFee.min);

    setCreditPropertyCost(propertyCost);
    setInitialFee(initialFeeValue);
  };

  const onInitialFeeChange = (evt) => {
    const newInitialFee = Number(evt.target.value);

    const initialFeeMinimum = creditPropertyCost * ((creditInfo.initialFee.min) / 100);

    setInitialFee(packNumberInMinMax(newInitialFee, initialFeeMinimum, creditPropertyCost));
  };

  const onInitialFeeRangeChange = ([percentValue]) => {
    const initialFeeValue = creditPropertyCost * (percentValue / 100);
    setInitialFee(initialFeeValue);
  };

  const onCreditPeriodChange = (evt) => {
    const newCreditPeriod = Number(evt.target.value);

    setCreditPeriod(packNumberInMinMax(newCreditPeriod, creditInfo.credit.minYears, creditInfo.credit.maxYears));
  };

  const onCreditPeriodRangeChange = ([newValue]) => {
    setCreditPeriod(newValue);
  };

  const onOperationMinusClick = () => {
    let newValue = creditPropertyCost - creditInfo.cost.step;
    newValue = newValue < creditInfo.cost.min ? creditInfo.cost.min : newValue;

    const initialFeeValue = calculateInitialFee(newValue, creditInfo.initialFee.min);

    setCreditPropertyCost(newValue);
    setInitialFee(initialFeeValue);
  };

  const onOperationPlusClick = () => {
    let newValue = creditPropertyCost + creditInfo.cost.step;
    newValue = newValue > creditInfo.cost.max ? creditInfo.cost.max : newValue;

    const initialFeeValue = calculateInitialFee(newValue, creditInfo.initialFee.min);
    setCreditPropertyCost(newValue);
    setInitialFee(initialFeeValue);
  };

  return (
    <fieldset className="calculation-form__step-field-area calculation-form__step-field-area--step-2">
      <legend className="calculation-form__step-legend">Шаг 2. Введите параметры кредита</legend>

      <div className="calculation-form__input-field-row">
        <label htmlFor="calculation-form-property-cost" className="calculation-form__label">{creditInfo.creditName}</label>
        <div className="calculation-form__input-with-operations">
          <NumericField
            name="calculation-form-property-cost"
            validate
            min={creditInfo.cost.min}
            max={creditInfo.cost.max}
            step={creditInfo.cost.step}
            convertCallback={formatDecimalWithRubles}
            onChange={onPropertyCostChange}
            value={creditPropertyCost}
          />

          <button onClick={onOperationMinusClick} className="calculation-form__operation-button calculation-form__operation-button--minus" type="button">
            <IconMinus className="calculation-form__operation-minus"/>
            <span className="visually-hidden">Уменьшить</span>
          </button>
          <button onClick={onOperationPlusClick} className="calculation-form__operation-button calculation-form__operation-button--plus" type="button">
            <IconPlus className="calculation-form__operation-plus"/>
            <span className="visually-hidden">Увеличить</span>
          </button>
        </div>
        <p className="calculation-form__field-description">От {formatDecimal(creditInfo.cost.min)} ​​&nbsp;до {formatDecimal(creditInfo.cost.max)} рублей</p>
      </div>

      <div className="calculation-form__input-field-row">
        <label htmlFor="calculation-form-initial-fee" className="calculation-form__label">Первоначальный взнос</label>

        <NumericField
          name="calculation-form-initial-fee"
          className="calculation-form__input--range"
          min={creditPropertyCost * (creditInfo.initialFee.min / 100)}
          step={creditPropertyCost * (creditInfo.initialFee.step / 100)}
          convertCallback={formatDecimalWithRubles}
          onChange={onInitialFeeChange}
          value={initialFee}
        />
        <CalculationFormRange
          onChange={onInitialFeeRangeChange}
          step={creditInfo.initialFee.step}
          min={creditInfo.initialFee.min}
          max={creditInfo.initialFee.rangeMax}
          values={[initialFeePercent]}
        />
        <div className="calculation-form__range-description">
          <span className="calculation-form__range-value">{creditInfo.initialFee.min}%</span>
        </div>
      </div>

      <div className="calculation-form__input-field-row">
        <label htmlFor="calculation-form-credit-time" className="calculation-form__label">Срок кредитования</label>
        <NumericField
          name="calculation-form-credit-time"
          className="calculation-form__input--range"
          min={creditInfo.credit.minYears}
          max={creditInfo.credit.maxYears}
          step={creditInfo.credit.step}
          convertCallback={formatDecimalWithYears}
          onChange={onCreditPeriodChange}
          value={creditPeriod}
        />

        <CalculationFormRange
          step={creditInfo.credit.step}
          min={creditInfo.credit.minYears}
          max={creditInfo.credit.maxYears}
          onChange={onCreditPeriodRangeChange}
          values={[creditPeriod]}
        />
        <div className="calculation-form__range-description">
          <span className="calculation-form__range-value">{formatDecimalWithYears(creditInfo.credit.minYears)}</span>
          <span className="calculation-form__range-value">{formatDecimalWithYears(creditInfo.credit.maxYears)}</span>
        </div>
      </div>

      {FactorsContainer}

    </fieldset>
  );
};

CalculationFormSecondStep.propTypes = {
  creditGoal: PropTypes.string,
  creditPropertyCost: PropTypes.number.isRequired,
  initialFee: PropTypes.number.isRequired,
  creditPeriod: PropTypes.number.isRequired,
  useMaternityCapital: PropTypes.bool,
  useCasco: PropTypes.bool,
  useLifeInsurance: PropTypes.bool,
  setCreditPropertyCost: PropTypes.func.isRequired,
  setInitialFee: PropTypes.func.isRequired,
  setCreditPeriod: PropTypes.func.isRequired,
  setUseMaternityCapital: PropTypes.func,
  setUseCasco: PropTypes.func,
  setUseLifeInsurance: PropTypes.func,
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
  setCreditPropertyCost(propertyCost) {
    dispatch(setCreditPropertyCostAction(propertyCost));
  },
  setInitialFee(initialFee) {
    dispatch(setInitialFeeAction(initialFee));
  },
  setCreditPeriod(creditPeriod) {
    dispatch(setCreditPeriodAction(creditPeriod));
  },
  setUseMaternityCapital(creditPeriod) {
    dispatch(setMaternityCapitalUseAction(creditPeriod));
  },
  setUseCasco(useCasco) {
    dispatch(setCascoUse(useCasco));
  },
  setUseLifeInsurance(useLifeInsurance) {
    dispatch(setLifeInsuranceUse(useLifeInsurance));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CalculationFormSecondStep);
