import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import ShoppingListsScreen from '../screens/ShoppingLists';
import ArchivedListsScreen from '../screens/ArchivedLists';
import ShoppingListDetailsScreen from '../screens/ShoppingListDetails';
import SettingsScreen from '../screens/Settings';

const StackNavigator = createStackNavigator(
  {
    Lists: {
      screen: ShoppingListsScreen,
    },
    Details: {
      screen: ShoppingListDetailsScreen,
    },
  },
  {
    // initialRouteName: 'Details',
    navigationOptions: {
      header: null,
    },
  }
);

const RootNavigator = createBottomTabNavigator({
  Lists: {
    screen: StackNavigator,
  },
  ArchivedLists: {
    screen: ArchivedListsScreen,
  },
  Settings: {
    screen: SettingsScreen,
  },
});

export default createAppContainer(RootNavigator);
