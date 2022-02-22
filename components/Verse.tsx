import React from "react";
import { StyleSheet } from "react-native";
import { Card, Title, Paragraph, Headline } from "react-native-paper";

interface Verse {
  bookname: string;
  chapter: string;
  verse: string;
  text: string;
}

export const Verse = ({ data }) => {
  const { bookname, chapter, verse, text } = data[0];

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title style={styles.title}>{bookname}</Title>
        <Headline style={styles.headline}>Chapter {chapter}</Headline>
        <Headline style={styles.headline}>
          Verse {JSON.stringify(verse)}
        </Headline>
        <Paragraph style={styles.para}>{JSON.stringify(text)}</Paragraph>
      </Card.Content>
    </Card>
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
    fontSize: 30,
    textAlign: "center",
    marginTop: 30,
    marginBottom: 40,
  },
  card: {
    margin: 20,
    height: 500,
  },
  para: {
    fontSize: 20,
    fontStyle: "italic",
    margin: 10,
    marginTop: 40,
  },
  headline: {
    margin: 20,
  },
});
