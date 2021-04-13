import React from 'react';
import PokemonTable from '../components/table/table.component';
import Sidebar from '../components/sidebar/sidebar.component';

export default function Dashboard(props) {

    return (
        <div className="container">
            <Sidebar />
            <div className="main">
                <PokemonTable />
            </div>
        </div>
    )
}
