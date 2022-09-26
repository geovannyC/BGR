import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NavBar from "../../components/NavBar/NavBar";
import {SchemmaHome} from "../../schemma/HomeSchemma";

export const Home = () => {
  return (
    <View>
      <View style={styles.navBarContainer}>
        <NavBar>Nuevo Beneficiario</NavBar>
      </View>
      <View style={styles.contentContainer}><SchemmaHome /></View>
      <Text>Home</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  navBarContainer: {
    width: "100%",
    height: 87,
    elevation: 1,
  },
  contentContainer: {
    width: "100%",
    height: "80%",
    // height: calc("100%" - 241),
  },
});
