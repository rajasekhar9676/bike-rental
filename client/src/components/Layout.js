import React from 'react'
import { Link } from 'react-router-dom'

function Layout(props) {
    return (
        <div>
            <div className="header navtop">
                <div className="d-flex justify-content-between">
                    <Link to="/home">
                        <img src="https://cdn-icons-png.flaticon.com/512/3148/3148937.png" width="50px" height="55px" alt="" />
                    </Link>
                    <Link className='text-decoration-none' to="/home">
                        <h1>BiBook</h1>

                    </Link>
                    <button style={{ backgroundColor: '#D61C4E', width: '100px', height: '40px' }} className='btn text-white'>User</button>
                </div>
            </div>
            <div className="content">
                {props.children}
            </div>




        </div>
    )
}

export default Layout