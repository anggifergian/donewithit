import React from "react";
import { StyleSheet, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppCard from "./app/components/AppCard";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f8f4f4",
        padding: 20,
        paddingTop: 90,
      }}
    >
      <AppCard
        title="Red jacket for sale"
        subTitle="$100"
        image={require("./app/assets/jacket.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
