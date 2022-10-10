import axios from 'axios'



export const bookingBike = (reqObj) => async dispatch => {

    dispatch({ type: 'LOADING', payload: true })

    try {
        const res = await axios.post('/api/booking/bookbike', reqObj)
        dispatch({ type: 'LOADING', payload: false })
        console.log(res.data.msg);

    } catch (error) {
        console.log(error);
        dispatch({ type: 'LOADING', payload: false })


    }
}

export const payOrder = (id, paymentResult) => async (dispatch, getState) => {

    try {
        dispatch({ type: 'ORDER_PAY_REQUEST' })
        const { data } = await axios.put(`/api/orders/${id}/pay`, paymentResult)
        dispatch({ type: 'ORDER_PAY_SUCCESS', payload: data })
    } catch (error) {
        dispatch({ type: 'ORDER_PAY_FAIL', paylod: error })
    }
}