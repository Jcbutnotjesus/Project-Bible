import React from "react";
import { StyleSheet } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

export const Verse = ({ bookName, chapter, verse, text }) => (
  <Card style={styles.card}>
    <Card.Content>
      <Title>{bookName}</Title>
      <Paragraph>{chapter}</Paragraph>
      <Paragraph>{verse}</Paragraph>
      <Paragraph>{text}</Paragraph>
    </Card.Content>
  </Card>
);
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