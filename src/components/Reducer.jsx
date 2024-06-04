/* eslint-disable no-case-declarations */
const initialAppState = {
    userData: [],
    errorMessage: ""
}

const appReducer = (state = initialAppState, action) => {
    switch (action.type) {
        case "display_data":
            let updatedState = { ...state, userData: action.payload }
            return updatedState
        case "display_error":
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return state
    }
}

export default appReducer;
