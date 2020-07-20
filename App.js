import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";

const titleHeader = "Guess a number";

export default function App() {
  return (
    <View style={styles.screen}>
      <StatusBar style="auto" />
      <Header title={titleHeader} />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
