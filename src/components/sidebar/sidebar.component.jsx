import React from 'react';
import './sidebar.styles.scss';
import {Link, useLocation} from 'react-router-dom';

export default function Sidebar(props) {
    let location = useLocation();
    let path = location.pathname;
    console.log(path)

    return (
        <div className="sidebar">
            <div className="sidebar_inner">
            <div className="logo">
                LOGO
            </div>
            <div className="pages">
                <ul>
                    <li className={path === '/'? "active" : "nope"}>
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li className={path === "/products"? "active": null}>
                    <Link to="/products">Products</Link>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    )
}
