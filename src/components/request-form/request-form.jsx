import React, {createRef, useCallback, useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import NumberFormat from "react-number-format";
import {closeRequestForm, openCreditRequestedPopup, setRequestNumber} from "../../store/actions";
import {getCreditGoal, getCreditPeriod, getCreditPropertyCost, getInitialFee, getRequestNumber} from "../../store/selectors";
import {createFieldChangeHandler, formatDecimalWithRubles, formatDecimalWithYears, formatNumberToThousandsWithZeros, getNumericFieldValue, clearStorage, validateForm} from "../../utils";
import {CreditStep, RequestField, Validation} from "../../const";
import {useInputFocusOnOpen} from "../../hooks/use-input-focus-on-open/use-input-focus-on-open";
import {useLocalStorageFieldsSync} from "../../hooks/use-local-storage-fields-sync/use-local-storage-fields-sync";

const RequestForm = (props) => {
  const {
    requestNumber,
    setRequestNumberAction,
    creditGoal,
    creditPropertyCost,
    initialFee,
    creditPeriod,
    closeRequestFormAction,
    openCreditRequestedPopupAction,
  } = props;

  const formRef = createRef();
  const nameRef = createRef();
  const phoneRef = createRef();
  const emailRef = createRef();

  const [name, setName] = useState(``);
  const [phone, setPhone] = useState(``);
  const [email, setEmail] = useState(``);

  const FieldMap = {
    [RequestField.NAME]: {value: name, setter: setName},
    [RequestField.PHONE]: {value: phone, setter: setPhone},
    [RequestField.EMAIL]: {value: email, setter: setEmail},
  };

  const onNameChangeHandler = createFieldChangeHandler(RequestField.NAME, setName);
  const onPhoneChangeHandler = createFieldChangeHandler(RequestField.PHONE, setPhone, getNumericFieldValue);
  const onEmailChangeHandler = createFieldChangeHandler(RequestField.EMAIL, setEmail);

  const creditInfo = CreditStep[creditGoal];

  const onValidationSuccess = useCallback(() => {
    clearStorage(RequestField);
    closeRequestFormAction();
    setRequestNumberAction(requestNumber + 1);
    openCreditRequestedPopupAction();
  }, [requestNumber, RequestField]);

  const onSubmitButtonClick = (evt) => {
    evt.preventDefault();

    const fieldsToValidate = [
      {
        ref: nameRef,
        validations: [Validation.EMPTY, Validation.TEXT],
      },
      {
        ref: phoneRef,
        validations: [Validation.EMPTY, Validation.PHONE],
      },
      {
        ref: emailRef,
        validations: [Validation.EMPTY],
      },
    ];

    validateForm(fieldsToValidate, formRef, onValidationSuccess);
  };

  useInputFocusOnOpen(nameRef);
  useLocalStorageFieldsSync(FieldMap);

  return (
    <section
      className="credit-calculator__request-form request-form"
    >
      <h2 className="request-form__title">Шаг 3. Оформление заявки</h2>

      <dl className="request-form__data">
        <div className="request-form__data-item">
          <dt className="request-form__data-title">Номер заявки</dt>
          <dd className="request-form__data-value">№ {formatNumberToThousandsWithZeros(requestNumber)}</dd>
        </div>
        <div className="request-form__data-item">
          <dt className="request-form__data-title">Цель кредита</dt>
          <dd className="request-form__data-value">{creditInfo.creditTypeName}</dd>
        </div>
        <div className="request-form__data-item">
          <dt className="request-form__data-title">{creditInfo.creditName}</dt>
          <dd className="request-form__data-value">{formatDecimalWithRubles(creditPropertyCost)}</dd>
        </div>
        <div className="request-form__data-item">
          <dt className="request-form__data-title">Первоначальный взнос</dt>
          <dd className="request-form__data-value">{formatDecimalWithRubles(initialFee)}</dd>
        </div>
        <div className="request-form__data-item">
          <dt className="request-form__data-title">Срок кредитования</dt>
          <dd className="request-form__data-value">{formatDecimalWithYears(creditPeriod)}</dd>
        </div>
      </dl>

      <form ref={formRef} action="#" className="request-form__form">
        <div className="request-form__field-row">
          <label className="visually-hidden" htmlFor="request-form-name">ФИО</label>
          <input
            ref={nameRef}
            onChange={onNameChangeHandler}
            value={name}
            className="request-form__input"
            type="text"
            name="request-form-name"
            id="request-form-name"
            placeholder="ФИО"
            required
          />
        </div>

        <div className="request-form__field-row request-form__field-row--halves">
          <div className="request-form__half-field-wrapper">
            <label className="visually-hidden" htmlFor="request-form-phone">Телефон</label>
            {/* <input className="request-form__input" type="tel" name="request-form-phone" id="request-form-phone" placeholder="Телефон" /> */}
            <NumberFormat
              getInputRef={phoneRef}
              onValueChange={onPhoneChangeHandler}
              value={phone}
              className="request-form__input"
              name="request-form-phone"
              id="request-form-phone"
              format="+7 (###) ###-##-##"
              mask="_"
              placeholder="Телефон"
              required
            />
          </div>
          <div className="request-form__half-field-wrapper">
            <label className="visually-hidden" htmlFor="request-form-email">E-mail</label>
            <input
              ref={emailRef}
              onChange={onEmailChangeHandler}
              value={email}
              className="request-form__input"
              type="email"
              name="request-form-email"
              id="request-form-email"
              placeholder="E-mail"
              required
            />
          </div>
        </div>

        <button
          onClick={onSubmitButtonClick}
          className="request-form__send button"
          type="submit"
        >
          Отправить
        </button>
      </form>
    </section>
  );
};

RequestForm.propTypes = {
  requestNumber: PropTypes.number.isRequired,
  setRequestNumberAction: PropTypes.func.isRequired,
  creditGoal: PropTypes.string,
  creditPropertyCost: PropTypes.number.isRequired,
  initialFee: PropTypes.number.isRequired,
  creditPeriod: PropTypes.number.isRequired,
  closeRequestFormAction: PropTypes.func.isRequired,
  openCreditRequestedPopupAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  requestNumber: getRequestNumber(state),
  creditGoal: getCreditGoal(state),
  creditPropertyCost: getCreditPropertyCost(state),
  initialFee: getInitialFee(state),
  creditPeriod: getCreditPeriod(state),
});

const mapDispatchToProps = (dispatch) => ({
  closeRequestFormAction() {
    dispatch(closeRequestForm());
  },
  setRequestNumberAction(requestNumber) {
    dispatch(setRequestNumber(requestNumber));
  },
  openCreditRequestedPopupAction() {
    dispatch(openCreditRequestedPopup());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RequestForm);
