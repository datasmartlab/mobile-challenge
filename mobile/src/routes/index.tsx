import { NavigationContainer } from '@react-navigation/native';
import {
    NativeStackScreenProps,
    createNativeStackNavigator,
} from '@react-navigation/native-stack';
import ListPokemons from '../pages/ListPokemon';
import { InfoPokemon } from '../pages/InfoPokemon';
import { pokemonData } from '../redux/pokemon/reducers';

type RootStackParam = {
    pokemons: undefined;
    pokemon: { data: pokemonData };
};

type Props = NativeStackScreenProps<RootStackParam, 'pokemon'>;

export type PokemonScreenNavigationProp = Props['navigation'];

export type PokemonScreenRouteProp = Props['route'];

export default function Routes() {
    const Stack = createNativeStackNavigator<RootStackParam>();
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#AE0000',
                    },

                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 32,
                        color: '#ffffff',
                    },

                    headerTitleAlign: 'center',
                }}
            >
                <Stack.Screen
                    name="pokemons"
                    options={{ title: 'Lista de Pokémons' }}
                    component={ListPokemons}
                />
                <Stack.Screen
                    name="pokemon"
                    options={{ title: 'Pokémon' }}
                    component={InfoPokemon}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
