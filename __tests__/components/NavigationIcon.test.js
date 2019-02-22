import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationIcon from '../../js/components/common/NavigationIcon';

test('NavigationItem test', () => {
  const props = { iconName: 'add' };
  const snapshot = renderer.create(<NavigationIcon {...props} />).toJSON;
  expect(snapshot).toMatchSnapshot();
});
