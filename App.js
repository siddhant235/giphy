import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { GiphyNavigator } from "./navigation/app.navigation";
import store from "./store/index";

export default function App() {
  return (
    <Provider store={store}>
      <GiphyNavigator />
    </Provider>
  );
}
