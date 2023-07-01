import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../pages/Home';
import Profile from '../pages/Profile';

const DashboardStack = createDrawerNavigator();

function DashboardDrawer() {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen name="Home" component={Home} />
      <DashboardStack.Screen name="Profile" component={Profile} />
    </DashboardStack.Navigator>
  );
}

export default DashboardDrawer;
