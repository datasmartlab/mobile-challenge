import { useState } from "react";
import { Text } from "react-native-paper";
import { useLocalSearchParams } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { Avatar } from "react-native-paper";
import { Link } from "expo-router";
import { ScrollView } from "react-native";
import {
  Container,
  CardInfos,
  HeaderCard,
  DescriptionCard,
  IconForBack,
} from "./style";
import { List } from "react-native-paper";
import { Card } from "react-native-paper";
import { LoadingIcon } from "@/components/Loading";
import { fetchCharactersDataForId } from "@/Controller/API";

export default function HerosInfos() {
  const { characterid, status } = useSelector(
    (state: any) => state.MarvelApiSlice
  );

  const [expanded, setExpanded] = useState(true);


  const { id } = useLocalSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCharactersDataForId({ id: id }));
  }, [dispatch]);

  return (
    <Container>
      <Link href="/" asChild>
        <IconForBack name="left" />
      </Link>

      {status === "loading" && (
        <LoadingIcon
          
        />
      )}
      {status === "failed" && <Text>Erro ao carregar os dados</Text>}
      {status === "succeeded" && characterid.status === "Ok" && (
        <Container>
          <Card
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#121214",
              height: 300,
            }}
          >
            <Avatar.Image
              size={200}
              source={{
                uri: `${characterid.data.results[0].thumbnail.path}.${characterid.data.results[0].thumbnail.extension}`,
              }}
            />
          </Card>
          <ScrollView>
            <CardInfos>
              <HeaderCard>{characterid.data.results[0].name}</HeaderCard>
              <DescriptionCard>
                {characterid.data.results[0].description
                  ? characterid.data.results[0].description
                  : "Secret Info"}
              </DescriptionCard>
              <List.Section >
                {characterid.data.results[0].comics.returned !== 0 && (
                  <List.Accordion
                    title="Comics"
                    
                    titleStyle={{ color: "whitesmoke" }}                  >
                    {characterid.data.results[0].comics.items.map(
                      (item: any, index: number) => (
                        <List.Item
                          key={index}
                          title={item.name}
                          titleStyle={{ color: "black"}}
                        />
                      )
                    )}
                  </List.Accordion>
                )}
              </List.Section>
              {characterid.data.results[0].stories.returned !== 0 && (
              <List.Section>
               
                  <List.Accordion
                    title="Stories"
                    titleStyle={{ color: "whitesmoke" }}
                  >
                    {characterid.data.results[0].stories.items.map(
                      (item: any, index: number) => (
                        <List.Item
                          key={index}
                          title={item.name}
                          titleStyle={{ color: "black" }}
                        />
                      )
                    )}
                  </List.Accordion>
              </List.Section>
                )}

              {characterid.data.results[0].events.returned !== 0 && (
                <List.Section>
                  <List.Accordion
                    title="Events"
                    titleStyle={{ color: "whitesmoke" }}
                  >
                    {characterid.data.results[0].events.items.map(
                      (item: any, index: number) => (
                        <List.Item
                          key={index}
                          title={item.name}
                          titleStyle={{ color: "black" }}
                        />
                      )
                    )}
                  </List.Accordion>
                </List.Section>
              )}
            </CardInfos>
          </ScrollView>
        </Container>
      )}
    </Container>
  );
}
