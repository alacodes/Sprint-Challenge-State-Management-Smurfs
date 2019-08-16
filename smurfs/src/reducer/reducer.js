import {
    GET_DATA_SUCCESS,
    GET_DATA_FAIL,
    CREATE_SMURF,
    UPDATE_SMURF,
    DELETE_SMURF
} from './actions';

const initialState = {
    smurfs = []
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_DATA_SUCCESS:
            return{
                ...state
            }
        case GET_DATA_FAIL:
            return {
                ...state
            }
        case CREATE_SMURF:
            return {
                ...state
            }
        case UPDATE_SMURF:
            return {
                ...state
            }
        case DELETE_SMURF:
            return {
                ...state
            }
        default:
            return state;
    
    }

}

