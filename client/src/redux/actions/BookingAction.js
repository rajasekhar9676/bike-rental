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
