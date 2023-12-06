import { StyleSheet, TextInput, View, Button, Dimensions, Text } from "react-native";
import React from "react";

const NewItemHeader = ({
  onChangeText,
  itemText,
  addItemToState,
  disabled
}) => {
  return (
    <View>
      <View style={styles.addItemInputContainer}>
        <TextInput
          placeholder="Agregue una tarea"
          style={styles.input}
          onChangeText={onChangeText}
          value={itemText}
        />
        <Button
          title="Agregar"
          onPress={addItemToState}
          color="#EF7F3F"
          disabled={disabled}
        />
      </View>
      {disabled &&  <Text style={styles.alert}> *Escriba la tarea aqui</Text> }
    </View>
  );
};

export default NewItemHeader;

const styles = StyleSheet.create({
  addItemInputContainer: {
    width: Dimensions.get('window').width,
    marginTop: 50,
    padding: 20,
    paddingBottom:5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: 250,
    color: '#1D300F',
    borderBottomColor: "#1D300F",
    borderBottomWidth: 1,
  },
  alert: {
    color: '#D92F21',
    marginLeft: 20,
  }
});
