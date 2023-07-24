import { useEffect, useState } from 'react';
import { actions } from '../../redux/pokemon/slice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import {
    View,
    Text,
    FlatList,
    IconButton,
    Icon,
    Box,
    Center,
} from 'native-base';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PokemonScreenNavigationProp } from '../../routes';
import { MaterialIcons } from '@expo/vector-icons';
import { SvgUri } from 'react-native-svg';

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
                                marginBottom={72}
                                data={data}
                                renderItem={({ item }) => {
                                    return (
                                        <View flex={1} key={item.name}>
                                            <TouchableOpacity
                                                style={{
                                                    marginVertical: 5,
                                                }}
                                                onPress={() => {
                                                    navigation.navigate(
                                                        'pokemon',
                                                        {
                                                            data: item,
                                                        },
                                                    );
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
