import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator';
import colors from '../config/colors';

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary
    }
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary
    }
  },
]

function MyAccountScreen(props) {
  return (
    <Screen>
      <ListItem
        title="Mosh Hamedani"
        subTitle="programmingwithmosh@gmail.com"
        image={require("../assets/mosh.jpg")}
      />

      <View style={styles.marginBottom}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({item}) =>
            <ListItem
              title={item.title}
              ImageComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />}
            />}
        />
      </View>

      <ListItem
        title="Logout"
        ImageComponent={
          <Icon name="logout" backgroundColor={colors.warning} />
        }
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  marginBottom: {
    marginVertical: 20,
  },
})

export default MyAccountScreen;