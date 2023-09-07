import React from 'react';

const QuestionAns = () => {
    return (
        <div>
            <h3>How react works?</h3>
            <p>React is one of the most popular JavaScript library for mobile and web application development.Created by Facebook.React has reuseable JS snippets which is called components.With the help of these components we make or build UI(For user interface).Though react is a library but it not a frameWork.We can install react using npx create-react-app my-app command in terminal. React is very powerful.Because we can have our own tag using react.While using react we have to use components.Inside the components we can make other components that help us to create web application.React has virtual DOM.JSX is a JavaScript syntax extension used in React element creation   </p>
            <h3>Difference between props and state?</h3>
            <p>Porps means properties.We use props to send data from a parent component to child component.Props is one dimensional. Mean we can send data from parent component to child component but we can't receive data from props or child to parent.Props are immutable,which mean we can not change it after passed to a component.Props is read only. <br></br>
                State represent the internal state of a component.We can change state inside the component.Actually state is an object.When the state of a component changes, React will re-render the component and its children.State is mutable mean we can change it using useState.State is use to track the change of date.
            </p>
        </div>
    );
};

export default QuestionAns;