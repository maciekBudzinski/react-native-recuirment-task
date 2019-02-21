import React from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback } from 'react-native';
import { Text, Button, Icon, SwipeRow, View, H3, Card } from 'native-base';
import styled from 'styled-components';
import moment from 'moment';
import { DEVICE_WIDTH } from '../../config/constans';

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

const ShoppingListItem = ({ id, name, shop, color, lastEditedTime, onEditButtonPress, onDeleteButtonPress, onPress }) => (
  <SwipeWrapper
    leftOpenValue={OPEN_VALUE}
    rightOpenValue={-OPEN_VALUE}
    left={
      <Button info onPress={() => onEditButtonPress(id, name, shop, color)}>
        <Icon active name="create" />
      </Button>
    }
    body={
      <TouchableWithoutFeedback onPress={() => onPress(id)}>
        <ItemWrapper borderColor={color}>
          <ItemDetails>
            <ItemTitle>{name}</ItemTitle>
            <ItemSubtitle>{shop}</ItemSubtitle>
          </ItemDetails>
          <ItemDate note>{moment(lastEditedTime).format('DD-MM-YY HH:mm')}</ItemDate>
        </ItemWrapper>
      </TouchableWithoutFeedback>
    }
    right={
      <Button danger onPress={() => onDeleteButtonPress(id)}>
        <Icon active name="trash" />
      </Button>
    }
  />
);

ShoppingListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  shop: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  lastEditedTime: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]).isRequired,
  onEditButtonPress: PropTypes.func.isRequired,
  onDeleteButtonPress: PropTypes.func.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default ShoppingListItem;
