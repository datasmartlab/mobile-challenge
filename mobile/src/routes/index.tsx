import { NavigationContainer } from '@react-navigation/native';
import {
    NativeStackScreenProps,
    createNativeStackNavigator,
} from '@react-navigation/native-stack';
import ListPokemons from '../pages/ListPokemon';
import { InfoPokemon } from '../pages/InfoPokemon';
import { Home } from '../pages/Home';
import { ListCapturePokemons } from '../pages/ListCapturePokemons';

type RootStackParam = {
    home: undefined;
    pokemons: undefined;
    capturePokemons: undefined;
    pokemon: { url: string };
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
                initialRouteName="home"
            >
                <Stack.Screen
                    name="home"
                    options={{ title: 'Tela Incial' }}
                    component={Home}
                />
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

                <Stack.Screen
                    name="capturePokemons"
                    options={{ title: 'Pokémons Capturados' }}
                    component={ListCapturePokemons}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
