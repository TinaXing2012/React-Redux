import { createStore, isAction } from "redux";
import reducer from './pizza-reducer';

// 3. create a store
const store = createStore(reducer);

export default store;