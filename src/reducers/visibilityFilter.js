import { SET_VISIBILITY_FILTER } from "../actions/visibilityFilter";
const initState = 'ALL';


const visibilityFilterReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.payload.filter;
    default: 
        return state;
    }
}

export default visibilityFilterReducer;