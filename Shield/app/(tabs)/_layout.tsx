import React from "react";
import { Entypo, FontAwesome6 } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import Home from "./index";
import Comics from "./Comics";
export default function TabLayout() {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{}}>
      <Tab.Screen
        name="Heros"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="mask" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Comics"
        component={Comics}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="book-open-reader" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
