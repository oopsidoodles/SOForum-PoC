import React, {ChangeEvent} from 'react';
import {useState}           from "react";
import styled                 from "styled-components";
import {Button, Input} from "reactstrap";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
`;

const ClickableDiv = styled.div`
    flex-grow: 1;
    cursor: pointer;
`;

const StyledTextField = styled(Input)`
    flex-grow: 1;
`;

const StyledButton = styled(Button)`
    width: 20%;
`;

type PropType = {
    updateField: any,
    renderField: any,
    onUpdate: (newVal: any) => void
};

export const ModifiableField = ({updateField, renderField, onUpdate}: PropType) => {
    let [editing, setEditing] = useState(false);
    let [value, setValue] = useState(updateField);
    let [updateFieldValue, setUpdateFieldValue] = useState('');

    const startEditing = () => {
        setUpdateFieldValue(value);
        setEditing(true);
    };

    const stopEditing = (save: boolean) => {
        if (save) {
            setValue(updateFieldValue);
            onUpdate(updateFieldValue);
        }
        setEditing(false);
    };

    return (
        !editing ?
            <StyledDiv>
                <ClickableDiv onClick={() => {startEditing()}}>{renderField}</ClickableDiv>
            </StyledDiv> :
            <StyledDiv>
                <StyledTextField type="text" value={updateFieldValue} onChange={(e: ChangeEvent<HTMLInputElement>) => {setUpdateFieldValue(e.target.value)}} />
                <StyledButton type="button" onClick={() => {stopEditing(false)}}>CANCEL</StyledButton>
                <StyledButton type="button" onClick={() => {stopEditing(true)}}>SAVE</StyledButton>
            </StyledDiv>
    );
};
