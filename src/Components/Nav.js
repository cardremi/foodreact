import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Main from '../Features/Main';
import DetailCard from '../Features/DetailCard';

const Stack = createStackNavigator();

//navigation
const Nav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'tomato'},
      }}>
      <Stack.Screen
        component={Main}
        name="List Product"
        options={{headerShown: true, headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        component={DetailCard}
        name="Detail Product"
        options={{headerShown: true, headerTitleAlign: 'center'}}
      />
    </Stack.Navigator>
  );
};
export default Nav;
