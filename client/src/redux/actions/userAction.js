import axios from 'axios'

export const userLogin = (data) => async dispatch => {

    dispatch({ type: 'LOADING', payload: true })

    try {
        const res = await axios.post('/api/users/login')
        localStorage.setItem('auth', JSON.stringify(res.data))
        console.log(res.data);

        dispatch({ type: 'LOADING', payload: false })

    } catch (error) {
        console.log(error);
        dispatch({ type: 'LOADING', payload: false })

    }
}

export const userRegister = (obj) => async dispatch => {

    dispatch({ type: 'LOADING', payload: true })
    dispatch({ type: 'USER_REGISTER_REQUEST' })

    try {
        const res = await axios.post('/api/users/register')
        console.log(res.data);
        dispatch({ type: 'USER_REGISTER_SUCCESS' })
        dispatch({ type: 'LOADING', payload: false })

    } catch (error) {
        console.log(error);
        dispatch({ type: 'USER_REGISTER_ERROR', payload: error })
        dispatch({ type: 'LOADING', payload: false })

    }
}