import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../pages/Home';
import Contact from '../pages/Contact';

const TabsStack = createBottomTabNavigator();

function Tabs() {
  return (
    <TabsStack.Navigator>
      <TabsStack.Screen name="Home" component={Home} />
      <TabsStack.Screen name="Contact" component={Contact} />
    </TabsStack.Navigator>
  );
}

export default Tabs