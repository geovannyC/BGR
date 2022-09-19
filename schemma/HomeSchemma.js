import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { GeneralCard } from "../components/GeneralCard/GeneralCard";

export function HomeSchemma() {
  return (
    <View style={style.generalContainer}>
      <View style={style.cardsContainer}>
        <GeneralCard />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  generalContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    backgroundColor: "#f5f5f5"
  },
  cardsContainer: {
    marginTop: 24,
    marginLeft: 24,
    marginRight: 24,
    height: 685,
    width: 350,
    // width: 380,
  },
});
