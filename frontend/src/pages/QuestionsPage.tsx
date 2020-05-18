import {AddQuestion}  from "../components/AddQuestion";
import {QuestionList} from "../components/QuestionList";
import React          from "react";

export const QuestionsPage = () => {
    return (
        <div>
            <AddQuestion />
            <QuestionList />
        </div>
    );
};
