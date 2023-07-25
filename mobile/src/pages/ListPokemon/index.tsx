import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SvgUri } from 'react-native-svg';
import { View, Text, Box } from 'native-base';
import { TouchableOpacity } from 'react-native';
import {
    PanGestureHandler,
    GestureHandlerRootView,
    RectButton,
    FlatList,
    State,
} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { PokemonScreenNavigationProp } from '../../routes';
import { actions } from '../../redux/pokemon/slice';
import { RootState } from '../../redux/store';

function ListPokemons() {
    const navigation = useNavigation<PokemonScreenNavigationProp>();
    const dispatch = useDispatch();
    const { getPokemonsRequest } = actions;

    const { data, loading, pagination } = useSelector(
        (state: RootState) => state.pokemons,
    );
    const [offset, setOffset] = useState(pagination.offset);
    const [limit] = useState(pagination.limit);

    function handleSwipe(translationX: number) {
        if (translationX < 100 && offset) {
            setOffset(offset + limit);
        }
        if (translationX > 100 && offset != 1) {
            setOffset(offset - limit);
        }
    }

    useEffect(() => {
        dispatch(getPokemonsRequest(offset, limit));
    }, [dispatch, getPokemonsRequest, offset, limit]);

    return (
        <View paddingX={2}>
            {loading ? (
                <Text>Carrendo...</Text>
            ) : (
                <View>
                    {data.length ? (
                        <FlatList
                            onEndReached={() => {}}
                            onEndReachedThreshold={0.5}
                            showsVerticalScrollIndicator={true}
                            data={data}
                            renderItem={({ item }) => {
                                return (
                                    <View flex={1} key={item.name}>
                                        <TouchableOpacity
                                            style={{
                                                marginVertical: 5,
                                            }}
                                            onPress={() => {
                                                navigation.navigate('pokemon', {
                                                    data: item,
                                                });
                                            }}
                                        >
                                            <Box
                                                display="flex"
                                                flexDirection="row"
                                                bg="gray.200"
                                                alignItems="flex-start"
                                                borderRadius={8}
                                            >
                                                <SvgUri
                                                    width="30%"
                                                    height={128}
                                                    uri={
                                                        item.sprites.other
                                                            .dream_world
                                                            .front_default
                                                    }
                                                />
                                                <Box
                                                    display="flex"
                                                    justifyContent="center"
                                                    alignItems="center"
                                                    height="100%"
                                                    width="70%"
                                                >
                                                    <Text fontSize={26}>
                                                        {item.name}
                                                    </Text>
                                                </Box>
                                            </Box>
                                        </TouchableOpacity>
                                    </View>
                                );
                            }}
                        />
                    ) : (
                        <Text fontSize={40} textAlign="center" height="100%">
                            Sem pokémons
                        </Text>
                    )}
                </View>
            )}
        </View>
    );
}

export default ListPokemons;
