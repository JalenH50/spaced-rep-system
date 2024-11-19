'use client'

import { useState, useRef} from "react";
import {addNewCard} from '../../../App'

export default function Add_Cards({cards}){
    const [question, setQuestion] = useState()
    const [answer, setAnswer] = useState()
    const questionInputRef = useRef(null);
    const answerInputRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const questionValue = questionInputRef.current.value;
        const answerValue = answerInputRef.current.value;
        console.log(questionValue);
        console.log(answerValue);
    };

    return (
        <form onSubmit={handleSubmit} className='add-card-form'>
            <div>
                <p>Question</p>
                <input ref={questionInputRef} id="questionInput" type="text" />
            </div>
            <div>
                <p>Answer</p>
                <input ref={answerInputRef} id="answerInput" type="text" />
            </div>
            <button type='submit'>Submit</button>
        </form>
    );
}