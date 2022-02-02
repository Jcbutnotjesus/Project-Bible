import React from "react";
import { SafeAreaView, StyleSheet, FlatList, Text } from "react-native";
import { Verse } from "../components/Verse";
import { getRandomVerse } from "../hooks/RandomAPI";

const RandomScreen = () => {
  const { isLoading, isError, data } = getRandomVerse();

  if (isLoading) {
    return <Text>Loading</Text>;
  }
  if (isError) {
    return <Text>Error</Text>;
  }

  const renderVerse = ({ item }) => (
    <Verse
      bookName={item.bookname}
      chapter={item.chapter}
      verse={item.verse}
      text={item.text}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data.results}
        renderItem={renderVerse}
        keyExtractor={(item) => item.id}
      />
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
  },
  title: {
    fontSize: 32,
  },
  card: {
    margin: 10,
  },
});

export default RandomScreen;
