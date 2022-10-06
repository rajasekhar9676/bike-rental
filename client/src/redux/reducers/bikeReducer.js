const initialData = {
    bikes: []
}

export const bikesReducer = (state = initialData, action) => {
    switch (action.type) {

        case 'GET_ALL_BIKES': {
            return {
                ...state,
                bikes: action.payload
            }
        }


        default: return state
    }
}

export const getBikeByIdReducer = (state = { bike: {} }, action) => {
    switch (action.type) {
        case 'GET_BIKEBYID_REQUEST': return {
            loading: true
        }

        case 'GET_BIKEBYID_SUCCESS': return {
            bike: action.payload,
            loading: false
        }

        case 'GET_BIKEBYID_ERROR': return {
            error: action.payload,
            loading: false
        }
        default: return state
    }
}