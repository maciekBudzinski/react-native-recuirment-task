import React from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback } from 'react-native';
import { Text, Button, Icon, SwipeRow, View, H3, Card } from 'native-base';
import styled from 'styled-components';
import moment from 'moment';
import { DEVICE_WIDTH } from '../../config/constans';

const OPEN_VALUE = 75;

const Wrapper = styled(Card)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${DEVICE_WIDTH};
  padding: ${({ theme }) => theme.padding.large};
  margin: 0;
  border-left-width: 6;
  border-color: ${({ borderColor }) => borderColor};
`;

const SwipeWrapper = styled(SwipeRow)`
  padding: 0;
  margin: 0;
`;

const Details = styled(View)`
  height: 50px;
  justify-content: center;
`;

const Title = styled(H3)``;

const Subtitle = styled(Text)`
  opacity: 0.7;
`;

const Date = styled(Text)``;

const ShoppingListItem = ({ id, name, shop, color, dateCreated, onEditButtonPress, onDeleteButtonPress, onPress }) => (
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
        <Wrapper borderColor={color}>
          <Details>
            <Title>{name}</Title>
            <Subtitle>{shop}</Subtitle>
          </Details>
          <Date note>{moment(dateCreated).format('DD-MM-YY HH:mm')}</Date>
        </Wrapper>
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
  dateCreated: PropTypes.oneOfType([PropTypes.instanceOf(Object), PropTypes.string]).isRequired,
  onEditButtonPress: PropTypes.func.isRequired,
  onDeleteButtonPress: PropTypes.func.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default ShoppingListItem;
