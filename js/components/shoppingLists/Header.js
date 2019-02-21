import React from 'react';
import { Button, Icon, Right, Body, Left, Title } from 'native-base';
import PropTypes from 'prop-types';
import HeaderLayout from '../common/Header';

const Header = ({ title }) => (
  <HeaderLayout>
    <Left>
      <Button transparent>
        <Icon name="list" />
      </Button>
    </Left>
    <Body>
      <Title>{title}</Title>
    </Body>
    <Right />
  </HeaderLayout>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
