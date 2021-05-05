import React from "react";
import PropTypes from "prop-types";
import Select, {components} from "react-select";
import {CREDIT_OPTIONS, CREDIT_SELECT_PLACEHOLDER_TEXT, SELECT_STYLES} from "../../const";
import {ReactComponent as IconSelectDrop} from "../../assets/img/icon-select-drop.svg";


const DropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
    <IconSelectDrop />
  </components.DropdownIndicator>
);

const SelectField = (props) => {
  const {
    onChange,
  } = props;

  return (
    <Select
      className="select-field"
      classNamePrefix="select-field"
      onChange={onChange}
      components={{DropdownIndicator}}
      styles={SELECT_STYLES}
      options={CREDIT_OPTIONS}
      placeholder={CREDIT_SELECT_PLACEHOLDER_TEXT}
    />
  );
};

SelectField.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SelectField;
