import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Text from "./Text";

const PickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.container}>{item.label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8
  }
})

export default PickerItem;