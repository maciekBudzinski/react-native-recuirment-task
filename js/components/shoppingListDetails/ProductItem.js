import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { ListItem, Text, Button, Icon, SwipeRow, Right, CheckBox, Body, Left } from 'native-base';

const OPEN_VALUE = 75;

const ProductItem = ({ id, name, amount, unit, checked, onProductToggle, onDeletePress }) => (
  <ListItem icon style={{ backgroundColor: 'red' }}>
    <Left style={{ backgroundColor: 'blue' }}>
      <CheckBox onPress={() => onProductToggle(id)} checked={checked} />
    </Left>
    <Body style={{ backgroundColor: 'yellow', width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <Text style={{ flex: 1 }}>{name}</Text>
      <Text>
        {amount} {unit}
      </Text>
    </Body>
    <Right style={{ backgroundColor: 'orange' }}>
      <Button onPress={() => onDeletePress(id)} transparent>
        <Icon name="trash" />
      </Button>
    </Right>
  </ListItem>
);

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  // lastEditedTime: PropTypes.instanceOf(Date).isRequired,
};

export default ProductItem;
