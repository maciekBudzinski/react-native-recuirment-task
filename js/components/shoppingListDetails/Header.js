import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Right, Body, Left, Title, Subtitle } from 'native-base';
import HeaderLayout from '../common/Header';

const Header = ({ isActive, name, shop, onBackButtonPress, onToggleListActive }) => (
  <HeaderLayout>
    <Left>
      <Button transparent onPress={onBackButtonPress}>
        <Icon name="arrow-back" />
      </Button>
    </Left>
    <Body>
      <Title>{name}</Title>
      <Subtitle>{shop}</Subtitle>
    </Body>
    <Right>
      <Button transparent onPress={onToggleListActive}>
        <Icon name={isActive ? 'lock' : 'unlock'} />
      </Button>
    </Right>
  </HeaderLayout>
);

Header.propTypes = {
  isActive: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  shop: PropTypes.string.isRequired,
  onBackButtonPress: PropTypes.func.isRequired,
  onToggleListActive: PropTypes.func.isRequired,
};

export default Header;
