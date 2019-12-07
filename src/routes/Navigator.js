import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/FontAwesome5';

import Home from '../pages/Home';

const Navigator = createBottomTabNavigator({ 
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: <Icon name="home" size={24} color="#de6262" />
        }
    },
}, {
    tabBarOptions: {
        activeTintColor: '#de6262',
        inactiveTintColor: '#ffb88c',
    }
});

export default Navigator;