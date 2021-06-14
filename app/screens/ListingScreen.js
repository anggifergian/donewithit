import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import AppCard from "../components/AppCard";
import colors from "../config/colors";

const listings = [
  { id: 1, title: "Red Jacket", subtitle: "100", image: require("../assets/jacket.jpg") },
  { id: 2, title: "Blue T-shirt", subtitle: "200", image: require("../assets/jacket.jpg") },
]

const ListingScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({item}) =>
          <AppCard
            title={item.title}
            subTitle={"$" + item.subtitle}
            image={item.image}
          />
        }
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light
  }
})

export default ListingScreen;