import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PlantSelect from "../pages/PlantSelect";
import colors from "../styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import MyPlants from "../pages/MyPlants";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.green,
        tabBarInactiveTintColor: colors.heading,
        tabBarLabelPosition: "beside-icon",
        headerShown: false,
        tabBarStyle: {
          paddingVertical: 20,
          height: 88,
        },
      }}
    >
      <Tab.Screen
        name="Nova Planta"
        component={PlantSelect}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="add-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Minhas Planta"
        component={MyPlants}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
