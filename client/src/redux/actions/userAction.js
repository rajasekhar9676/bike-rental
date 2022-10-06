import axios from 'axios'

export const userLogin = (obj) => async dispatch => {

    dispatch({ type: 'LOADING', payload: true })
    dispatch({ type: 'USER_LOGIN_REQUEST' })


    await axios.post('/api/users/login', obj)
        .then(res => {
            localStorage.setItem('auth', JSON.stringify(res.data))
            window.location.href = '/home'
            console.log(res.data);
            dispatch({ type: 'LOADING', payload: false })
        })
        .catch(error => {
            console.log(error);
            dispatch({ type: 'LOADING', payload: false })
        })

}

// export const userLogout = () => dispatch => {
//     localStorage.removeItem('auth')

//     dispatch({ type: 'USER_LOGOUT' })

//     window.location.href = "/"
// }

export const userRegister = (obj) => async dispatch => {

    dispatch({ type: 'LOADING', payload: true })
    dispatch({ type: 'USER_REGISTER_REQUEST' })


    await axios.post('/api/users/register', obj)
        .then(res => {
            dispatch({ type: 'USER_REGISTER_SUCCESS', payload: res.data.msg })
            console.log(res.data.msg);
            dispatch({ type: 'LOADING', payload: false })

        })
        .catch(error => {
            console.log(error);
            dispatch({ type: 'USER_REGISTER_ERROR', payload: error })
            dispatch({ type: 'LOADING', payload: false })

        })






}