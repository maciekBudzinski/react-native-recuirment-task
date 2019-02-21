import React from 'react';
import { Button, Icon, Right, Body, Left, Title } from 'native-base';
import HeaderLayout from '../common/Header';

const Header = () => (
  <HeaderLayout>
    <Left>
      <Button transparent>
        <Icon name="list" />
      </Button>
    </Left>
    <Body>
      <Title>Shopping lists</Title>
    </Body>
    <Right />
  </HeaderLayout>
);

export default Header;
