import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Keyboard } from 'react-native';
import { Button, Icon, View, Card } from 'native-base';
import styled from 'styled-components';
import Input from '../common/Input';
import FormTitle from '../common/FormTitle';

const Form = styled(Card)`
  background: ${({ theme }) => theme.colors.LIGHT_GRAY};
  padding: 6px;
`;

const InputsRow = styled(View)`
  flex-direction: row;
`;

const BaseInput = styled(Input)`
  flex: 1;
  margin-right: 12px;
`;

const NameInput = styled(BaseInput)`
  margin-bottom: 6px;
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

class ProductForm extends Component {
  inputRefs = {
    name: React.createRef(),
    amount: React.createRef(),
    unit: React.createRef(),
  };

  focusFiled = refName => {
    this.inputRefs[refName].current._root.focus();
  };

  saveTask = () => {
    const { onSavePress } = this.props;

    onSavePress();
    this.focusFiled('name');
  };

  cancelAdding = () => {
    const { onCancelPress } = this.props;
    onCancelPress();
    Keyboard.dismiss();
  };

  render() {
    const { formInputs, onTextInputChange } = this.props;
    const isNameEmpty = formInputs.name === '';
    return (
      <Form>
        <FormTitle title="Add new item:" iconName="checkbox" />
        <InputsRow>
          <NameInput
            label="name"
            inputRef={this.inputRefs.name}
            value={formInputs.name}
            returnKeyType="next"
            onSubmitEditing={() => this.focusFiled('amount')}
            onTextInputChange={text => onTextInputChange('name', text)}
          />
        </InputsRow>
        <InputsRow>
          <BaseInput
            label="amount"
            inputRef={this.inputRefs.amount}
            value={formInputs.amount}
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() => this.focusFiled('unit')}
            onTextInputChange={text => onTextInputChange('amount', text)}
          />
          <BaseInput
            label="unit"
            inputRef={this.inputRefs.unit}
            value={formInputs.unit}
            returnKeyType="done"
            onSubmitEditing={isNameEmpty ? () => this.focusFiled('name') : this.saveTask}
            onTextInputChange={text => onTextInputChange('unit', text)}
          />
          <ButtonGroup>
            <StyledButton transparent onPress={this.cancelAdding}>
              <Icon name="undo" />
            </StyledButton>
            <StyledButton disabled={isNameEmpty} onPress={this.saveTask}>
              <Icon name="add" />
            </StyledButton>
          </ButtonGroup>
        </InputsRow>
      </Form>
    );
  }
}

ProductForm.propTypes = {
  formInputs: PropTypes.shape({
    name: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired,
  }).isRequired,
  onTextInputChange: PropTypes.func.isRequired,
  onSavePress: PropTypes.func.isRequired,
  onCancelPress: PropTypes.func.isRequired,
};

export default ProductForm;
