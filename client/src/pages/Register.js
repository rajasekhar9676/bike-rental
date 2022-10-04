import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Register() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [pass, setpass] = useState('')
    const [cpass, setcpass] = useState('')

    const registerSubmit = () => {

    }

    return (
        <div className='registerbg'>
            <h1 className='text-center bg-dark py-4'>Welcome to the world of bikes</h1>
            <div className="row mt-5">
                <div className="col-md-8">

                </div>
                <div className="col-md-4 col-sm-4">
                    <div className="p-2 bg-card" style={{ marginRight: "30px" }}>
                        <h2 className='mt-2' style={{ textAlign: "left", marginLeft: "40px" }}>Register</h2>
                        <form className='col-md-9 mt-5' onSubmit={registerSubmit} style={{ textAlign: "left", marginLeft: "40px" }}>
                            <div className="form-group">
                                <h5>Name</h5>
                                <input type="text" value={name} onChange={(e) => setname(e.target.value)} className="form-control" placeholder="Enter name" autofocus required />
                            </div>
                            <div className='form-group mt-4'>
                                <h5>Email address</h5>
                                <input type="email" value={email} onChange={(e) => setemail(e.target.value)} className="form-control" placeholder="Enter email" required />
                            </div>
                            <div className="form-group mt-4">
                                <h5>Password</h5>
                                <input type="password" value={pass} onChange={(e) => setpass(e.target.value)} className="form-control" placeholder="Password" required />
                            </div>
                            <div className="form-group mt-4">
                                <h5>Confirm Password</h5>
                                <input type="password" value={cpass} onChange={(e) => setcpass(e.target.value)} className="form-control" placeholder="Confirm Password" required />
                            </div>
                            <button type="submit" className="btn btn-primary mt-4">Submit</button>

                        </form>
                        <Link className="text-white my-3" to="/">Already Registered? Click here</Link>
                    </div>

                    <ToastContainer />
                </div>
            </div>

        </div>
    )
}

export default Register