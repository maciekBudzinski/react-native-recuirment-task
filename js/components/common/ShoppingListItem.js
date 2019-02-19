import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Text, Button, Icon, SwipeRow } from 'native-base';

const OPEN_VALUE = 75;

const ShoppingListItem = ({ id, name, color, lastEditedTime, onEditButtonPress, onDeleteButtonPress }) => (
  <SwipeRow
    leftOpenValue={OPEN_VALUE}
    rightOpenValue={-OPEN_VALUE}
    left={
      <Button success onPress={() => onEditButtonPress(id, name, color)}>
        <Icon active name="add" />
      </Button>
    }
    body={
      <ListItem>
        <Text>
          {name} {color} {lastEditedTime.toString()}
        </Text>
      </ListItem>
    }
    right={
      <Button danger onPress={() => onDeleteButtonPress(id)}>
        <Icon active name="trash" />
      </Button>
    }
  />
);

ShoppingListItem.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  // lastEditedTime: PropTypes.instanceOf(Date).isRequired,
};

export default ShoppingListItem;
