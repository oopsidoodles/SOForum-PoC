import React                                                                    from 'react';
import styled                                                                   from "styled-components";
import { connect }                                                              from "react-redux";
import {QuestionAction, QuestionActionType, DeleteQuestionFields, QuestionType} from "../reducers/questions";
import {
    SelectedQuestionAction,
    SelectedQuestionActionType,
    SetSelectedQuestionFields
}                                                    from "../reducers/selectedQuestion";
import {Button, Card, CardBody, CardText, CardTitle} from "reactstrap";

type PropType = QuestionType & {
    onDeleteClick: (fields: DeleteQuestionFields) => void,
    onSelectClick: (fields: SetSelectedQuestionFields) => void
};

const StyledCard = styled(Card)`
    :hover {
        background-color: #e6e6e6;
        border: 1px solid black;
        cursor: pointer;
    }
`;

const StyledCardTitle = styled(CardTitle)`
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const StyledCardText = styled(CardText)`
    width: 100%;
    overflow: hidden;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`;

export const Question_ = ({ id, title, body, onDeleteClick, onSelectClick }: PropType) => {
    return (
        <StyledCard onClick={() => {onSelectClick({id})}}>
            <CardBody>
                <StyledCardTitle>{title}</StyledCardTitle>
                <StyledCardText>{body}</StyledCardText>
                <Button onClick={() => { onDeleteClick({id}) }}>DELETE</Button>
            </CardBody>
        </StyledCard>
    );
};

const mapDispatchToProps = (dispatch: (fields: QuestionAction | SelectedQuestionAction) => void) => {
    return {
        onDeleteClick: (fields: DeleteQuestionFields): void => {
            dispatch({type:QuestionActionType.DELETE, ...fields});
        },
        onSelectClick: (fields: SetSelectedQuestionFields): void => {
            dispatch({type:SelectedQuestionActionType.SET, ...fields});
        }
    };
};

export const Question = connect(null, mapDispatchToProps)(Question_);
