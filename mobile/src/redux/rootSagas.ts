import { all } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import pokemonSaga from './pokemon/sagas';

export default function* rootSaga(): SagaIterator<void> {
    return yield all([pokemonSaga]);
}
