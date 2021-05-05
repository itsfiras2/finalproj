import { AUTH, UPDATEPROFILE } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, router) => async(dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data });


        router.push('/');
    } catch (error) {
        console.log(error);
    }
};

export const signup = (formData, router) => async(dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });

        router.push('/');
    } catch (error) {
        console.log(error);
    }
};

export const updateUser = (id, user) => async(dispatch) => {
    try {
        const { data } = await api.updateUser(id, user);

        dispatch({ type: UPDATEPROFILE, payload: data });
    } catch (error) {
        console.log(error)
    }
};