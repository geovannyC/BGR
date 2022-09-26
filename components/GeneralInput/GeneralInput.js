import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";

export const GeneralInput = ({ value, handleChangue }) => {
  const [data, setData] = useState("");
  const handleChangueText = (e) => {
    handleChangue(e);
  };
  const SchemmaInput = () => {
    return (
      <View style={styles.InputContainer}>
        <TextInput
          // ref={inputRef}
          placeholder="ingresa"
          onChangeText={handleChangueText}
          value={value}
        />
      </View>
    );
  };
  return SchemmaInput()
};
const styles = StyleSheet.create({
  InputContainer: {
    width: "100%",
    height: 24,
    borderColor: "black",
    borderWidth: 2,

    // backgroundColor: "gray"
  },
});
