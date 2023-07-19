import { takeLatest, all, call, put } from 'redux-saga/effects';
import { actions } from './slice';
import { api } from '../../services/pokemon';

interface pokemonDTO {
    data: {
        count: string;
        next: string | null;
        previous: string | null;
        results: {
            name: string;
            url: string;
        }[];
    };
}

interface FetchProductsAction {
    type: typeof actions.getPokemonsRequest.type;
    // payload: {
    //     offset: number;
    //     limit: number;
    // };
}

function* getPokemons({}: FetchProductsAction) {
    const { getPokemonsFailure, getPokemonsSuccess } = actions;
    try {
        const response: pokemonDTO = yield api.get('pokemon');
        yield put(getPokemonsSuccess({ data: response.data }));
    } catch (error) {
        yield put(getPokemonsFailure());
    }
}

export default all([takeLatest('pokemons/getPokemonsRequest', getPokemons)]);
