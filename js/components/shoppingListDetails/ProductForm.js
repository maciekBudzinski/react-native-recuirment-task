import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { ListItem, Text, Button, Icon, SwipeRow, Input, Item, Label, View, Card } from 'native-base';
import styled from 'styled-components';
import InputWithStackedLabel from '../common/InputWithStackedLabel';

const Form = styled(Card)`
  padding: 6px;
`;

const InputsRow = styled(View)`
  flex-direction: row;
`;

const NameInput = styled(InputWithStackedLabel)`
  flex: 1;
  margin-right: 12px;
  margin-bottom: 6px;
`;

const AmountInput = styled(InputWithStackedLabel)`
  flex: 1;
  margin-right: 12px;
`;

const UnitInput = styled(InputWithStackedLabel)`
  flex: 1;
  margin-right: 12px;
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
    return (
      <Form>
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
          <AmountInput
            label="amount"
            inputRef={this.inputRefs.amount}
            value={formInputs.amount}
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() => this.focusFiled('unit')}
            onTextInputChange={text => onTextInputChange('amount', text)}
          />
          <UnitInput
            label="unit"
            inputRef={this.inputRefs.unit}
            value={formInputs.unit}
            returnKeyType="done"
            onSubmitEditing={this.saveTask}
            onTextInputChange={text => onTextInputChange('unit', text)}
          />
          <ButtonGroup>
            <StyledButton transparent onPress={this.cancelAdding}>
              <Icon name="undo" />
            </StyledButton>
            <StyledButton onPress={this.saveTask}>
              <Icon name="add" />
            </StyledButton>
          </ButtonGroup>
        </InputsRow>
      </Form>
    );
  }
}

ProductForm.propTypes = {};

export default ProductForm;
