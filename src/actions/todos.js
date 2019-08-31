export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodoAction = text => ({
    type: ADD_TODO,
    payload: {
        text,
    },
})


export const toggleTodoAction = id => ({
    type: TOGGLE_TODO,
    payload: {
        id,
    }
})

export default {
    addTodoAction,
    toggleTodoAction,
};