
import { IAction } from "../../types/types";
import {
    OPEN_MODAL,

} from "../constants/modalConstants";

export interface IStateModal {
    open: boolean;
}

export const modalReducer = (state: IStateModal = { open: false }, action: IAction) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                open: true,
            };
        default:
            return state;
    }
};