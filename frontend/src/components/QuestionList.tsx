import React            from 'react';
import { Question }     from "./Question";
import {RootState}      from "../reducers";
import {connect}        from "react-redux";
import {QuestionsState} from "../reducers/questions";
import styled           from "styled-components";

type PropType = {
    questions: QuestionsState
};

const StyledDiv = styled.div`
    border: ${({questions}: PropType) => questions.length > 0 ? '1px solid black' : '0'};
`;

const QuestionList_ = ({ questions }: PropType) => {
    return (
        <StyledDiv questions={questions}>
            {questions.map((question) => {
                return <Question {...question} key={question.id}/>
            })}
        </StyledDiv>
    );
};

const mapStateToProps = (state: RootState): PropType => {
    return {
        questions: state.questions
    };
};

export const QuestionList = connect(mapStateToProps)(QuestionList_);
