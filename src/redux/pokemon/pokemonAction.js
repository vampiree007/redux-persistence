import axios from 'axios';

export const setPokemon = () => {
    const pokemon = axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=200')
        .then(res => res.data.results)
        .catch(err => console.log(err));
    
    return({
        type: 'SET_POKEMON',
        payload: pokemon
    })
    
}