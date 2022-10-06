import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import 'animate.css'
import moment from 'moment'
import { Link, useParams } from 'react-router-dom'
import { getBikeById } from '../redux/actions/bikesAction'
import { useSelector, useDispatch } from 'react-redux'


function Booking() {
    const [fromvalue, setfromvalue] = useState('')
    const [tovalue, settovalue] = useState('')
    const [totalhrs, settotalhrs] = useState(0)
    const { bikeid } = useParams()
    const dispatch = useDispatch()
    const getbikebyidstate = useSelector((state) => state.getBikeByIdReducer)
    const { loading, bike, error } = getbikebyidstate

    useEffect(() => {
        dispatch(getBikeById(bikeid))
    }, [])

    const submitBook = (e) => {
        e.preventDefault()

        // To be worked on this section of time slot booking.
        const from = moment(fromvalue)._d;
        const to = moment(tovalue)._d;
        settotalhrs(to.diff(from, 'hours'))
        console.log(totalhrs);
    }

    return (

        <Layout>
            <div style={{ marginTop: "120px" }} className='container'>
                <h1 className="text-center">Bike Details</h1>
                <div className='row mt-5 justify-content-center'>
                    {
                        loading ?
                            (
                                <img src="https://www.atlatl.com/hubfs/NBM/arrow-motorcycle-v1/Arrow_Motorcycle_Loader.gif" width="100px" height="600px" alt="" />

                            ) : error ? (
                                <img src="https://www.atlatl.com/hubfs/NBM/arrow-motorcycle-v1/Arrow_Motorcycle_Loader.gif" width="100px" height="600px" alt="" />
                            ) : (


                                <div className='row text-right'>
                                    <div className="col-md-7 mt-5">
                                        <img src={bike.image} width='800px' height='800px' className="img-fluid animate__animated animate__bounceInLeft animate__duration-3s" alt="" />

                                    </div>
                                    <div className="col-md-5 mt-4">
                                        <h1 className='p-2'>{bike.name}</h1>
                                        <hr />
                                        <h4 className='p-2'>Engine Capacity : <span className='specs'>{bike.engine}</span> </h4>
                                        <h4 className='p-2'>Fuel Type : <span className='specs'>{bike.fuelType}</span></h4>

                                        <h4 className='p-2' >Gear : <span className='specs'>{bike.gear}</span> </h4>
                                        <h4 className='p-2'>Per Hour Cost : <span className='specs'>{bike.rentPerHour} /-</span></h4>

                                        <form onSubmit={submitBook}>

                                            <input className='date-input p-2' value={fromvalue} onChange={(e) => setfromvalue(e.target.value)} type="datetime-local" id="fromtime" name="fromtime" />
                                            <input className='date-input p-2' value={tovalue} onChange={(e) => settovalue(e.target.value)} type="datetime-local" id="totime" name="totime" />

                                            <button type="submit" className="text-center btn btn-primary mt-5">Submit</button>

                                        </form>

                                    </div>



                                </div>







                            )

                    }

                </div>
            </div>

        </Layout>
    )
}

export default Booking