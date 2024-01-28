import { Card, Text } from "react-native-paper";
import { Button } from "react-native";
import { A } from "@expo/html-elements";
import { ConvertDateEUAInBR } from "@/Controller/Utils/convertDateEUAInBR";
export const CardComics = ({ props }: any) => {
  return (
    <Card style={{ margin: 20, padding: 20 }}>
      <Card.Cover
        source={{ uri: `${props.thumbnail.path}.${props.thumbnail.extension}` }}
      />
      <Text style={{ marginVertical: 10 }} variant="titleLarge">
        {props.title}
      </Text>
      <Text variant="bodyMedium">Writter{props.description}</Text>
      <Text variant="bodySmall">
        Last Modify: {ConvertDateEUAInBR(props.modified)}
      </Text>
      <A
        href={`${props.urls[0].url}`}
        style={{
          color: "white",
          marginLeft: 0,
          marginTop: 10
        }}
      >
        See more
      </A>
    </Card>
  );
};
