import { ADDFILES } from "../Actions/Types";

const initialState = {
    Files: [],
    File: {},
    Error: null
};

export const FileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDFILES:
            return {
                ...state,
                Files: action.payload.Files,
                Error: action.payload.Error
            };
        default:
            return state
    }
}