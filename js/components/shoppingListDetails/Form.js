import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, View, Card } from 'native-base';
import styled from 'styled-components/native';
import Input from '../common/Input';
import FormTitle from '../common/FormTitle';

const Wrapper = styled(Card)`
  background: ${({ theme }) => theme.colors.LIGHT_GRAY};
  padding: ${({ theme }) => theme.padding.medium};
`;

const InputsRow = styled(View)`
  flex-direction: row;
`;

const BaseInput = styled(Input)`
  flex: 1;
  margin-right: ${({ theme }) => theme.margin.large};
`;

const NameInput = styled(BaseInput)`
  margin-bottom: ${({ theme }) => theme.margin.medium};
`;

const ButtonGroup = styled(View)`
  flex-direction: row;
`;

const StyledButton = styled(Button)`
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 60px;
`;

const Form = ({ inputRefs, formInputs, focusFiled, onTextInputChange, onSavePress, onCancelPress }) => {
  const isNameEmpty = formInputs.name === '';
  return (
    <Wrapper>
      <FormTitle title="Add new item:" iconName="checkbox" />
      <InputsRow>
        <NameInput
          label="name"
          inputRef={inputRefs.name}
          value={formInputs.name}
          returnKeyType="next"
          onSubmitEditing={() => focusFiled('amount')}
          onTextInputChange={text => onTextInputChange('name', text)}
        />
      </InputsRow>
      <InputsRow>
        <BaseInput
          label="amount"
          inputRef={inputRefs.amount}
          value={formInputs.amount}
          keyboardType="numeric"
          returnKeyType="next"
          onSubmitEditing={() => focusFiled('unit')}
          onTextInputChange={text => onTextInputChange('amount', text)}
        />
        <BaseInput
          label="unit"
          inputRef={inputRefs.unit}
          value={formInputs.unit}
          returnKeyType="done"
          onSubmitEditing={isNameEmpty ? () => focusFiled('name') : onSavePress}
          onTextInputChange={text => onTextInputChange('unit', text)}
        />
        <ButtonGroup>
          <StyledButton transparent onPress={onCancelPress}>
            <Icon name="undo" />
          </StyledButton>
          <StyledButton disabled={isNameEmpty} onPress={onSavePress}>
            <Icon name="add" />
          </StyledButton>
        </ButtonGroup>
      </InputsRow>
    </Wrapper>
  );
};

Form.propTypes = {
  inputRefs: PropTypes.shape({
    name: PropTypes.instanceOf(Object).isRequired,
    amount: PropTypes.instanceOf(Object).isRequired,
    unit: PropTypes.instanceOf(Object).isRequired,
  }).isRequired,
  formInputs: PropTypes.shape({
    name: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired,
  }).isRequired,
  focusFiled: PropTypes.func.isRequired,
  onTextInputChange: PropTypes.func.isRequired,
  onSavePress: PropTypes.func.isRequired,
  onCancelPress: PropTypes.func.isRequired,
};

export default Form;
