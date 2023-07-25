import { PayloadAction } from '@reduxjs/toolkit';

interface pokemonStats {
    base_stat: string;
    effort: string;
    stat: {
        name: string;
    };
}

export interface pokemonDTO {
    data: {
        name: string;
        height: number;
        stats: pokemonStats[];
        sprites: {
            other: {
                dream_world: { front_default: string };
                home: { front_default: string };
            };
        };
        weight: number;
    };
}

interface paginationData {
    offset: number;
    limit: number;
}

export interface pokemonData {
    name: string;
    height: number;
    stats: pokemonStats[];
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
        prepare: (offset: number, limit: number) => {
            return { payload: { offset, limit } };
        },
    },

    getPokemonsSuccess: {
        reducer: (
            state: initialStateProps,
            action: PayloadAction<{ data: pokemonData[] }>,
        ) => {
            const { data } = action.payload;
            state.data = data;
            state.loading = false;
        },
        prepare: (data: pokemonData[]) => {
            return { payload: { data } };
        },
    },
    getPokemonsFailure: (state: initialStateProps) => {
        state.loading = false;
    },
};
