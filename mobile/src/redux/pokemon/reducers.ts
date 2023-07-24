import { PayloadAction } from '@reduxjs/toolkit';

export interface pokemonDTO {
    data: {
        name: string;
        height: number;
        sprites: {
            other: {
                dream_world: { front_default: string };
                home: { front_default: string };
            };
        };
        weight: number;
    };
}
/*
name:
height:
stats:{
	0 = hp
	1 = attack
	2 = defense
	3 = special-attack
	4 = special-defense
	5 = speed
}
type:{
	1 ou 2
}
sprites:{
	dream_world:{ front_default }
}

weight:  
*/

interface paginationData {
    offset: number;
    limit: number;
}

export interface pokemonData {
    name: string;
    height: number;
    sprites: {
        other: {
            dream_world: { front_default: string };
            home: { front_default: string };
        };
    };
    weight: number;
}

export interface initialStateProps {
    loading: boolean;
    data: pokemonData[];
    pagination: paginationData;
}

export const reducers = {
    getPokemonsRequest: {
        reducer: (state: initialStateProps) => {
            state.loading = false;
        },
        prepare: ({ offset, limit }: paginationData) => {
            return { payload: { offset, limit } };
        },
    },

    getPokemonsSuccess: (
        state: initialStateProps,
        action: PayloadAction<pokemonData[]>,
    ) => {
        state.data = action.payload;
        state.loading = false;
    },

    getPokemonsFailure: (state: initialStateProps) => {
        state.loading = false;
    },

    // getPokemonInfoRequest: (state: initialStateProps) => {
    //     state.loading = true;
    // },

    // getPokemonInfoSuccess: {
    //     reducer: (
    //         state: initialStateProps,
    //         action: PayloadAction<{ data: pokemonData }>,
    //     ) => {
    //         state.loading = false;
    //     },
    //     prepare: ({ name, sprite }: pokemonData) => {
    //         return { payload: { data: { name, sprite } } };
    //     },
    // },
    // getPokemonInfoFailure: (state: initialStateProps) => {
    //     state.loading = false;
    // },
};
