import React, { useEffect, useState } from 'react';
import { actions } from '../redux/pokemon/slice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { View, Text } from 'react-native';
export function Teste() {
    const dispatch = useDispatch();
    const { getPokemonsRequest } = actions;

    useEffect(() => {
        dispatch(getPokemonsRequest());
    }, [dispatch]);

    const data = useSelector((state: RootState) => state.pokemons.data);

    return (
        <View>
            {data.map((item) => {
                return (
                    <View key={item.name}>
                        <Text>{item.name}</Text>
                    </View>
                );
            })}
        </View>
    );
}
