import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface pokemonDTO {
    count: string;
    next: string | null;
    previous: string | null;
    results: {
        name: string;
        url: string;
    }[];
}

interface initialState {
    loading: boolean;
    data: { name: string; url: string }[];
}

const initialState: initialState = {
    loading: false,
    data: [],
};

interface payloadProps {
    data: pokemonDTO;
}

const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        getPokemonsRequest: (state) => {
            state.loading = false;
        },
        getPokemonsSuccess: {
            reducer: (state, action: PayloadAction<{ data: pokemonDTO }>) => {
                const { data } = action.payload;
                state.data = data.results;
                state.loading = false;
            },
            prepare: ({ data }: payloadProps) => {
                return { payload: { data } };
            },
        },
        getPokemonsFailure: (state) => {
            state.loading = false;
        },
    },
});

export const { actions } = pokemonSlice;
export default pokemonSlice.reducer;
