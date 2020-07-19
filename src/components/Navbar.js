import React from 'react';

function Tavbar() {
    return (
            <navbar className="navbar" role="navigation" aria-label="main-navigation">
                <div className="navbar-brand">
                    <a  className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="Bulma Logo"/>
                    </a>
                   
                    <a  className="navbar-item" href="https://bulma.io">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a href="https://www.google.com" className="navbar-item">
                            Home
                        </a>
                        <a href="https://www.google.com" className="navbar-item">
                            My List
                        </a>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <a href="https://www.google.com" className="navbar-link">
                                More
                            </a>
                            <div className="navbar-dropdown">
                            <a href="https://www.google.com" className="navbar-item">
                                Profile
                            </a>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a href="https://www.google.com" className="button is-primary">
                                <strong>Login</strong>
                                </a>
                                <a href="https://www.google.com" className="button is-secondary">
                                <strong>Logout</strong>
                                </a>
                            </div> 
                        </div> 
                    </div>
                </div>
            </navbar>
            
    )
}
            // <Button renderAs="a" href="https://www.google.com/" color="info" outlined rounded size="large">
            //     Our Button
            // </Button>

export default Tavbar
