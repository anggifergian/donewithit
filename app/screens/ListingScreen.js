import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import Screen from "../components/Screen";
import Button from "../components/Button";
import Card from "../components/Card";
import Text from "../components/Text";

import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import useApi from "../hooks/useApi";

const ListingScreen = ({ navigation }) => {
  const getListingsApi = useApi(listingsApi.getListings)

  useEffect(() => {
    getListingsApi.request()
  }, [])

  return (
    <Screen style={styles.screen}>
      {getListingsApi.error && (
        <>
          <Text>Can not fetch data.</Text>
          <Button title="Retry" onPress={getListingsApi.request()} />
        </>
      )}
      <ActivityIndicator visible={getListingsApi.loading} />
      <FlatList
        data={getListingsApi.data}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({item}) =>
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
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