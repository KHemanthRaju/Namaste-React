import React from 'react';
import ReactDOM from 'react-dom';

// React-Element
const header1 = (
    <h1 id="title1" key="h2">
        Namaste react Header 1
    </h1>
);

const header2 = (
    <h1 id="title2" key="h3">
        Namaste react Header 2
    </h1>
);

const header3 = (
    <h1 id="title3" key="h4">
        Namaste react Header 3
    </h1>
);

const container = (
    <div id="container">
        {header1}
        {header2}
        {header3}
        Namaste React container using JSX
    </div>
)

//Nested header Element using React.createElement
const header4 = React.createElement(
    "h1",
    {
        id : "title4"
    },
    "Namaster header4 using React.createElement"
);
const header5 = React.createElement(
    "h1",
    {
        id : "title5"
    },
    "Namaster header5 using React.createElement"
);
const header6 = React.createElement(
    "h1",
    {
        id : "title6"
    },
    "Namaster header6 using React.createElement"
);
const container2 = React.createElement(
    "div",
    {
        id : "container",
        className : "title"
    },
    [header4,header5,header6]
);

//Nested Header elements using JSX
const container3 = (
    <div className="title" id="container">
        <h1>Namaste react Header 1</h1>
        <h1>Namaste react Header 2</h1>
        <h1>Namaste react Header 3</h1>
    </div>
)
// React.createElement => Object => HTML(DOM)

//React Component
// Functional Component
// Name of the component starts with Capital letter
// Rendering react element - {header1}
// Rendering React Functional Compoent - <HeaderComponent/>

const HeaderComponent = () => {
    return (
        <div className="title" id="container">
            <h1 bold style={{color:'red'}}>Namaste react Header 1</h1>
            <h1 strong style = {{color:'green'}}>Namaste react Header 2</h1>
            <h1 italic style ={{color:'blue'}}>Namaste react Header 3</h1>
        </div>
    );
}

const SubComponent = () => {
    return <p>SubComponent</p>
}
const MainComponent = () => {
    return(
        <div>
            <p>Main Component</p>
            <SubComponent/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<MainComponent/>);