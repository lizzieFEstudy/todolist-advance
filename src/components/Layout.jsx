import React from 'react';

function Layout({ children }) {
    return (
        <div id="wrap">
            <header>
                <h1>My Todo List</h1>
            </header>

            {/* <div id="container"> */}
            <main id="main">{children}</main>
        </div>
    );
}

export default Layout;
