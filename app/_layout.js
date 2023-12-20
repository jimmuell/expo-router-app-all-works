import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
      name="(tabs)" 
      options={{headerShown: false}}
      />
    </Stack>
  );
}
// Initial stack layout before Tabs
//  <Stack>
//    <Stack.Screen
//      name="index"
//      options={{
//        headerTitle: "Home Page",
//        headerStyle: { backgroundColor: "#1eb7f4" },
//      }}
//    />
//    <Stack.Screen name="users/[id]" options={{ headerTitle: "User Page" }} />
//  </Stack>;