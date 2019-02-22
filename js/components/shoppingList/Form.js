import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Keyboard } from 'react-native';
import { View, Text, Button, Icon } from 'native-base';
import styled from 'styled-components/native';
import ColorPalette from 'react-native-color-palette';
import FormTitle from '../common/FormTitle';
import Input from '../common/Input';
import { LIST_COLORS } from '../../style/colors';

const Background = styled(View)`
  flex: 1;
  justify-content: center;
  background: ${({ theme }) => theme.colors.SEMI_TRANSPARENT};
`;

const Wrapper = styled(View)`
  background: ${({ theme }) => theme.colors.WHITE};
  align-self: center;
  width: 80%;
  padding: ${({ theme }) => theme.padding.large};
`;

const ButtonGroup = styled(View)`
  margin-top: 40;
  flex-direction: row;
`;

const AddButton = styled(Button)`
  flex: 1;
`;

const Form = ({
  isVisible,
  isEditing,
  color,
  formInputs,
  inputRefs,
  onTextInputChange,
  onRequestClose,
  onColorChange,
  focusInput,
  onAddButtonPress,
}) => (
  <Modal animationType="fade" transparent visible={isVisible} onRequestClose={onRequestClose}>
    <Background>
      <Wrapper>
        <FormTitle title="Add new list" iconName="list" />
        <Input
          label="name"
          inputRef={inputRefs.name}
          value={formInputs.name}
          returnKeyType="next"
          onSubmitEditing={() => focusInput('shop')}
          onTextInputChange={text => onTextInputChange('name', text)}
        />
        <Input
          label="shop"
          inputRef={inputRefs.shop}
          value={formInputs.shop}
          returnKeyType="done"
          onSubmitEditing={() => Keyboard.dismiss()}
          onTextInputChange={text => onTextInputChange('shop', text)}
        />
        <ColorPalette
          onChange={color => onColorChange(color)}
          colors={LIST_COLORS}
          value={color}
          title=""
          paletteStyles={{ flex: 1, backgroundColot: 'red' }}
          icon={<Icon name="checkmark" size={40} color="black" />}
        />
        <ButtonGroup>
          <AddButton full onPress={onAddButtonPress}>
            <Text>{isEditing ? 'Save' : 'Add'}</Text>
          </AddButton>
          <Button transparent onPress={onRequestClose}>
            <Text>Close</Text>
          </Button>
        </ButtonGroup>
      </Wrapper>
    </Background>
  </Modal>
);

Form.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  formInputs: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  inputRefs: PropTypes.shape({
    name: PropTypes.instanceOf(Object).isRequired,
    shop: PropTypes.instanceOf(Object).isRequired,
  }).isRequired,
  onTextInputChange: PropTypes.func.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  focusInput: PropTypes.func.isRequired,
  onAddButtonPress: PropTypes.func.isRequired,
  onColorChange: PropTypes.func.isRequired,
};

export default Form;
