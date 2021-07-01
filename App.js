import React from "react";
import { NavigationContainer } from "@react-navigation/native"

import myTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer theme={myTheme}>
      <AppNavigator />
    </NavigationContainer>
  )
}
