import { PayloadAction } from '@reduxjs/toolkit';

interface pokemonStats {
    base_stat: string;
    effort: string;
    stat: {
        name: string;
    };
}

export interface pokemonListDTO {
    data: {
        count: number;
        results: pokemonListData[];
    };
}

export interface pokemonDataDTO {
    data: pokemonData;
}

interface paginationData {
    offset: number;
    limit: number;
    count: number;
}

export interface pokemonListData {
    name: string;
    sprite: string;
    url: string;
}

export interface pokemonData {
    name: string;
    height: number;
    stats: pokemonStats[];
    types: { slot: number; type: { name: string } }[];
    sprites: { other: { dream_world: { front_default: string } } };
    weight: number;
}

export interface initialStateProps {
    loading: boolean;
    chosenPokemon: { name: string; url: string }[];
    data: pokemonListData[];
    pokemonInfo: pokemonData | null;
    pagination: paginationData;
}

export const reducers = {
    getPokemonsRequest: {
        reducer: (state: initialStateProps) => {
            state.loading = true;
        },
        prepare: (offset: number, limit: number) => {
            return { payload: { offset, limit } };
        },
    },

    getPokemonsSuccess: {
        reducer: (
            state: initialStateProps,
            action: PayloadAction<{ data: pokemonListDTO }>,
        ) => {
            const { results, count } = action.payload.data.data;
            state.data = [...state.data, ...results];
            state.pagination.count = count;
            state.loading = false;
        },
        prepare: (data: pokemonListDTO) => {
            return { payload: { data } };
        },
    },

    getPokemonsFailure: (state: initialStateProps) => {
        state.loading = false;
    },

    getPokemonByIdRequest: {
        prepare: (url: string) => {
            return { payload: { url } };
        },
        reducer: (state: initialStateProps) => {
            state.loading = true;
        },
    },
    getPokemonByIdSuccess: {
        prepare: (result: pokemonDataDTO) => {
            return { payload: { result } };
        },
        reducer: (
            state: initialStateProps,
            action: PayloadAction<{ result: pokemonDataDTO }>,
        ) => {
            state.pokemonInfo = action.payload.result.data;
            state.loading = false;
        },
    },
    getPokemonByIdFailure: (state: initialStateProps) => {
        state.loading = false;
    },

    savePokemonOnList: {
        prepare: (name: string, url: string) => {
            return { payload: { name, url } };
        },
        reducer: (
            state: initialStateProps,
            action: PayloadAction<{ name: string; url: string }>,
        ) => {
            const { name, url } = action.payload;
            state.chosenPokemon = [...state.chosenPokemon, { name, url }];
        },
    },
    removePokemonOnList: {
        prepare: (position: number) => {
            return { payload: { position } };
        },
        reducer: (
            state: initialStateProps,
            action: PayloadAction<{ position: number }>,
        ) => {
            state.chosenPokemon.splice(action.payload.position);
        },
    },
};
