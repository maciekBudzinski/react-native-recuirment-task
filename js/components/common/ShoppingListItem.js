import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import { ListItem, Text, Button, Icon, SwipeRow, View, Right, Body, Left, H3, Card } from 'native-base';
import styled from 'styled-components';
import moment from 'moment';
import { DEVICE_WIDTH } from '../../config/constans';
import { formatDate } from '../../config/helpers';

const OPEN_VALUE = 75;

const ItemWrapper = styled(Card)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${DEVICE_WIDTH};
  padding: 12px;
  margin: 0px;
  border-left-width: 6px;
  border-color: ${({ borderColor }) => borderColor};
`;

const SwipeWrapper = styled(SwipeRow)`
  padding: 0px;
  margin: 0px;
`;

const ItemDetails = styled(View)`
  height: 50px;
  justify-content: center;
`;

const ItemTitle = styled(H3)``;

const ItemSubtitle = styled(Text)`
  opacity: 0.7;
`;

const ItemDate = styled(Text)``;

const ShoppingListItem = ({ id, name, color, lastEditedTime, onEditButtonPress, onDeleteButtonPress, onPress }) => (
  <SwipeWrapper
    leftOpenValue={OPEN_VALUE}
    rightOpenValue={-OPEN_VALUE}
    left={
      <Button success onPress={() => onEditButtonPress(id, name, color)}>
        <Icon active name="add" />
      </Button>
    }
    body={
      <ItemWrapper borderColor={color}>
        <TouchableHighlight onPress={() => onPress(id)}>
          <ItemDetails>
            <ItemTitle>{name}</ItemTitle>
            <ItemSubtitle>Shop name</ItemSubtitle>
          </ItemDetails>
        </TouchableHighlight>
        <ItemDate note>{moment(lastEditedTime).format('DD-MM-YY HH:mm')}</ItemDate>
      </ItemWrapper>
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
