import { View, Text, StyleSheet } from "react-native";
import React from "react";

export const GeneralCard=({children})=> {
  return (
    <View style={styles.generalContainer}>
      <View style={styles.card}>{children}</View>
    </View>
  );
}
// export default <GeneralCard/>
const styles = StyleSheet.create({
  generalContainer: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  card: {
    width: "100%",
    borderRadius: 8,
    height: 130,
    backgroundColor: "#f5f5f5",
    shadowColor: "#004ACE",
    shadowOpacity: 0.9,
    elevation: 16,
  },
});
