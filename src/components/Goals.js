import React from 'react'

const Goals = () => {

    // dynamic input fields?
    // function to ask these questions for every goal
    // make this much simpler with less code


    // 1. Think about where you see yourself in 10 years and what you want out of life in the longterm, 
    // think about these goals and write a paragraoh about them
    // 2. How can you break this paragraph down into 5 managable goals? Fill them out below.
    // 

    const questions = [
        // {question: /"},
        {question: "How can you break this down for the next 10 years?"}, 
        {question:  "And for the next 5 years?"},
        {question: "And for the next year?"},
        {question: "What are things you can do every month to help achieve these goals?"},
        {question: "And what about every week?"},
        {question: "And what about daily?"}

        
    ]




    return (
        <div>

            <div id="goalForm">
                <div className="goalSection">
                    <p className="goalQuestion">What are your long term overall life goals?</p>
                    <textarea id="longTermGoals"></textarea>

                </div>
                <div className="goalSection">
                    <p className="goalQuestion">How can you break this down for the next 10 years?</p>
                    <textarea id="10YearGoals"></textarea>

                </div>
                <div className="goalSection">
                    <p className="goalQuestion">And for the next 5 years?</p>
                    <textarea id="5YearGoals"></textarea>

                </div>
                <div className="goalSection">
                    <p className="goalQuestion">And for the next year?</p>
                    <textarea id="5YearGoals"></textarea>

                </div>
                <div className="goalSection">
                    <p className="goalQuestion">What are things you can do every month to help achieve these goals?</p>
                    <textarea id="monthlyGoals"></textarea>

                </div>
                <div className="goalSection">
                    <p className="goalQuestion">And what about every week?</p>
                    <textarea id="weeklyGoals"></textarea>

                </div>
                <div className="goalSection">
                    <p className="goalQuestion">And what about daily?</p>
                    <textarea id="dailyGoals"></textarea>

                </div>

                
            </div>

        </div>
    )
}

export default Goals