export interface QuestionType {
    id: string,
    title: string,
    body: string
}

export enum QuestionActionType {
    CREATE="CREATE",
    UPDATE="UPDATE",
    DELETE="DELETE"
}

export type CreateQuestionFields = Pick<QuestionType, "title"|"body">;
export type UpdateQuestionFields = Pick<QuestionType, "id"> & Partial<Pick<QuestionType, "title"|"body">>;
export type DeleteQuestionFields = Pick<QuestionType, "id">;
type CreateQuestionAction = { type: QuestionActionType.CREATE } & CreateQuestionFields;
type UpdateQuestionAction = { type: QuestionActionType.UPDATE } & UpdateQuestionFields;
type DeleteQuestionAction = { type: QuestionActionType.DELETE } & DeleteQuestionFields;
export type QuestionAction = CreateQuestionAction | UpdateQuestionAction | DeleteQuestionAction;

export type QuestionsState = Array<QuestionType>;
export const questionsReducer = (state: QuestionsState, action: QuestionAction): QuestionsState => {
    if (!state) {
        state = [];
    }

    switch(action.type) {
        case QuestionActionType.CREATE: {
            let question: QuestionType = {
                id: new Date().getTime().toString(),
                title: action.title,
                body: action.body
            };
            return [...state, question];
        }
        case QuestionActionType.UPDATE: {
            return state.map((question) => {
                if (question.id !== action.id) {
                    return question;
                } else {
                    delete action.id;
                    delete action.type;
                    return {...question, ...action};
                }
            });
        }
        case QuestionActionType.DELETE: {
            return state.filter((question) => {
                return question.id !== action.id;
            });
        }
        default:
            return state;
    }
};
