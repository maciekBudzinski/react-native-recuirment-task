import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import React from 'react';
import ShoppingListsScreen from '../screens/ShoppingLists';
import ArchivedListsScreen from '../screens/ArchivedLists';
import ShoppingListDetailsScreen from '../screens/ShoppingListDetails';
import SettingsScreen from '../screens/Settings';
import { NavigationIcon } from '../components/common/NavigationIcon';

const StackNavigator = createStackNavigator(
  {
    Details: {
      screen: ShoppingListDetailsScreen,
      navigationOptions: {
        header: null,
      },
    },
    Lists: {
      screen: ShoppingListsScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: 'Details',
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
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      title: 'Settings',
      tabBarIcon: () => <NavigationIcon iconName="settings" />,
    },
  },
});

export default createAppContainer(RootNavigator);
