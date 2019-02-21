import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Keyboard } from 'react-native';
import { View, Text, Button, Icon } from 'native-base';
import styled from 'styled-components';
import ColorPalette from 'react-native-color-palette';
import FormTitle from '../common/FormTitle';
import InputWithStackedLabel from '../common/InputWithStackedLabel';
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
  padding: 12px;
`;

const ButtonGroup = styled(View)`
  margin-top: 24px;
  flex-direction: row;
`;

const AddButton = styled(Button)`
  flex: 1;
`;

const ListForm = ({
  onRequestClose,
  isVisible,
  isEditing,
  inputRefs,
  color,
  focusInput,
  formInputs,
  onTextInputChange,
  onAddButtonPress,
  onColorChange,
}) => (
  <Modal animationType="fade" transparent visible={isVisible} onRequestClose={onRequestClose}>
    <Background>
      <Wrapper>
        <FormTitle title="Add new list" iconName="list" />
        <InputWithStackedLabel
          label="name"
          inputRef={inputRefs.name}
          value={formInputs.name}
          returnKeyType="next"
          onSubmitEditing={() => focusInput('shop')}
          onTextInputChange={text => onTextInputChange('name', text)}
        />
        <InputWithStackedLabel
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

ListForm.propTypes = {
  formInputs: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  onTextInputChange: PropTypes.func.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default ListForm;
