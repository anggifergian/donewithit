import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";

const listings = [
  { id: 1, title: "Red Jacket", price: "100", image: require("../assets/jacket.jpg") },
  { id: 2, title: "Blue T-shirt", price: "200", image: require("../assets/jacket.jpg") },
]

const ListingScreen = ({ navigation }) => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({item}) =>
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item )}
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