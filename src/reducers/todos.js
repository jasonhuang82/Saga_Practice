import {
    ADD_TODO,
    TOGGLE_TODO,
} from '../actions/todos';

const initState = [];

const todosReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                {
                    id: parseInt(Math.random()*100) + 1,
                    text: action.payload.text,
                    isComplete: false,
                },
                ...state,
            ];

        case TOGGLE_TODO:
            const { id } = action.payload
            const filterState = state.map(item => {
                if(item.id === id) {
                    item.isComplete = !item.isComplete;
                }
                return item;
            });
            
            return filterState;
        default: 
            return state;
    }
}

export default todosReducer;