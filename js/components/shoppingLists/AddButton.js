import React from 'react';
import PropTypes from 'prop-types';
import { Fab, Icon } from 'native-base';

const ActionButton = ({ onPress }) => (
  <Fab position="bottomRight" onPress={onPress}>
    <Icon name="add" />
  </Fab>
);

ActionButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default ActionButton;
