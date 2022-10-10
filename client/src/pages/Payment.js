import React, { useState } from 'react'
import Layout from '../components/Layout'
import { useNavigate } from 'react-router-dom'


function Payment() {
    const [paymentMethod, setPaymentMethod] = useState('paypal')
    const navigate = useNavigate()

    const paymentSubmit = () => {

    }

    return (
        <Layout>
            <h1 className='mt-5'>Payment Method</h1>
            <h5 className='mt-5'>Select payment method below</h5>
            <form className='col-md-9 mt-5 mx-auto' onSubmit={paymentSubmit} >
                <div className="form-group">
                    <input type="radio" class="form-check-input" id="paypal" name="paymentmethod" value="paypal" checked onChange={e => setPaymentMethod(e.target.value)} /> Paypal or Creditcard

                </div>

                <div className="col-md-4 mx-auto">
                    <button type="submit" className="submit-btn my-5">Submit</button>

                </div>

            </form>
        </Layout>
    )
}

export default Payment