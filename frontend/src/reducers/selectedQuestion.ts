import {QuestionType} from "./questions";

export enum SelectedQuestionActionType {
    SET="SET",
    UNSET="UNSET"
}

export type SetSelectedQuestionFields = Pick<QuestionType, "id">;
type SetSelectedQuestionAction = { type: SelectedQuestionActionType.SET } & SetSelectedQuestionFields;
type UnsetSelectedQuestionAction = { type: SelectedQuestionActionType.UNSET };
export type SelectedQuestionAction = SetSelectedQuestionAction | UnsetSelectedQuestionAction;

export type SelectedQuestionState = string | null;
export const selectedQuestionReducer = (state: SelectedQuestionState, action: SelectedQuestionAction): SelectedQuestionState => {
    if (!state) {
        state = null;
    }

    switch(action.type) {
        case SelectedQuestionActionType.SET: {
            return action.id;
        }
        case SelectedQuestionActionType.UNSET: {
            return null;
        }
        default:
            return state;
    }
};
