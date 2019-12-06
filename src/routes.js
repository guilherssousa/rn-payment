import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from './pages/Home';

const Nav = createBottomTabNavigator({ 
    Home
});

export default createAppContainer(Nav);
