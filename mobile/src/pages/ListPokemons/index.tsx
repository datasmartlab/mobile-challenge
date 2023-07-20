import { useEffect, useState } from 'react';
import { actions } from '../../redux/pokemon/slice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { View, Text, Button, Box } from 'native-base';

function ListPokemons() {
    // const dispatch = useDispatch();
    // const { getPokemonsRequest } = actions;

    // useEffect(() => {
    //     dispatch(getPokemonsRequest());
    // }, [dispatch]);

    // const { data, loading } = useSelector((state: RootState) => state.pokemons);

    const [data] = useState([
        { name: 'teste1', url: '#' },
        { name: 'teste2', url: '#' },
    ]);
    const loading = false;
    return (
        <View>
            {loading ? (
                <>Carrendo</>
            ) : (
                <>
                    {data.length ? (
                        <>
                            {data.map((item) => {
                                return (
                                    <View key={item.name}>
                                        <Box
                                            display="flex"
                                            flexDirection="row"
                                            width="100%"
                                            marginTop={3}
                                        >
                                            <Text bg="gray.200" width="70%">
                                                {item.name}
                                            </Text>
                                            <Button width="30%">teste</Button>
                                        </Box>
                                    </View>
                                );
                            })}
                        </>
                    ) : (
                        <>Sem pokemons</>
                    )}
                </>
            )}
        </View>
    );
}

export default ListPokemons;
