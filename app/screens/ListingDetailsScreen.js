import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";

function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 6,
  },
  title: {
    fontSize: 22,
    fontWeight: "500",
  },
});

export default ListingDetailsScreen;
