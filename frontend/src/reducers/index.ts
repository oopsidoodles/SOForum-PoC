import {QuestionAction, questionsReducer, QuestionsState}                       from "./questions";
import {SelectedQuestionAction, selectedQuestionReducer, SelectedQuestionState} from "./selectedQuestion";

export type RootState = {
    questions: QuestionsState,
    selectedQuestion: SelectedQuestionState
};

export type AnyAction = QuestionAction | SelectedQuestionAction;

// no combineReducers here for maximum flexibility
export const rootReducer = (state: RootState, action: AnyAction): RootState => {
    if (!state) {
        state = {
            questions: [],
            selectedQuestion: null
        };
    }

    return {
        questions: questionsReducer(state.questions, action as QuestionAction),
        selectedQuestion: selectedQuestionReducer(state.selectedQuestion, action as SelectedQuestionAction)
    };
};
