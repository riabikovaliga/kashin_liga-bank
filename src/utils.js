import {CreditGoal, NUMERIC_CHAR_REGEXP, PHONE_NUMBER_LENGTH, TEXT_DATA_REGEXP, YearPostfix, YearWordChangeLimits} from "./const";

export const extend = (a, b) => Object.assign({}, a, b);

export const isEscKeyPressed = (evt) => (evt.key === `Escape` || evt.key === `Esc`);

const getTargetValue = (evt) => evt.target.value;
export const getNumericFieldValue = (valuesObject) => valuesObject.value;

export const createFieldChangeHandler = (fieldName, setter, valueGetter = getTargetValue) => {
  return (evt) => {
    let value = valueGetter(evt);

    window.localStorage.setItem(fieldName, value);
    setter(value);
  };
};

export const formatDecimal = (value) => {
  const formatter = new Intl.NumberFormat(`ru-RU`, {
    style: `decimal`,
  });

  return formatter.format(value);
};

export const formatDecimalWithRubles = (value) => {
  return `${formatDecimal(value)} рублей`;
};

export const formatDecimalWithYears = (value) => {
  let yearPostfix = YearPostfix.PLURAL;
  if (value === YearWordChangeLimits.SINGULAR) {
    yearPostfix = YearPostfix.SINGULAR;
  } else if (value > YearWordChangeLimits.SINGULAR && value < YearWordChangeLimits.LESS_FIVE) {
    yearPostfix = YearPostfix.LESS_FIVE;
  }

  return `${value} ${yearPostfix}`;
};

export const formatNumberToThousandsWithZeros = (value) => {
  let zerosCount = 0;
  if (value < 10) {
    zerosCount = 3;
  } else if (value < 100) {
    zerosCount = 2;
  } else if (value < 1000) {
    zerosCount = 1;
  }

  return `0`.repeat(zerosCount) + value;
};

export const isValueInRange = (value, min, max) => {
  let isInRange = value >= min;

  if (max) {
    isInRange = isInRange && value <= max;
  }

  return isInRange;
};

export const packNumberInMinMax = (value, min, max) => {
  let newValue = value < min ? min : value;
  newValue = newValue > max ? max : newValue;

  return newValue;
};

export const calculatePercentInRange = (initialFee, creditPropertyCost, minPercent, maxPercent) => {
  let initialFeePercent = (initialFee / creditPropertyCost) * 100;
  initialFeePercent = initialFeePercent > maxPercent ? maxPercent : initialFeePercent;
  initialFeePercent = initialFeePercent < minPercent ? minPercent : initialFeePercent;

  return initialFeePercent;
};

export const calculateCreditCost = ({creditPropertyCost, initialFee, creditGoal, useMaternityCapital, maternityCapitalCostDown}) => {
  let creditCost = creditPropertyCost - initialFee;
  if (creditGoal === CreditGoal.MORTGAGE && useMaternityCapital) {
    creditCost -= maternityCapitalCostDown;
  }

  return creditCost;
};

export const calculateInitialFee = (propertyCost, initialFeeMin) => {
  return propertyCost * ((initialFeeMin) / 100);
};

export const isFieldNotEmpty = (field) => field !== ``;
export const isFieldNotEmptyText = (field) => TEXT_DATA_REGEXP.test(field);
export const isPhoneFieldNeededLength = (field) => field.split(``).filter((char) => NUMERIC_CHAR_REGEXP.test(char)).length === PHONE_NUMBER_LENGTH;

export const validateForm = (fieldsToValidate, formRef, successCallback) => {
  fieldsToValidate.forEach((field) => {
    const fieldValue = field.ref.current.value;
    const validations = field.validations
      .map((validation) => validation.validationFunction(fieldValue) ? `` : validation.message)
      .filter((message) => message !== ``);

    const isValid = !validations.length;
    const validityMessage = isValid ? `` : validations[0];

    field.ref.current.setCustomValidity(validityMessage);
  });

  formRef.current.reportValidity();

  if (formRef.current.checkValidity()) {
    successCallback();
  }
};

export const clearStorage = (Field) => {
  const fields = Object.values(Field);
  fields.forEach((field) => {
    window.localStorage.removeItem(field);
  });
};


export const createBlocklayerClickHandler = (closeAction) => {
  return (evt) => {
    if (evt.currentTarget === evt.target) {
      closeAction();
    }
  };
};
