import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { ListItem, Text, Button, Icon, SwipeRow, Form, Input, Item } from 'native-base';

class ProductForm extends Component {
  inputRefs = {
    name: React.createRef(),
    amount: React.createRef(),
    unit: React.createRef(),
  };

  focusFiled = refName => {
    this.inputRefs[refName].current._root.focus();
  };

  render() {
    console.log(this.amountInputRef);
    const { formInputs, onTextInputChange, onSavePress, onCancelPress, clearInputs } = this.props;
    return (
      <Form>
        <Text>Add product</Text>
        <Item>
          <Input
            ref={this.inputRefs.name}
            returnKeyType="next"
            onSubmitEditing={() => this.focusFiled('amount')}
            blurOnSubmit={false}
            autoCorrect={false}
            value={formInputs.name}
            onChangeText={text => onTextInputChange('name', text)}
          />
        </Item>
        <Item>
          <Input
            ref={this.inputRefs.amount}
            returnKeyType="next"
            onSubmitEditing={() => this.focusFiled('unit')}
            blurOnSubmit={false}
            keyboardType="numeric"
            value={formInputs.amount}
            onChangeText={text => onTextInputChange('amount', text)}
          />
        </Item>
        <Item>
          <Input
            ref={this.inputRefs.unit}
            returnKeyType="done"
            onSubmitEditing={() => {
              onSavePress();
              this.focusFiled('name');
            }}
            blurOnSubmit={false}
            value={formInputs.unit}
            onChangeText={text => onTextInputChange('unit', text)}
          />
        </Item>
        <Button
          onPress={() => {
            onSavePress();
            this.focusFiled('name');
          }}
        >
          <Text>Save</Text>
        </Button>
        <Button
          onPress={() => {
            onCancelPress();
            Keyboard.dismiss();
          }}
        >
          <Text>Cancel</Text>
        </Button>
      </Form>
    );
  }
}

ProductForm.propTypes = {};

export default ProductForm;
