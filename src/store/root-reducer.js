import {combineReducers} from "redux";
import {popups} from "./popups/popups";
import {creditCalculator} from "./credit-calculator/credit-calculator";

export const NameSpace = {
  POPUPS: `POPUPS`,
  CREDIT_CALCULATOR: `CREDIT_CALCULATOR`,
};

export default combineReducers({
  [NameSpace.POPUPS]: popups,
  [NameSpace.CREDIT_CALCULATOR]: creditCalculator,
});
