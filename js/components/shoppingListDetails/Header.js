import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Right, Body, Left, Title, Subtitle } from 'native-base';
import HeaderLayout from '../common/Header';

const Header = ({ title, onBackButtonPress }) => (
  <HeaderLayout>
    <Left>
      <Button transparent onPress={onBackButtonPress}>
        <Icon name="arrow-back" />
      </Button>
    </Left>
    <Body>
      <Title>{title}</Title>
      <Subtitle>subtitle</Subtitle>
    </Body>
    <Right>
      <Button transparent>
        <Icon name="lock" />
      </Button>
    </Right>
  </HeaderLayout>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onBackButtonPress: PropTypes.func.isRequired,
};

export default Header;
