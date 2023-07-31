import { Text, View, Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { PokemonScreenNavigationProp } from '../../routes';
export function Home() {
    const navigation = useNavigation<PokemonScreenNavigationProp>();

    return (
        <View flex={1} alignItems="center" justifyContent="center">
            <Button
                colorScheme="blue"
                width="80%"
                margin={50}
                onPress={() => {
                    navigation.navigate('pokemons');
                }}
            >
                <Text color="white" fontSize={32}>
                    Lista de pokemons
                </Text>
            </Button>
            <Button
                colorScheme="blue"
                width="80%"
                margin={50}
                onPress={() => {
                    navigation.navigate('capturePokemons');
                }}
            >
                <Text color="white" fontSize={32}>
                    Pokémons capturados
                </Text>
            </Button>
        </View>
    );
}
