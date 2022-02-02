import { useQuery } from "react-query";

async function fetchData() {
  const result = await fetch(
    `https://labs.bible.org/api/?passage=random&type=json`
  );
  const json = await result.json();
  return json;
}

export function getRandomVerse() {
  return useQuery(["RadomVerse"], fetchData);
}
