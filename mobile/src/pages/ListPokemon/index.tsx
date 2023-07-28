import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SvgUri } from 'react-native-svg';
import { View, Text, Box, FlatList, Image } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PokemonScreenNavigationProp } from '../../routes';
import { actions } from '../../redux/pokemon/slice';
import { RootState } from '../../redux/store';
import { Loading } from '../../components/Loading';
// import {FlashList} from '@shopify/flash-list'

function ListPokemons() {
    const navigation = useNavigation<PokemonScreenNavigationProp>();
    const dispatch = useDispatch();
    const { getPokemonsRequest } = actions;

    const { data, loading, pagination } = useSelector(
        (state: RootState) => state.pokemons,
    );

    const [offset, setOffset] = useState(pagination.offset);
    const [limit] = useState(pagination.limit);

    useEffect(() => {
        dispatch(getPokemonsRequest(offset, limit));
    }, [dispatch, getPokemonsRequest, offset, limit]);

    //Animation

    return (
        <View paddingX={2}>
            {loading ? <Loading /> : null}
            {data.length ? (
                <FlatList
                    initialNumToRender={20}
                    onEndReached={() => {
                        if (!loading) {
                            setOffset(offset + limit);
                        }
                    }}
                    onEndReachedThreshold={0.5}
                    showsVerticalScrollIndicator={true}
                    data={data}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => {
                        return (
                            <View flex={1} key={item.name}>
                                <TouchableOpacity
                                    style={{
                                        marginVertical: 10,
                                        height: 128,
                                    }}
                                    onPress={() => {
                                        navigation.navigate('pokemon', {
                                            url: item.url,
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
                                        {item.sprite ? (
                                            <SvgUri
                                                width="30%"
                                                height={128}
                                                uri={item.sprite}
                                            />
                                        ) : (
                                            <Image
                                                width="30%"
                                                height={128}
                                                source={require('../../images/isNotFound.jpg')}
                                            />
                                        )}

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
                <Text
                    fontSize={40}
                    textAlign="center"
                    color="red.600"
                    height="100%"
                >
                    Sem pokémons
                </Text>
            )}
        </View>
    );
}

export default ListPokemons;
