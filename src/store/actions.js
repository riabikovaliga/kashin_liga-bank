export const ActionType = {
  OPEN_LOGIN_POPUP: `OPEN_LOGIN_POPUP`,
  CLOSE_LOGIN_POPUP: `CLOSE_LOGIN_POPUP`,
  OPEN_REQUEST_FORM: `OPEN_REQUEST_FORM`,
  CLOSE_REQUEST_FORM: `CLOSE_REQUEST_FORM`,
  SET_REQUEST_NUMBER: `SET_REQUEST_NUMBER`,
  OPEN_CREDIT_REQUESTED_POPUP: `OPEN_CREDIT_REQUESTED_POPUP`,
  CLOSE_CREDIT_REQUESTED_POPUP: `CLOSE_CREDIT_REQUESTED_POPUP`,
  SET_CREDIT_GOAL: `SET_CREDIT_GOAL`,
  SET_CREDIT_PROPERTY_COST: `SET_CREDIT_PROPERTY_COST`,
  SET_INITIAL_FEE: `SET_INITIAL_FEE`,
  SET_CREDIT_PERIOD: `SET_CREDIT_PERIOD`,
  SET_DEFAULT_VALUES: `SET_DEFAULT_VALUES`,
  SET_MATERNITY_CAPITAL_USE: `SET_MATERNITY_CAPITAL_USE`,
  SET_CASCO_USE: `SET_CASCO_USE`,
  SET_LIFE_INSURANCE_USE: `SET_LIFE_INSURANCE_USE`,
};

export const openLoginPopup = () => ({
  type: ActionType.OPEN_LOGIN_POPUP,
});

export const closeLoginPopup = () => ({
  type: ActionType.CLOSE_LOGIN_POPUP,
});

export const openRequestForm = () => ({
  type: ActionType.OPEN_REQUEST_FORM,
});

export const closeRequestForm = () => ({
  type: ActionType.CLOSE_REQUEST_FORM,
});

export const setRequestNumber = (requestNumber) => ({
  type: ActionType.SET_REQUEST_NUMBER,
  payload: requestNumber,
});

export const openCreditRequestedPopup = () => ({
  type: ActionType.OPEN_CREDIT_REQUESTED_POPUP,
});

export const closeCreditRequestedPopup = () => ({
  type: ActionType.CLOSE_CREDIT_REQUESTED_POPUP,
});


export const setCreditGoal = (creditGoal) => ({
  type: ActionType.SET_CREDIT_GOAL,
  payload: creditGoal,
});

export const setCreditPropertyCost = (propertyCost) => ({
  type: ActionType.SET_CREDIT_PROPERTY_COST,
  payload: propertyCost,
});

export const setInitialFee = (initialFee) => ({
  type: ActionType.SET_INITIAL_FEE,
  payload: initialFee,
});

export const setCreditPeriod = (creditPeriod) => ({
  type: ActionType.SET_CREDIT_PERIOD,
  payload: creditPeriod,
});

export const setDefaultValues = (creditGoal) => ({
  type: ActionType.SET_DEFAULT_VALUES,
  payload: creditGoal,
});

export const setMaternityCapitalUse = (useMaternityCapital) => ({
  type: ActionType.SET_MATERNITY_CAPITAL_USE,
  payload: useMaternityCapital,
});

export const setCascoUse = (useCasco) => ({
  type: ActionType.SET_CASCO_USE,
  payload: useCasco,
});

export const setLifeInsuranceUse = (useLifeInsurance) => ({
  type: ActionType.SET_LIFE_INSURANCE_USE,
  payload: useLifeInsurance,
});
