import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { ListItem, Text, Button, Icon, SwipeRow } from 'native-base';

const OPEN_VALUE = 75;

const ProductItem = ({ id, name, amount, unit }) => (
  <Text>
    {name} {amount} {unit}
  </Text>
);

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  // lastEditedTime: PropTypes.instanceOf(Date).isRequired,
};

export default ProductItem;
