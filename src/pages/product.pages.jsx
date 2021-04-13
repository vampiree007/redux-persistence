import React from 'react'
import Sidebar from '../components/sidebar/sidebar.component'
import {useSelector } from "react-redux";
import TableComponent from '../components/table/table.component';

export function ProductPage(props) {
    const pokemon = useSelector(state => state.pokemon.pokemon)
    console.log(pokemon);

    return (
        <div className="container">
            <Sidebar/>
            <div className="main">
            <TableComponent color="teal" />
            </div>
        </div>
    )
}
