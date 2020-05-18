import React                   from 'react';
import styled                  from "styled-components";
import {connect}               from "react-redux";
import {RootState}             from "./reducers";
import {QuestionsPage}         from "./pages/QuestionsPage";
import {QuestionPage}          from "./pages/QuestionPage";
import {QuestionType}          from "./reducers/questions";

const AppStyled = styled.div`
    width: 30%;
    margin: 5px;
`;

type PropType = {
    selectedQuestion?: QuestionType
};
const App_ = ({selectedQuestion}: PropType) => {
  return (
      <AppStyled>
          {!selectedQuestion ?
              <QuestionsPage /> :
              <QuestionPage {...selectedQuestion} />}
      </AppStyled>
  );
};

const mapStateToProps = (state: RootState) => {
    console.log(state);
    return {
        selectedQuestion: state.questions.find((question) => {
            return question.id === state.selectedQuestion;
        })
    };
};

export const App = connect(mapStateToProps)(App_);
