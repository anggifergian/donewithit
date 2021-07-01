import React from "react";
import { Image, StyleSheet, View } from "react-native";

import Text from "../components/Text";
import { ListItem } from "../components/lists";
import colors from "../config/colors";

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <View style={{backgroundColor: "white", flex: 1}}>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>${listing.price}</Text>

        <View style={styles.userContainer}>
          <ListItem
            title="Anggi Fergian"
            subTitle="5 listings"
            image={require("../assets/mosh.jpg")}
          />
        </View>
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
  userContainer: {
    marginVertical: 20,
  },
});

export default ListingDetailsScreen;
