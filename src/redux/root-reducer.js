import { combineReducers } from 'redux';

import pokemonReducer from './pokemon/pokemonReducer';

export default combineReducers({
    pokemon: pokemonReducer
})