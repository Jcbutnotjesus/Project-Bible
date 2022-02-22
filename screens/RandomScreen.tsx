import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Button } from "react-native";

import { Verse } from "../components/Verse";
import { useRandomVerse } from "../hooks/RandomAPI";

const RandomScreen = () => {
  const { isLoading, isError, data, refetch } = useRandomVerse();

  if (isLoading) {
    return (
      <View>
        <Text style={styles.log}>Loading</Text>
      </View>
    );
  }
  if (isError) {
    return (
      <View>
        <Text style={styles.log}>Loading</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Verse data={data} />

      <Button title="Click here for random Verse" onPress={refetch} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
    justifyContent: "center",
    textAlignVertical: "center",
  },
  title: {
    fontSize: 32,
  },
  verse: {
    minHeight: 500,
    marginTop: 20,
  },
  log: {
    textAlignVertical: "center",
    textAlign: "center",
  },
});

export default RandomScreen;
