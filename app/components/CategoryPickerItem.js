import React from "react";
import { StyleSheet, View } from "react-native";

import Text from "./Text";
import Icon from "./Icon";

function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <Icon name={item.icon} backgroundColor={item.backgrounColor}></Icon>
      <Text style={styles.label}>{item.label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 1,
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
  },
  label: {
    marginTop: 5,
    textAlign: "center"
  }
})

export default CategoryPickerItem;