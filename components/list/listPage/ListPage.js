import React from "react";
import { FlatList, Text, View } from "react-native";
import { styles } from "./style";

export function ListPage({ data }) {
  const Module = () => {
    if (data.length === 0) {
      return <Text>Loading</Text>;
    } else {
      return (
        <View style={styles.container}>
          <FlatList
            data={data.map((i) => i.title)}
            renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          />
        </View>
      );
    }
  };
  return <Module />;
}
