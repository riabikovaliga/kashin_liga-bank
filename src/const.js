import {isFieldNotEmpty, isFieldNotEmptyText, isPhoneFieldNeededLength} from "./utils";

export const CreditGoal = {
  MORTGAGE: `mortgage`,
  AUTO: `auto`,
};

export const CREDIT_OPTIONS = [
  {value: CreditGoal.MORTGAGE, label: `Ипотечное кредитование`},
  {value: CreditGoal.AUTO, label: `Автомобильное кредитование`}
];

export const CreditStep = {
  [CreditGoal.MORTGAGE]: {
    cost: {
      min: 1200000,
      max: 25000000,
      step: 100000,
    },
    initialFee: {
      min: 10,
      rangeMax: 100,
      step: 5,
    },
    credit: {
      min: 500000,
      minYears: 5,
      maxYears: 30,
      step: 1,
    },
    factors: [
      {title: `Использовать материнский капитал`, name: `use-maternal-capital`}
    ],
    maternityCapitalCostDown: 470000,
    creditName: `Стоимость недвижимости`,
    creditSumTitle: `Сумма ипотеки`,
    creditTypeName: `Ипотека`,
    defaults: {
      propertyCost: 2000000,
      initialFee: 200000,
      period: 5,
    },
    creditPercent: {
      valueThreshold: 15,
      valueWhenMore: 8.5,
      valueWhenLess: 9.4,
    },
    creditDenialType: `ипотечные кредиты`,
  },
  [CreditGoal.AUTO]: {
    cost: {
      min: 500000,
      max: 5000000,
      step: 50000,
    },
    initialFee: {
      min: 20,
      rangeMax: 100,
      step: 5,
    },
    credit: {
      min: 200000,
      minYears: 1,
      maxYears: 5,
      step: 1,
    },
    factors: [
      {title: `Оформить КАСКО в нашем банке`, name: `take-casco`},
      {title: `Оформить Страхование жизни в нашем банке`, name: `take-life-insurance`}
    ],
    creditName: `Стоимость автомобиля`,
    creditSumTitle: `Сумма автокредита`,
    creditTypeName: `Автокредит`,
    defaults: {
      propertyCost: 2000000,
      initialFee: 400000,
      period: 1,
    },
    creditDenialType: `автокредиты`,
    creditPercent: {
      valueThreshold: 2000000,
      valueWhenMore: 15,
      valueWhenLess: 16,
      cascoOrLifeInsuranceValue: 8.5,
      cascoAndLifeInsuranceValue: 3.5,
    }
  },
};

export const YearPostfix = {
  SINGULAR: `год`,
  LESS_FIVE: `года`,
  PLURAL: `лет`,
};

export const YearWordChangeLimits = {
  SINGULAR: 1,
  LESS_FIVE: 5,
};

export const Tab = {
  DEPOSITS: `DEPOSITS`,
  CREDITS: `CREDITS`,
  INSURANCE: `INSURANCE`,
  ONLINE_SERVICES: `ONLINE_SERVICES`,
};

export const CREDIT_SELECT_PLACEHOLDER_TEXT = `Выберите цель кредита`;
export const SLIDER_CHANGE_INTERVAL = 4000;
export const INCOME_THRESHOLD_PERCENT = 0.45;

export const LoginField = {
  LOGIN: `login-form-login`,
  PASSWORD: `login-form-password`,
};

export const RequestField = {
  NAME: `request-form-name`,
  PHONE: `request-form-phone`,
  EMAIL: `request-form-email`,
};

export const REQUEST_DEFAULT_NUMBER = 10;
export const PHONE_NUMBER_LENGTH = 11;
export const INVALID_NUMERIC_FIELD_MESSAGE = `Некорректное значение`;
export const ValidationMessage = {
  EMPTY: `Заполните поле`,
  TEXT: `Поле может содержать только буквы`,
  PHONE: `Введите корректный номер телефона`,
};

