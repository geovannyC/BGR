import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function NavBar({ children }) {
  return (
    <View style={styles.generalContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.textStyle}>{children}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  generalContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#f5f5f5",
    shadowColor: '#004ACE',
    shadowOpacity: 0.9,
    elevation: 16,
  },
  titleContainer: {
    display: "flex",
    width: "100%",
    height: "100%",
    textAlign: "center",
    marginTop: 37,
    // justifyContent: "center",
    // alignContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 14,
    color: "#004ace",
    // fontFamily: "Montserrat"
  },
});
