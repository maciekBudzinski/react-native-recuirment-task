import React from 'react';
import PropTypes from 'prop-types';
import { Item, Label, Input as NBInput } from 'native-base';
import styled from 'styled-components';

const StyledInput = styled(NBInput)`
  width: 100%;
`;

const Input = ({ label, inputRef, value, keyboardType, returnKeyType, onSubmitEditing, onTextInputChange, style }) => (
  <Item stackedLabel style={style}>
    <Label>{label}</Label>
    <StyledInput
      ref={inputRef}
      value={value}
      autoCorrect={false}
      keyboardType={keyboardType}
      returnKeyType={returnKeyType}
      blurOnSubmit={false}
      onSubmitEditing={onSubmitEditing}
      onChangeText={onTextInputChange}
      autoCapitalize="none"
    />
  </Item>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  inputRef: PropTypes.instanceOf(Object).isRequired,
  value: PropTypes.string.isRequired,
  keyboardType: PropTypes.string,
  returnKeyType: PropTypes.string.isRequired,
  onSubmitEditing: PropTypes.func.isRequired,
  onTextInputChange: PropTypes.func.isRequired,
  style: PropTypes.instanceOf(Object),
};

Input.defaultProps = {
  keyboardType: 'default',
  style: {},
};

export default Input;
