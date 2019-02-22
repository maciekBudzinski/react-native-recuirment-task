import React from 'react';
import PropTypes from 'prop-types';
import { ListItem as NBListItem, Text, Button, Icon, Right, CheckBox, Body, Left } from 'native-base';
import styled from 'styled-components/native';
import { COLORS } from '../../style/colors';

const Wrapper = styled(NBListItem)`
  opacity: ${({ checked }) => (checked ? 0.5 : 1)};
  margin-left: 0;
`;

const Info = styled(Body)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled(Text)`
  flex: 1;
`;

const Amount = styled(Text)``;

const DeleteButton = styled(Button)``;

const DeleteButtonContainer = styled(Right)`
  padding-right: 0;
`;

const ProductItem = ({ id, name, amount, unit, checked, onProductToggle, onDeletePress }) => (
  <Wrapper icon checked={checked}>
    <Left>
      <CheckBox onPress={() => onProductToggle(id)} checked={checked} color={COLORS.PRIMARY} />
    </Left>
    <Info>
      <Name>{name}</Name>
      <Amount>
        {amount} {unit}
      </Amount>
    </Info>
    <DeleteButtonContainer>
      <DeleteButton onPress={() => onDeletePress(id)} transparent>
        <Icon name="trash" />
      </DeleteButton>
    </DeleteButtonContainer>
  </Wrapper>
);

ProductItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  unit: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onProductToggle: PropTypes.func.isRequired,
  onDeletePress: PropTypes.func.isRequired,
};

export default ProductItem;
