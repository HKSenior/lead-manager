import axios from 'axios';
import { returnError } from './messages';

import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL } from './types';

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
            dispatch({ type: USER_LOADED, payload: res.data });
        })
        .catch(err => {
            dispatch(returnError(err.response.data, err.response.status));
            dispatch({ type: AUTH_ERROR });
        })
}

// * Login user
export const login = (username, password) => (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ username, password });

    axios.post('/api/auth/login', body, config)
        .then(res => {
            dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch(returnError(err.response.data, err.response.status));
            dispatch({ type: LOGIN_FAIL });
        })
}