import React, { useState }    from 'react';
import styled                 from "styled-components";
import { connect }            from "react-redux";
import { QuestionActionType, QuestionAction, CreateQuestionFields } from "../reducers/questions";
import {Input, Button}                                            from "reactstrap"

const DivStyled = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    margin-top: 5px;
    margin-bottom: 5px;
`;

type PropType = {
    onAddClick: (fields: CreateQuestionFields) => void
};

const AddQuestion_ = ({onAddClick}: PropType) => {
    let [title, setTitle] = useState('');
    let [body, setBody] = useState('');

    const addQuestion = () => {
        onAddClick({title, body});
        setTitle('');
        setBody('');
    };

    return (
        <DivStyled>
            <Input type="text" placeholder="title" value={title} onChange={(e) => {setTitle(e.target.value)}} />
            <Input type="textarea" placeholder="body" value={body} onChange={(e) => {setBody(e.target.value)}} />
            <Button onClick={() => {addQuestion()}}>ADD</Button>
        </DivStyled>
    );
};

const mapDispatchToProps = (dispatch: (action: QuestionAction) => void) => {
    return {
        onAddClick: (fields: CreateQuestionFields): void => {
            dispatch({type:QuestionActionType.CREATE, ...fields});
        }
    }
};

export const AddQuestion = connect(null, mapDispatchToProps)(AddQuestion_);
