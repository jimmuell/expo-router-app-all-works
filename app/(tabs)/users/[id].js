import { View, Text, Button } from "react-native";
import React from "react";
import { useLocalSearchParams, router } from "expo-router";

export default function Page() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>User Page - {id}</Text>
    </View>
  );
}
