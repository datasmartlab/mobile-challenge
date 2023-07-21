import { useEffect, useState } from 'react';
import { actions } from '../../redux/pokemon/slice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { View, Text, FlatList, IconButton, Icon, Box } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PokemonScreenNavigationProp } from '../../routes';
import { MaterialIcons } from '@expo/vector-icons';

function ListPokemons() {
    const navigation = useNavigation<PokemonScreenNavigationProp>();
    const dispatch = useDispatch();
    const { getPokemonsRequest } = actions;

    const { data, loading, pagination } = useSelector(
        (state: RootState) => state.pokemons,
    );

    const [offset, setOffset] = useState(pagination.offset);
    const [limit, setLimit] = useState(pagination.limit);

    useEffect(() => {
        dispatch(getPokemonsRequest({ offset, limit }));
    }, [dispatch, getPokemonsRequest, offset, limit]);

    return (
        <View paddingX={2}>
            {loading ? (
                <Text>Carrendo...</Text>
            ) : (
                <View>
                    {data.length ? (
                        <View>
                            <Box
                                borderBottomWidth={2}
                                marginY={3}
                                paddingBottom={2}
                                height={70}
                            >
                                <Box
                                    flex={1}
                                    flexDirection="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <Text fontSize={32} bold>
                                        Lista de Pokémons
                                    </Text>
                                    <Box
                                        flexDirection="row"
                                        justifyContent="center"
                                    >
                                        <IconButton
                                            onPress={() => {
                                                setOffset(limit);
                                            }}
                                            icon={
                                                <Icon
                                                    size={12}
                                                    as={MaterialIcons}
                                                    name="arrow-back"
                                                    color="black"
                                                />
                                            }
                                        />
                                        <IconButton
                                            onPress={() => {
                                                setOffset(limit);
                                            }}
                                            icon={
                                                <Icon
                                                    size={12}
                                                    as={MaterialIcons}
                                                    name="arrow-forward"
                                                    color="black"
                                                />
                                            }
                                        />
                                    </Box>
                                </Box>
                            </Box>
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                marginBottom={3}
                                data={data}
                                renderItem={({ item }) => {
                                    return (
                                        <View flex={1} key={item.name}>
                                            <TouchableOpacity
                                                style={{
                                                    marginTop: 10,
                                                }}
                                                onPress={() => {
                                                    navigation.navigate(
                                                        'pokemon',
                                                        {
                                                            url: item.url,
                                                        },
                                                    );
                                                }}
                                            >
                                                <Text
                                                    lineHeight="3.35rem"
                                                    textAlign="center"
                                                    bg="gray.200"
                                                    width="100%"
                                                    fontSize={26}
                                                    borderRadius={8}
                                                >
                                                    {item.name}
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    );
                                }}
                            />
                        </View>
                    ) : (
                        <Text>Sem pokémons</Text>
                    )}
                </View>
            )}
        </View>
    );
}

export default ListPokemons;
