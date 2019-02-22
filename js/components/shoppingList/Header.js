import React from 'react';
import { Header as NBHeader, Button, Icon, Right, Body, Left, Title } from 'native-base';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FilterIcon = styled(Icon)`
  padding-left: 6px;
`;

const Header = ({ isActive, isSortByNewest, onFilterButtonPress }) => (
  <NBHeader>
    <Left>
      <Button transparent>
        <Icon name={isActive ? 'list' : 'lock'} />
      </Button>
    </Left>
    <Body>
      <Title>{isActive ? 'Shopping lists' : 'Archived lists'}</Title>
    </Body>
    <Right>
      <Button transparent onPress={onFilterButtonPress}>
        <Icon name="calendar" />
        <FilterIcon name={isSortByNewest ? 'arrow-up' : 'arrow-down'} />
      </Button>
    </Right>
  </NBHeader>
);

Header.propTypes = {
  isActive: PropTypes.bool.isRequired,
  isSortByNewest: PropTypes.bool.isRequired,
  onFilterButtonPress: PropTypes.func.isRequired,
};

export default Header;
