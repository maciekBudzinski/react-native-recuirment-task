import React from 'react';
import { Header as NBHeader, Button, Icon, Right, Body, Left, Title } from 'native-base';
import PropTypes from 'prop-types';

const Header = ({ title }) => (
  <NBHeader>
    <Left>
      <Button transparent>
        <Icon name="list" />
      </Button>
    </Left>
    <Body>
      <Title>{title}</Title>
    </Body>
    <Right />
  </NBHeader>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
