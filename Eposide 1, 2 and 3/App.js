import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('h2', {id: 'heading'}, 'Hello World from React');
const react = ReactDOM.createRoot(document.getElementById('react'));
react.render(heading);

const element = <span>React Element&nbsp;</span>;
const JsxHeading = () => (
    <h1 id='heading' tabIndex='1'>
        {element}
        Namaste React using JSX 🚀
    </h1>
);
const HeadingComponent = () =>{
    return (
        <div id='container'>
            <JsxHeading />
            <h1>Namaste React Functional Component</h1>
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("reactJXS"));
root.render(<HeadingComponent />);