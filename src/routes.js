import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Navigator from './routes/Navigator';

import FriendCode from './pages/FriendCode';

const App = createSwitchNavigator({ 
    Navigator,
    FriendCode
});

export default createAppContainer(App);
