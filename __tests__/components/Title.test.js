import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native/dist/styled-components.native.cjs';
import FormTitle from '../../js/components/common/FormTitle';
import theme from '../../js/style/theme';
import 'jest-styled-components';

test('NavigationItem test', () => {
  const props = { iconName: 'add', title: 'Test title' };
  const snapshot = renderer.create(
    <ThemeProvider theme={theme}>
      <FormTitle {...props} />
    </ThemeProvider>
  ).toJSON;
  expect(snapshot).toMatchSnapshot();
});
