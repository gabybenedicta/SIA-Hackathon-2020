import React from 'react';
import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ServicesScreen from './screens/ServicesScreen';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import ScannerPage from "./screens/ScannerPage";

const Stack = createStackNavigator();

function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        {/* <Stack.Screen name="Services" component={ServicesScreen} /> */}
        <Stack.Screen name="Scan" component={ScannerPage} />
      </Stack.Navigator>
    </NavigationContainer>
    </ApplicationProvider>
  );
}

export default App;
