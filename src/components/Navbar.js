import React from 'react';
import { nav, Button } from 'react-bulma-components';

function Navbar() {
    return (
        <section>
            <nav className="navbar" role="navigation" aria-label="main-navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.ong" width="112" height="28" alt="Bulma Logo"/>

                    </a>

                </div>

            </nav>
            
        </section>
    )
}
            // <Button renderAs="a" href="https://www.google.com/" color="info" outlined rounded size="large">
            //     Our Button
            // </Button>

export default Navbar
