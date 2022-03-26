import React from 'react';

const Question = () => {
    return (
        <div className='question-area my-4'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="single-question mb-3">
                            <h3>How react works?</h3>
                            <p>React is a JavaScript library. React maintain a tree and the tre able to see the changes on the components. It have it's own DOM and it's called Virtual DOM. React compare Browser DOM and Virtual DOM and see the changes. After that it find the changes and update the Browser DOM. It works without loading the page. React works Component-Based and it helps us create complex UI easily. It can update content easily using the same component. Also React is Declarative and react component has a lifecycle.</p>
                        </div>
                        <div className="single-question mb-3">
                            <h3>Props vs State?</h3>
                            <p>In React props are read only and state can change asynchronous. No option to change or modified the props in React. On the other hand we can modified the state using this.state. Props performance is batter and state is locally scoped. props can make any components reusable and state can't make component reuseable. Props allow to send data one component to other component as a parameter. But state only contain the component information.</p>
                        </div>
                        <div className="single-question mb-3">
                            <h3>How useState works?</h3>
                            <p>In React useState is a hook. There are two element is UseState, first is state variable and last is functional component. UseState allow us to have state variables in a function components. We can pass a initial value and using the function we can update the value easily. We can use another function to update the value. React can easily track this value and up-date the data easily. There are some magic work in the background for the complete process.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;