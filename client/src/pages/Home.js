import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import { useSelector, useDispatch } from 'react-redux'
import { getAllBikes } from '../redux/actions/bikesAction'
import { Link } from 'react-router-dom'
import Bike from '../components/Bike'


function Home() {
    const { bikes } = useSelector(state => state.bikesReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllBikes())
    }, [])

    return (
        <Layout>

            <h1 className='text-center mt-3'>Home page</h1>
            {/* <h1>{bikes.length}</h1> */}
            <div className='row mt-5 justify-content-center'>

                {bikes.map(bike => {
                    return (

                        <div className='highlight col-md-4 col-lg-3 col-sm-5 p-3 card m-3 rounded justify-content-center'>


                            <img src={bike.image} className="img-fluid" alt="" />
                            <h4 className='text-left mb-2'>{bike.name}</h4>


                            <h5 className='mt-3'>Price: {bike.rentPerHour}</h5>

                        </div>


                    )


                })}
            </div>

        </Layout >
    )
}

export default Home