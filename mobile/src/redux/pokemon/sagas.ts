import { takeLatest, all, call, put } from 'redux-saga/effects';
import { actions } from './slice';
import { api } from '../../services/pokemon';
import { pokemonData, pokemonDTO } from './reducers';

interface FetchProductsAction {
    type: typeof actions.getPokemonsRequest.type;
    payload: {
        offset: number;
        limit: number;
    };
}

function* getPokemons({ payload }: FetchProductsAction) {
    const { getPokemonsFailure, getPokemonsSuccess } = actions;
    const { limit, offset } = payload;
    try {
        // const { data }: { data: { count: number } } = { data: { count: 1500 } };
        let result: pokemonData[] = [];
        for (let count = 0; count < limit; count++) {
            const response: pokemonDTO = yield api.get(
                `pokemon/${offset + count}`,
            );
            result.push(response.data);
        }
        yield put(getPokemonsSuccess(result));
    } catch (error) {
        yield put(getPokemonsFailure());
    }
}

export default all([takeLatest('pokemons/getPokemonsRequest', getPokemons)]);
