import { useEffect } from 'react';
import { View, Text, Center } from 'native-base';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/pokemon/slice';
import { RootState } from '../../redux/store';
import { PokemonScreenRouteProp } from '../../routes';
import { Loading } from '../../components/Loading';
import { Card } from './Card';
import { Image, TouchableOpacity } from 'react-native';
import { Alert } from '../../components/Alert';

export function InfoPokemon() {
    const dispatch = useDispatch();

    const { params } = useRoute<PokemonScreenRouteProp>();

    const url = params.url;

    const { loading, pokemonInfo, chosenPokemon } = useSelector(
        (state: RootState) => state.pokemons,
    );

    useEffect(() => {
        dispatch(actions.getPokemonByIdRequest(url));
    }, []);

    return (
        <View p={4}>
            {loading ? (
                <Loading />
            ) : (
                <>
                    {pokemonInfo ? (
                        <View>
                            <Card data={pokemonInfo} />
                            <TouchableOpacity
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                                onPress={() => {
                                    if (chosenPokemon.length < 6) {
                                        dispatch(
                                            actions.savePokemonOnList(
                                                pokemonInfo.name,
                                                url,
                                            ),
                                        );
                                        Alert({
                                            message:
                                                'Pokemon Adicionado com sucesso!!',
                                            color: 'success',
                                        });
                                    } else {
                                        Alert({
                                            message: `Voce já tem: ${chosenPokemon.length} pokémons`,
                                            color: 'error',
                                        });
                                    }
                                }}
                            >
                                <Image
                                    source={require('../../images/pokeBall.png')}
                                    style={{
                                        width: 120,
                                        height: 120,
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <Center>
                            <Text fontSize={34} color="red.600">
                                Pokemon não encontrado
                            </Text>
                        </Center>
                    )}
                </>
            )}
        </View>
    );
}
