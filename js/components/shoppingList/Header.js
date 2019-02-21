import React from 'react';
import { Header as NBHeader, Button, Icon, Right, Body, Left, Title } from 'native-base';
import PropTypes from 'prop-types';

const Header = ({ isActive }) => (
  <NBHeader>
    <Left>
      <Button transparent>
        <Icon name={isActive ? 'list' : 'lock'} />
      </Button>
    </Left>
    <Body>
      <Title>{isActive ? 'Shopping lists' : 'Archived lists'}</Title>
    </Body>
    <Right />
  </NBHeader>
);

Header.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default Header;
