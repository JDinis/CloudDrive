import { ADDFILES, LISTFILES, DELETEFILE } from "../Actions/Types";

const initialState = {
    Files: [],
    File: {},
    Error: null
};

export const FileReducer = (state = initialState, action) => {
    switch (action.type) {
        case LISTFILES:
            return {
                ...state,
                Files: action.payload.files,
                Error: action.payload.Error
            };
        case DELETEFILE:
            return {
                ...state,
                Success: action.payload.success
            };
        default:
            return state
    }
}