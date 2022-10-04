import React from 'react'

function Layout(props) {
    return (
        <div>
            <div className="header navtop">
                <div className="d-flex justify-content-between">
                    <h1>Biketals</h1>
                    <button>User</button>
                </div>
            </div>
            <div className="content">
                {props.children}
            </div>




        </div>
    )
}

export default Layout