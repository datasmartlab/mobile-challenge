import { Card,Text } from "react-native-paper"
import { Link } from "expo-router"
import { Pressable } from "react-native"
export const CardHero = ({props}:any) =>{

    return(
        <Link href={`/Heros/${props.id}`} asChild>
            <Pressable>
        <Card style={{margin: 20,padding: 20}}>
              <Card.Cover source={{ uri: `${props.thumbnail.path}.${props.thumbnail.extension}` }} />
              <Text style={{marginVertical: 10}} variant="titleLarge">{props.name}</Text>
              <Text variant="bodyMedium">{props.description}</Text>
        </Card>
        </Pressable>
        </Link>
    )
    
}