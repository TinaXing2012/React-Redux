import { PIZZA_ORDER } from "./constants";

// 2. create reducer
const initialState = {
    numOfPizza: 10
}

type ActionType = {
    type: string;
}

const reducer = (state = initialState, action:ActionType) => {
    switch(action.type){
        case PIZZA_ORDER:
            return {...state, numOfPizza: state.numOfPizza-1};
        default:
            return state;
    }
}

export default reducer;