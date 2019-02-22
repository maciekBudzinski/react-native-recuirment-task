import React from 'react';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import ShoppingListsScreen from '../screens/ShoppingLists';
import ArchivedListsScreen from '../screens/ArchivedLists';
import ShoppingListDetailsScreen from '../screens/ShoppingListDetails';
import NavigationIcon from '../components/common/NavigationIcon';

const StackNavigator = createStackNavigator(
  {
    Lists: {
      screen: ShoppingListsScreen,
      navigationOptions: {
        header: null,
      },
    },
    Details: {
      screen: ShoppingListDetailsScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarVisible: navigation.state.index !== 1,
    }),
  }
);

const RootNavigator = createBottomTabNavigator({
  Lists: {
    screen: StackNavigator,
    navigationOptions: {
      title: 'Lists',
      tabBarIcon: () => <NavigationIcon iconName="list" />,
    },
  },
  ArchivedLists: {
    screen: ArchivedListsScreen,
    navigationOptions: {
      title: 'Archive',
      tabBarIcon: () => <NavigationIcon iconName="lock" />,
    },
  },
});

export default createAppContainer(RootNavigator);
