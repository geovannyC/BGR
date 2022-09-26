import React, { Children, memo, useCallback, useRef, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { GeneralCard } from "../components/GeneralCard/GeneralCard";
import { GeneralInput } from "../components/GeneralInput/GeneralInput";

const HomeSchemma = () => {
  const [data, setData] = useState({
    firstInput: "",
  });
  const childRef = useRef(null);
  const handleChangueInput = useCallback(
    (val) => {
      console.log(val);
      setData({ ...data, firstInput: val });
    },
    [data.firstInput]
  );

  const SchemmaHome = () => {
    return (
      <View style={styles.generalContainer}>
        <View style={styles.cardsContainer}>
          <GeneralCard>
            <GeneralInput
              handleChangue={handleChangueInput}
              value={data.firstInput}
            />
          </GeneralCard>
          <View style={styles.generalButton}></View>
        </View>
        <View style={styles.container}>
          <Button
            // Some properties given to Button
            title="Geeks"
            // onPress={handleChangueInput}
          />
        </View>
      </View>
    );
  };
  return SchemmaHome();
};
export const SchemmaHome = ()=>{
  return <HomeSchemma/>
}
// export default <HomeSchemma />;
const styles = StyleSheet.create({
  generalContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    backgroundColor: "#f5f5f5",
  },
  cardsContainer: {
    marginTop: 24,
    marginLeft: 24,
    marginRight: 24,
    height: 685,
    width: 350,
    // width: 380,
  },
  generalButton: {
    width: "100%",
    height: 15,
  },
  container: {
    position: "absolute",
    flex: 1,
    backgroundColor: "#71EC4C",
    alignItems: "center",
    justifyContent: "center",
  },
});
