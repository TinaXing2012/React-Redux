import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./constants";
import { User } from "./types";

type ActionType = {
    type: string;
    payload?: any;
}

const initialState: {
    loading: boolean;
    users: User[];
    error: string;
} = {
    loading: false,
    users: [],
    error: ''
}

const reducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return { ...state, loading: true };
        case FETCH_USERS_SUCCESS:
            return { ...state, loading: false, users: action.payload }
        case FETCH_USERS_FAILURE:
            return { loading: false, users: [], error: action.payload }
    }
}

export default reducer;