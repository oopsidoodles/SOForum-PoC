import React                                                from "react";
import {QuestionType}                                       from "../reducers/questions";
import {QuestionModal}                                      from "../components/QuestionModal";
import {connect}                                            from "react-redux";
import {SelectedQuestionAction, SelectedQuestionActionType} from "../reducers/selectedQuestion";
import {Button}                                             from "reactstrap";

type PropType = {
    onBackClick: () => void
} & QuestionType;

export const QuestionPage_ = ({onBackClick, ...details}: PropType) => {
    return (
        <div>
            <Button type="button" name="back" onClick={() => onBackClick()}>BACK</Button>
            <QuestionModal {...details} />
        </div>
    );
};

const mapDispatchToProps = (dispatch: (action: SelectedQuestionAction) => void) => {
    return {
        onBackClick: () => {
            dispatch({type:SelectedQuestionActionType.UNSET});
        }
    };
};

export const QuestionPage = connect(null, mapDispatchToProps)(QuestionPage_);
