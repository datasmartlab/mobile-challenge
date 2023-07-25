import { View, Text, Image } from 'native-base';
import { useRoute } from '@react-navigation/native';
import { PokemonScreenRouteProp } from '../../routes';
import { SvgUri } from 'react-native-svg';

export function InfoPokemon() {
    const { params } = useRoute<PokemonScreenRouteProp>();
    const data = params.data;
    return (
        <View>
            <Text fontSize={30}>Nome: {data.name}</Text>
            <Text fontSize={30}>Altura: {data.height}</Text>
            <Text fontSize={30}>Peso: {data.weight}</Text>
            <Text fontSize={30}>
                Status:
                {data.stats.map((item) => {
                    return ' - ' + item.stat.name;
                })}
            </Text>
            <SvgUri
                width={200}
                height={200}
                uri={data.sprites.other.dream_world.front_default}
            />
            <Image
                width={200}
                height={200}
                src={data.sprites.other.home.front_default}
                alt="teste"
            />
        </View>
    );
}
