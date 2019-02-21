import React from 'react';
import { Icon, Card, H3 } from 'native-base';
import styled from 'styled-components';

const TextWrapper = styled(Card)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 6px;
  background: ${({ theme }) => theme.colors.LIGHT_GRAY};
`;

const StyledIcon = styled(Icon)`
  font-size: 26px;
  padding-left: 6px;
`;

const ArchiveListInfo = () => (
  <TextWrapper>
    <H3>List is archived. To unlock press </H3>
    <StyledIcon name="unlock" />
  </TextWrapper>
);

export default ArchiveListInfo;
