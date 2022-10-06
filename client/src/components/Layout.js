import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

function Layout(props) {
    const navigate = useNavigate()


    const user = JSON.parse(localStorage.getItem('auth'))
    const currentUser = user[0].name;


    const logout = () => {
        localStorage.removeItem("auth");
        navigate('/')
    };

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
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {currentUser}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="/home">Home</a>
                            <a className="dropdown-item" href="/bookings">Bookings</a>
                            <a className="dropdown-item" href="/profile">Profile Page</a>
                            <button className='dropdown-item' onClick={logout}>Logout</button>
                        </div>
                    </div>

                </div>

            </div>
            <div className="content">
                {props.children}
            </div>




        </div>
    )
}

export default Layout