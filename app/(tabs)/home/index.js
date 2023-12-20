import { View, Text, Button } from "react-native";
import React from "react";
import { Link, router } from "expo-router";

export default function HomePage() {
  return (
    <View>
      <Link href="/users/1">Go To User 1</Link>
      <Button title="Go to User 1" onPress={() => router.push("/users/1")} />
      <Button title="Go to User 2" onPress={() => router.push({
        pathname: "/users/[id]",
        params: {
          id: 2
        }
      })} />
    </View>
  );
}
