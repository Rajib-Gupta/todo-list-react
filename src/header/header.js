import React from 'react';

export const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <h3 className="navbar-brand">{props.title}</h3>

            </div>
        </nav>
    )
};
