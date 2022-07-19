const initialState = {
    posts: [],
    loading: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_POSTS': {
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
        }
        case 'LOAD_DATA': {
            return {
                ...state,
                loading: true
            }
        }
        default:
            return state;
    }
}