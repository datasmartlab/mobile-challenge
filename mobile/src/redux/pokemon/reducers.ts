import { PayloadAction } from '@reduxjs/toolkit';

interface pokemonsDTO {
    count: number;
    next: string | null;
    previous: string | null;
    results: {
        name: string;
        url: string;
    }[];
}

interface paginationData {
    offset: number;
    limit: number;
    count?: number;
}

interface pokemonData {
    name: string;
    sprite: string;
}
interface payloadpokemonData {
    data: pokemonsDTO;
}

export interface initialStateProps {
    loading: boolean;
    data: { name: string; url: string }[];
    pokemonInfo: pokemonData;
    pagination: paginationData;
}

export const reducer = {
    getPokemonsRequest: {
        reducer: (state: initialStateProps) => {
            state.loading = false;
        },
        prepare: ({ offset, limit }: paginationData) => {
            return { payload: { offset, limit } };
        },
    },

    getPokemonsSuccess: {
        reducer: (
            state: initialStateProps,
            action: PayloadAction<payloadpokemonData>,
        ) => {
            const { data } = action.payload;
            state.data = data.results;
            state.loading = false;
            state.pagination.count = data.count;
        },
        prepare: ({ data }: payloadpokemonData) => {
            return { payload: { data } };
        },
    },

    getPokemonsFailure: (state: initialStateProps) => {
        state.loading = false;
    },

    getPokemonInfoRequest: (state: initialStateProps) => {
        state.loading = true;
    },

    getPokemonInfoSuccess: {
        reducer: (
            state: initialStateProps,
            action: PayloadAction<{ data: pokemonData }>,
        ) => {
            state.pokemonInfo = action.payload.data;
            state.loading = false;
        },
        prepare: ({ name, sprite }: pokemonData) => {
            return { payload: { data: { name, sprite } } };
        },
    },
    getPokemonInfoFailure: (state: initialStateProps) => {
        state.loading = false;
    },
};
