import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View } from "react-native";

import React from "react";
import { getPositions } from "../api/getPositions";
import { useQuery } from "@tanstack/react-query";

export default function MapScreen() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["positions"],
    queryFn: getPositions,
    refetchInterval: 1000,
  });


  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 50.04,
          longitude: 19.96,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {!isPending &&
          !isError &&
          data.data.vehicles.map((vehicle: any) => (
            <Marker
              key={vehicle.key}
              coordinate={{
                latitude: vehicle.latitude,
                longitude: vehicle.longitude,
              }}
              title={`${vehicle.route_short_name} ${vehicle.trip_headsign}`}
            >
              <Text style={styles.text}>{vehicle.route_short_name}</Text>
            </Marker>
          ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  text: {
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
    textAlign: "center",
    backgroundColor: "blue",
    color: "white",
    fontWeight: "bold",
  },
});
