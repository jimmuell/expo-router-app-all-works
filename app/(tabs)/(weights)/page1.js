import { View, Text, Button } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

export default function Page() {
  return (
    <View>
      <Text>Page 1</Text>
      <Button title="Go to Page 2" onPress={() => router.push("page2")} />
    </View>
  );
}