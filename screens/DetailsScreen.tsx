import { StyleSheet, Text, View } from "react-native";

import React from "react";

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Details</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  routeBox: {
    width: 32,
    height: 32,
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
});
