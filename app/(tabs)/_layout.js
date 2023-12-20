import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  
  return (
    <Tabs>
      <Tabs.Screen
        name="home/index"
        options={{
          headerTitle: "Home",
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="users/[id]"
        options={{
          headerTitle: "User Page",
          title: "Users",
        }}
      />
      <Tabs.Screen
        name="(weights)"
        options={{
          headerShown: false,
          title: "Weights",
        }}
      />
      <Tabs.Screen
        name="home/(drawer)"
        options={{
          headerShown: false,
          title: "Menu",
        }}
      />
    </Tabs>
  );
}
