import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/FontAwesome5';

import Home from './pages/Home';

Home.navigationOptions = {
    tabBarIcon: <Icon name="home" size={24} color="#de6262" />
}

const Nav = createBottomTabNavigator({ 
    Home
}, {
    tabBarOptions: {
        activeTintColor: '#de6262',
        inactiveTintColor: '#ffb88c',
    }
});

export default createAppContainer(Nav);
