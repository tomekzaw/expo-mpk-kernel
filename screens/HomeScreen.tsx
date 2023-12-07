import Animated, { FadeIn, LightSpeedInLeft } from "react-native-reanimated";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { Link } from "@react-navigation/native";
import React from "react";
import { getRoutes } from "../api/getRoutes";
import { useQuery } from "@tanstack/react-query";

export default function HomeScreen() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["routes"],
    queryFn: getRoutes,
  });

  if (isPending) {
    return <Text>Loading...</Text>;
  }

  const group = data.data.groups[0];

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      {data.data.groups.map((group: any) => {
        return <Group key={group.group_name} group={group} />;
      })}
    </ScrollView>
  );
}

function Group({ group }: any) {
  return (
    <>
      <Text style={styles.header}>{group.group_name}</Text>
      <View style={styles.wrapper}>
        {group.route_short_names.map((route, i) => {
          return <RouteBox key={route} routeName={route} index={i} />;
        })}
      </View>
    </>
  );
}

function RouteBox({ routeName, index }: any) {
  return (
    <Link to={{ screen: "Details", params: { routeName } }}>
      <Animated.View
        style={styles.routeBox}
        entering={FadeIn.delay(40 * index)}
      >
        <Text>{routeName}</Text>
      </Animated.View>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 30,
    paddingHorizontal: 20,
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
    paddingHorizontal: 20,
  },
});
