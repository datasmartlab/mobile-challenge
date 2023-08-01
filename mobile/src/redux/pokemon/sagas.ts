import { takeLatest, all, put } from 'redux-saga/effects';
import { actions } from './slice';
import { api } from '../../services/pokemon';
import axios from 'axios';
import { pokemonDataDTO, pokemonListDTO } from './reducers';

interface FetchPokemonsListAction {
    type: typeof actions.getPokemonsRequest.type;
    payload: {
        offset: number;
        limit: number;
    };
}

function* getPokemons({ payload }: FetchPokemonsListAction) {
    const { getPokemonsFailure, getPokemonsSuccess } = actions;
    const { limit, offset } = payload;

    try {
        const response: pokemonListDTO = yield api.get('pokemon', {
            params: { limit, offset },
        });

        for (let count = 0; count < limit; count++) {
            response.data.results[
                count
            ].sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                offset + count + 1
            }.svg`;
        }
        console.log;
        yield put(getPokemonsSuccess(response));
    } catch (error) {
        yield put(getPokemonsFailure());
    }
}

interface FetchPokemonByIdAction {
    type: typeof actions.getPokemonsRequest.type;
    payload: {
        url: string;
    };
}

function* getPokemonById({ payload }: FetchPokemonByIdAction) {
    const { getPokemonByIdSuccess, getPokemonByIdFailure } = actions;
    try {
        const response: pokemonDataDTO = yield axios.get(payload.url);
        yield put(getPokemonByIdSuccess(response));
    } catch (error) {
        yield put(getPokemonByIdFailure());
    }
}

export default all([
    takeLatest('pokemons/getPokemonsRequest', getPokemons),
    takeLatest('pokemons/getPokemonByIdRequest', getPokemonById),
]);
