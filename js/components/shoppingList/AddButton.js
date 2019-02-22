import React from 'react';
import PropTypes from 'prop-types';
import { Fab, Icon } from 'native-base';
import styled from 'styled-components/native';

const StyledFab = styled(Fab)`
  background-color: ${({ theme }) => theme.colors.PRIMARY};
`;

const ActionButton = ({ onPress }) => (
  <StyledFab position="bottomRight" onPress={onPress}>
    <Icon name="add" />
  </StyledFab>
);

ActionButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default ActionButton;
