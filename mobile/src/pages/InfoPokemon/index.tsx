import { useEffect } from 'react';
import { View, Text, Center, Toast } from 'native-base';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/pokemon/slice';
import { RootState } from '../../redux/store';
import { PokemonScreenRouteProp } from '../../routes';
import { Loading } from '../../components/Loading';
import { Card } from './Card';
import { Image, TouchableOpacity } from 'react-native';

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
                                        Toast.show({
                                            render: () => {
                                                return (
                                                    <View
                                                        bg="success.500"
                                                        p={2}
                                                        rounded="md"
                                                        mb={5}
                                                    >
                                                        <Text
                                                            color="white"
                                                            fontSize={30}
                                                        >
                                                            Pokémon Adicionado
                                                            com sucesso
                                                        </Text>
                                                    </View>
                                                );
                                            },
                                        });
                                    } else {
                                        console.log(
                                            'Voce ja tem:' +
                                                chosenPokemon.length,
                                        );
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
                            <Text fontSize={34}>Pokemon não encontrado</Text>
                        </Center>
                    )}
                </>
            )}
        </View>
    );
}
