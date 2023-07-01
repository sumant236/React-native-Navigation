import {NavigationContainer} from '@react-navigation/native';
import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppContextProvider, {AppContext} from './src/Context/AppContextProvider';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStacksComponent from './src/stacks/AuthStacks';
import Home from './src/pages/Home';
import DashboardDrawer from './src/stacks/DashboardStack';
import Tabs from './src/stacks/TabsStack';

const RootStack = createNativeStackNavigator();

const RootApplication = () => {
  const [state, dispatch] = useContext(AppContext);
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      {state.auth ? (
        <RootStack.Screen name="Home" component={Tabs} />
      ) : (
        <RootStack.Screen name="Auth" component={AuthStacksComponent} />
      )}
    </RootStack.Navigator>
  );
};

function App() {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <RootApplication />
      </NavigationContainer>
    </AppContextProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
