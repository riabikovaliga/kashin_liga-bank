import React, {useCallback} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {closeCreditRequestedPopup} from "../../store/actions";
import CloseButton from "../close-button/close-button";
import {createBlocklayerClickHandler, isEscKeyPressed} from "../../utils";
import {useKeyDown} from "../../hooks/use-key-down/use-key-down";

const CreditRequestedPopup = (props) => {
  const {closePopup} = props;

  const onBlockLayerClick = createBlocklayerClickHandler(closePopup);

  const onCloseButtonClick = (evt) => {
    evt.preventDefault();

    closePopup();
  };

  const onEscKeyDown = useCallback((evt) => {
    if (isEscKeyPressed(evt)) {
      closePopup();
    }
  }, [closePopup]);

  useKeyDown(onEscKeyDown);

  return (
    <section
      onClick={onBlockLayerClick}
      className="credit-requested-popup basic-popup"
    >
      <div className="credit-requested-popup__content-wrapper basic-popup__content-wrapper">
        <CloseButton
          onCloseButtonClick={onCloseButtonClick}
          className="credit-requested-popup__close-button"
        />

        <h2 className="credit-requested-popup__title basic-popup__title">Спасибо за обращение в наш банк.</h2>
        <p className="credit-requested-popup__description basic-popup__description">
          Наш менеджер скоро свяжется с вами по указанному номеру телефона.
        </p>
      </div>
    </section>
  );
};

CreditRequestedPopup.propTypes = {
  closePopup: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  closePopup() {
    dispatch(closeCreditRequestedPopup());
  },
});

export default connect(null, mapDispatchToProps)(CreditRequestedPopup);
