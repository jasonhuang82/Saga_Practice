export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const changeFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    payload: {
        filter,
    },
})

export default {
    changeFilter
};