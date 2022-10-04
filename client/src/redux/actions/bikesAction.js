import axios from 'axios'

export const getAllBikes = () => async dispatch => {

    dispatch({ type: 'LOADING', payload: true })

    try {
        const res = await axios.get('/api/bikes/allbikes')
        dispatch({ type: 'GET_ALL_BIKES', payload: res.data })
        dispatch({ type: 'LOADING', payload: false })

    } catch (error) {
        console.log(error);
        dispatch({ type: 'LOADING', payload: false })

    }
}