import { StyleSheet, Text, Pressable, Image } from "react-native";
import React, { useState } from "react";

const Item = ({ itemData, openModal }) => {

  const [done, setDone] = useState(false)

  return (
    <Pressable
      style={styles.itemContainer}
      onLongPress={() => {
        openModal(itemData.item);
      }}
      onPress={() => setDone(!done)}
    >
      <Text style={styles.item}>{itemData.item.value}</Text>
      {done &&
        <Image
          style={styles.doneTick}
          source={require('../../../assets/doneTick1.png')}
        />}
    </Pressable>
  );
};

export default Item;

const styles = StyleSheet.create({
  itemContainer: {
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#588157",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  item: {
    color: "#fbfbfb",
    fontSize: 16,
    padding: 10,
  },
  doneTick: {
    width: 40,
    height:40,
    marginRight: 10
  }
});
