import { View, Text, Button } from "react-native";
import React from "react";
import { router } from "expo-router";

export default function Page() {
  return (
    <View>
      <Text>Weight Page</Text>
      <Button title="Go to Page 1" onPress={() => router.push("page1")} />
      <Button title="Go to Page 2" onPress={() => router.push("page2")} />
    </View>
  );
}
