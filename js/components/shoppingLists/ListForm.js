import React from 'react';
import PropTypes from 'prop-types';
import { Modal, TouchableHighlight } from 'react-native';
import { Fab, Icon, View, Text, Button, Input, Item, Label } from 'native-base';

const ListForm = ({ onRequestClose, isVisible, isEditing, formInputs, onTextInputChange, onAddButtonPress }) => (
  <Modal animationType="slide" transparent={false} visible={isVisible} onRequestClose={onRequestClose}>
    <View style={{ marginTop: 22 }}>
      <View>
        <Text>Add new list</Text>
        <Item stackedLabel>
          <Label>List name:</Label>
          <Input value={formInputs.name} onChangeText={text => onTextInputChange('name', text)} />
        </Item>
        <Button onPress={onAddButtonPress}>
          <Text>{isEditing ? 'Save' : 'Add'}</Text>
        </Button>
        <Button onPress={onRequestClose}>
          <Text>Close</Text>
        </Button>
      </View>
    </View>
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
