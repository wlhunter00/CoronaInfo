import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, Button } from "react-native";

export default function LiveTracker({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Live Global Outbreak Trackers</Text>

      <Button
        title="Find Status"
        onPress={() => navigation.push("TrackerStatus", {})}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
