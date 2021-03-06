import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../Screens/Home";
import { TransactionPage } from "./TransactionPage";
import { Necessities } from "../Screens/Necessities";
import { Personal } from "../Screens/Personal";
import { Entertainment } from "../Screens/Entertainment";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Home}
      />
        <Stack.Screen
            name="Necessities"
            options={{ headerShown: false }}
            component={Necessities}
        />
        <Stack.Screen
            name="Entertainment"
            options={{ headerShown: false }}
            component={Entertainment}
        />
        <Stack.Screen
            name="Personal"
            options={{ headerShown: false }}
            component={Personal}
        />
      <Stack.Screen
        name="TransactionPage"
        options={{ headerShown: true }}
        component={TransactionPage}
      />
    </Stack.Navigator>
  );
};

const NecessitiesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Necessities" component={Necessities} />
      <Stack.Screen
        name="TransactionPage"
        options={{ headerShown: true }}
        component={TransactionPage}
      />
    </Stack.Navigator>
  );
};

const PersonalStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Personal" component={Personal} />
      <Stack.Screen
        name="TransactionPage"
        options={{ headerShown: true }}
        component={TransactionPage}
      />
    </Stack.Navigator>
  );
};

const EntertainmentStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Entertainment" component={Entertainment} />
      <Stack.Screen
        name="TransactionPage"
        options={{ headerShown: true }}
        component={TransactionPage}
      />
    </Stack.Navigator>
  );
};

export {
  StackNavigator,
  NecessitiesStackNavigator,
  PersonalStackNavigator,
  EntertainmentStackNavigator,
};
