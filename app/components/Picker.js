import React, { useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import Text from "./Text";
import Picker from "./PickerItem";
import Screen from "./Screen";

const AppPicker = ({
  icon,
  items,
  numberOfColumns = 1,
  onSelectItem,
  PickerItemComponent = Picker,
  placeholder,
  selectedItem,
  width = "100%"
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon} />}
          {selectedItem ? (
            <Text style={styles.text}>{selectedItem.label}</Text>
          ) : (
            <Text style={styles.placeholder}>{placeholder}</Text>
          )}
          <MaterialCommunityIcons name="chevron-down" size={20} color={colors.medium} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen style={{paddingHorizontal: 20}}>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <View style={styles.containerList}>
            <FlatList
              data={items}
              keyExtractor={item => item.value.toString()}
              numColumns={numberOfColumns}
              renderItem={({item}) =>
                <PickerItemComponent
                  item={item}
                  onPress={() => {
                    setModalVisible(false);
                    onSelectItem(item);
                  }}
                />}
            />
          </View>
        </Screen>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    marginVertical: 10,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  containerList: {
    alignItems: "center"
  },
  icon: {
    marginRight: 12,
  },
  placeholder: {
    color: colors.medium,
    flex: 1,
  },
  text: {
    color: colors.dark,
    flex: 1,
  },
})

export default AppPicker;