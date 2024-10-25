import { Dispatch } from "redux";
import axios from "axios";
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./constants";
import { User } from "./types";

export const createFetchUserRequestAction = () => ({
    type: FETCH_USERS_REQUEST
});

export const createFetchUserSuccessAction = (users: User[]) => ({
    type: FETCH_USERS_SUCCESS,
    payload: users
});

export const createFetchUserFailureAction = (error: string) => ({
    type: FETCH_USERS_FAILURE,
    payload: error
});

export const createFetchUserAsyncAction = () => (dispatch: Dispatch) => {
    dispatch(createFetchUserRequestAction());
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => dispatch(createFetchUserSuccessAction(response.data.map((u: any) => ({id: u.id, name: u.name})))))
        .catch(error => dispatch(createFetchUserFailureAction(error.message)));
};
