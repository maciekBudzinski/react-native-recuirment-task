import React from 'react';
import { Icon } from 'native-base';
import PropTypes from 'prop-types';

const NavigationIcon = ({ iconName }) => <Icon name={iconName} />;

NavigationIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
};

export default NavigationIcon;