export const Validation = {
  EMPTY: {
    validationFunction: isFieldNotEmpty,
    message: ValidationMessage.EMPTY
  },
  TEXT: {
    validationFunction: isFieldNotEmptyText,
    message: ValidationMessage.TEXT
  },
  PHONE: {
    validationFunction: isPhoneFieldNeededLength,
    message: ValidationMessage.PHONE,
  },
};

export const TEXT_DATA_REGEXP = /^[a-zA-Zа-яА-Я ]*$/;
export const NUMERIC_CHAR_REGEXP = /\d/;


const MediaQuery = {
  MOBILE: `@media (max-width: 767px)`
};

const PseudoClass = {
  HOVER: `:hover`,
  FOCUS: `:focus`,
  ACTIVE: `:active`,
};

export const SELECT_STYLES = {
  control: (provided) => ({
    ...provided,
    border: `none`,
    marginBottom: `0`,
    cursor: `pointer`,
    [PseudoClass.HOVER]: {
      opacity: `0.7`,
    },
    [PseudoClass.FOCUS]: {
      opacity: `0.7`,
    },
    [PseudoClass.ACTIVE]: {
      opacity: `0.4`,
    },
  }),
  container: (provided) => ({
    ...provided,
    width: `100%`,
    border: `1px solid #1F1E25`,
    borderRadius: `4px`,
  }),
  valueContainer: (provided) => ({
    ...provided,
    paddingTop: `16px`,
    paddingRight: `19px`,
    paddingBottom: `12px`,
    paddingLeft: `23px`,
    lineHeight: `140%`,
    fontSize: `16px`,
    fontWeight: `500`,
    [MediaQuery.MOBILE]: {
      paddingLeft: `14px`,
      paddingRight: `14px`,
    }
  }),
  menu: (provided) => ({
    borderTopLeftRadius: `0`,
    borderTopRightRadius: `0`,
  }),
  menuList: (provided) => ({
    padding: `0`,
  }),
  option: (provided, state) => ({
    ...provided,
    paddingTop: `16px`,
    paddingRight: `19px`,
    paddingBottom: `12px`,
    paddingLeft: `23px`,
    lineHeight: `140%`,
    fontSize: `16px`,
    cursor: `pointer`,
    borderBottom: `1px solid #C1C2CA;`,
    borderBottomLeftRadius: state.value === state.options[state.options.length - 1].value ? `4px` : `0`,
    borderBottomRightRadius: state.value === state.options[state.options.length - 1].value ? `4px` : `0`,
    [MediaQuery.MOBILE]: {
      paddingLeft: `14px`,
      paddingRight: `14px`,
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: `#1F1E25`,
  }),
  singleValue: (provided) => ({
    ...provided,
    top: `51%`,
    margin: `0`,
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: `none`,
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    justifyContent: `center`,
    width: `63px`,
    [MediaQuery.MOBILE]: {
      width: `45px`,
    }
  }),
};

export const PREVENT_SCROLL_CLASS = `prevent-scroll`;
export const PREVENT_SCROLL_MOBILE_MENU_CLASS = `prevent-scroll-mobile-menu`;


export const MapCoordinate = {
  MOSCOW: [55.755814, 37.617635],
  SAINT_PETERSBURG: [59.938951, 30.315635],
  SARATOV: [51.533557, 46.034257],
  KAZAN: [55.796127, 49.106405],
  TYUMEN: [57.152985, 65.541227],
  OMSK: [54.989342, 73.368212],
  PERM: [58.010450, 56.229434],
  SURGUT: [61.254035, 73.396221],
  NOVOSIBIRSK: [55.030199, 82.920430],
  EKATERINBURG: [56.838011, 60.597465],
};

export const MAP_PLACEMARKS = [
  MapCoordinate.MOSCOW,
  MapCoordinate.SAINT_PETERSBURG,
  MapCoordinate.SARATOV,
  MapCoordinate.KAZAN,
  MapCoordinate.TYUMEN,
  MapCoordinate.OMSK,
  MapCoordinate.PERM,
  MapCoordinate.SURGUT,
  MapCoordinate.NOVOSIBIRSK,
];
