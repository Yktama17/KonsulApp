// src/navigation/router.js
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen'; // Sesuaikan dengan path yang benar
import ProfileScreen from '../screens/ProfileScreen'; // Sesuaikan dengan path yang benar

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Profile: ProfileScreen,
});

export default TabNavigator;
