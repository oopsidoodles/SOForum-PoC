import React, {useState}                                                        from 'react';
import {QuestionAction, QuestionActionType, QuestionType, UpdateQuestionFields} from "../reducers/questions";
import {ModifiableField}                                                        from "./ModifiableField";
import styled                                                                   from "styled-components";
import {connect}                                                                from "react-redux";

const StyledDiv = styled.div`
    border: 1px solid black;
`;

type PropType = QuestionType & {
    onUpdate: (fields: UpdateQuestionFields) => void
};
export const QuestionModal_ = ({id, title, body, onUpdate}: PropType) => {
    let [currTitle, setCurrTitle] = useState(title);
    let [currBody, setCurrBody] = useState(body);

    const updateFields = (fields: Omit<UpdateQuestionFields, "id">) => {
        if (fields.title) {
            setCurrTitle(fields.title);
        }
        if (fields.body) {
            setCurrBody(fields.body);
        }
        onUpdate({id, ...fields});
    };

    return (
        <StyledDiv>
            <ModifiableField onUpdate={(newTitle) => updateFields({title:newTitle})} updateField={currTitle} renderField={<h3>{currTitle}</h3>} />
            <ModifiableField onUpdate={(newBody) => updateFields({body:newBody})} updateField={currBody} renderField={<p>{currBody}</p>} />
        </StyledDiv>
    );
};

const mapDispatchToProps = (dispatch: (action: QuestionAction) => void) => {
    return {
        onUpdate: (fields: UpdateQuestionFields) => {
            dispatch({type:QuestionActionType.UPDATE, ...fields});
        }
    };
};

export const QuestionModal = connect(null, mapDispatchToProps)(QuestionModal_);
