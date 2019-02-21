import React from 'react';
import PropTypes from 'prop-types';
import { Item, Label, Input } from 'native-base';
import styled from 'styled-components';

const StyledInput = styled(Input)`
  width: 100%;
`;

const InputWithStackedLabel = ({ label, inputRef, value, keyboardType, returnKeyType, onSubmitEditing, onTextInputChange, style }) => (
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

InputWithStackedLabel.propTypes = {
  label: PropTypes.string.isRequired,
  inputRef: PropTypes.instanceOf(Object).isRequired,
  value: PropTypes.string.isRequired,
  keyboardType: PropTypes.string,
  returnKeyType: PropTypes.string.isRequired,
  onSubmitEditing: PropTypes.func.isRequired,
  onTextInputChange: PropTypes.func.isRequired,
  style: PropTypes.instanceOf(Object),
};

InputWithStackedLabel.defaultProps = {
  keyboardType: 'default',
  style: {},
};

export default InputWithStackedLabel;
