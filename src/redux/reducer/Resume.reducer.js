import { RESUME_DATA_TEMPLATE } from "../../config/SampleData";
import {
    RESUME_RESET_PROFILE,
    RESUME_SET_PROFILE
} from "../ActionTypes";

const initialState = {
    profile: RESUME_DATA_TEMPLATE,
};

const ResumeReducer = (state = initialState, action) => {

    switch (action.type) {

        case RESUME_SET_PROFILE:
            state = {
                ...state,
                profile: action.payload
            };
            break;

        case RESUME_RESET_PROFILE:
            state = {
                ...state,
                profile: RESUME_DATA_TEMPLATE
            };
            break;

        default:
            break;

    }

    return state;

};

export default ResumeReducer;