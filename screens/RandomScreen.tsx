import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Button } from "react-native";

import { Verse } from "../components/Verse";
import { useRandomVerse } from "../hooks/RandomAPI";

const RandomScreen = () => {
  const { isLoading, isError, data } = useRandomVerse();

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
      <Verse
        bookName={data.bookname}
        chapter={data.chapter}
        verse={data.verse}
        text={data.text}
      />

      <Button title="Click her for random Verse" onPress={useRandomVerse} />
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
  },
  title: {
    fontSize: 32,
  },
  card: {
    margin: 10,
  },
  log: {
    textAlignVertical: "center",
    textAlign: "center",
  },
});

export default RandomScreen;
