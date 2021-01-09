import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../Screens/Home";
import { Necessities } from "../Screens/Necessities";
import { Personal } from "../Screens/Personal";
import { Entertainment } from "../Screens/Entertainment";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return <FontAwesome name="paw" size={size} color={color} />;
          } else if (route.name === "Necessities") {
            return (
              <FontAwesome5 name="toilet-paper" size={size} color={color} />
            );
          } else if (route.name === "Personal") {
            return <FontAwesome name="heart" size={size} color={color} />;
          } else if (route.name === "Entertainment") {
            return <FontAwesome5 name="utensils" size={size} color={color} />;
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Necessities" component={Necessities} />
      <Tab.Screen name="Personal" component={Personal} />
      <Tab.Screen name="Entertainment" component={Entertainment} />
    </Tab.Navigator>
  );
};

export { BottomTabNavigator };
