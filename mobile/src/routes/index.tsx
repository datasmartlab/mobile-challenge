import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListPokemons from '../../src/pages/ListPokemons';

export default function Routes() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#AE0000',
                    },
                    headerTintColor: '#ffffff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 30,
                    },
                    headerTitleAlign: 'center',
                }}
            >
                <Stack.Screen name="Pokémons" component={ListPokemons} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
