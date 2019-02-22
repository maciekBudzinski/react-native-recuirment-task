import React from 'react';
import { Icon, Card, H3 } from 'native-base';
import styled from 'styled-components';

const TextWrapper = styled(Card)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.padding.medium};
  background: ${({ theme }) => theme.colors.LIGHT_GRAY};
`;

const StyledIcon = styled(Icon)`
  font-size: 26px;
  padding-left: ${({ theme }) => theme.padding.medium};
`;

const ArchiveListInfo = () => (
  <TextWrapper>
    <H3>List is archived. To unlock press </H3>
    <StyledIcon name="unlock" />
  </TextWrapper>
);

export default ArchiveListInfo;
