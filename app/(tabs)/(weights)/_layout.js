import { View, Text } from 'react-native'
import React from 'react'
import {Stack} from 'expo-router'

export default function _layout() {
  return (
  <Stack>
    <Stack.Screen
      name="index"
      options={{
        headerTitle: "Weights",
        title: "Weights",
      }}
    />
    <Stack.Screen
      name="page1"
      options={{
        headerTitle: "Page 1",
        title: "Page 1",
      }}
    />
    <Stack.Screen
      name="page2"
      options={{
        headerTitle: "Page 2",
        title: "Page 2",
      }}
    />
  </Stack>
  )
}