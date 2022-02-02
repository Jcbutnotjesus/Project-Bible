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
  const { bookname, chapter, verse, text } = data[0]
  console.log("🚀 ~ file: Verse.tsx ~ line 14 ~ Verse ~ data", data)


  return(

  <Card style={styles.card}>
    <Card.Content>
        <Title style={styles.title}>{bookname}</Title>
        <Headline>Chapter</Headline>
      <Paragraph>{chapter}</Paragraph>
        <Headline>Verse</Headline>
        <Paragraph>{JSON.stringify(verse)}</Paragraph>
      <Paragraph>{JSON.stringify(text)}</Paragraph>
    </Card.Content>
  </Card>
)};

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
    textAlign: "center",
    margin: "10px",
  },
  card: {
    margin: 10,
  },
});
