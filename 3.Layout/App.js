import React from 'react';
import ReactDOM from 'react-dom';

// React-Element
const header1 = (
    <h1 id="title" key="h2">
        Namaste react
    </h1>
);
// React.createElement => Object => HTML(DOM)

//React Component
// Functional Component
// Name of the component starts with Capital letter
// Rendering react element - {header1}
// Rendering React Functional Compoent - <HeaderComponent/>

const HeaderComponent = () => {
    return (
        <div>
            {header1} 
            <h1>Namaste Header Component</h1>
        </div>
        
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>);