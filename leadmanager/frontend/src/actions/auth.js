import axios from 'axios';
import { returnError } from './messages';

import { USER_LOADED, USER_LOADING, AUTH_ERROR } from './types';

// * Check token & load user
export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING });
    const token = getState().auth.token;
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    axios.get('/api/auth/user', config)
        .then(res => {
            dispatch({ type: USER_LOADING, payload: res.data });
        })
        .catch(err => {
            dispatch(returnError(err.response.data, err.response.status));
            dispatch({ type: AUTH_ERROR });
        })
}
