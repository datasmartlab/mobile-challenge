import { View, Text } from 'native-base';
import { useRoute } from '@react-navigation/native';
import { PokemonScreenRouteProp } from '../../routes';

export function InfoPokemon() {
    const { params } = useRoute<PokemonScreenRouteProp>();

    return (
        <View>
            <Text>teste</Text>
            <Text>{params.url ? params.url : 'não tem url'}</Text>
        </View>
    );
}
