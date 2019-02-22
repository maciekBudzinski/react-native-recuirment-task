import React from 'react';
import PropTypes from 'prop-types';
import { Icon, View, H3 } from 'native-base';
import styled from 'styled-components';

const Wrapper = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const TitleIcon = styled(Icon)`
  font-size: 22;
  padding-right: ${({ theme }) => theme.padding.medium};
`;

const FormTitle = ({ iconName, title }) => (
  <Wrapper>
    <TitleIcon name={iconName} />
    <H3>{title}</H3>
  </Wrapper>
);

FormTitle.propTypes = {
  iconName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default FormTitle;
