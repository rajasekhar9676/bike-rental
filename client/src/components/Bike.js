import React from 'react'

function Bike({ bike }) {
    return (
        <div>

            <div className='col-md-3 card rounded justify-content-center'>
                {/* <Link className="text-decoration-none" to={`/product/${product._id}`}> */}

                <img src={bike.image} className="img-fluid" alt="" />
                <h4 className='text-left mb-2'>{bike.name}</h4>


                <h5 className='mt-3'>Price: {bike.rentPerHour}</h5>
                {/* </Link> */}

            </div>

        </div>
    )
}

export default Bike