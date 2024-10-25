import { UPDATE_STREET } from "./constants";
import { produce } from "immer";

type ActionType = {
    type: string;
    payload: string;
}

const initialState = {
    name: 'John Smith',
    address: {
        street: '123 Main St',
        city: 'Fairfield',
        state: 'IA'
    }
}

// const reducer = (state = initialState, action: ActionType) => {
//     switch (action.type) {
//         case UPDATE_STREET:
//             return { ...state, address: { ...state.address, street: action.payload } };
//         default:
//             return state;
//     }
// }

const reducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case UPDATE_STREET:
            return produce(state, (draft) => {
                draft.address.street = action.payload;
            });
        default:
            return state;
    }
}

export default reducer;