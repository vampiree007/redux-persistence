import React,{useEffect} from 'react';
import Spinner from '../spinner/spinner.component';
import { connect, useDispatch, useSelector } from "react-redux";
import {setPokemon} from '../../redux/pokemon/pokemonAction';
import './table.styles.scss';

const PokemonTable = ({color}) => {
    const dispatch = useDispatch();

    // 1 Fetch API Set To Redux And and Retrieve Data
    // 2 Retrieve Users from Redux Store
    const pokemon = useSelector(state => state.pokemon.pokemon)
    useEffect(() => {
        if(!pokemon) dispatch(setPokemon())  
    }, [dispatch, pokemon]);


    // 3 Render Template On Successful Users Retrieve
    if(pokemon){
        return (
            <div id="table" className={color ? "teal": null}>
                <table className="dataTable">
                    <thead>
                        <tr>
                            <th>S No.</th>
                            <th>NAME</th>
                            <th>POKEMON URL</th>
                        </tr>
                    </thead>    
                    <tbody>
                    {
                        // Table Rows Will Generate Here
                        pokemon.map((poke,i)=>(
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{poke.name}</td>
                                <td style={{color:'teal'}}> <u>{poke.url}</u> </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
        </div>
        )
    }else{
        // Loading Screen Animation
        return(<div><Spinner/></div>)
    }
}

// + Adding Dispatch Action to the Functional Component
const mapDispatchToProps = { setPokemon };
  
// + connect Dispatch
export default connect(null, mapDispatchToProps)(PokemonTable);
