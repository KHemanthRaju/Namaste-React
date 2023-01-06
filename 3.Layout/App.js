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

const MainHeader = () => {
    return(
        <div className='headerBar'>
            <div id='logo'>
                <img src='logo.png' className="logo" alt="logo"/>
            </div>
            <div id='search'>
                <input type='text'  className='search' placeholder="Search..." autofocus="true"/>
            </div>
            <div id='avatar'>
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 112c-48.6 0-88 39.4-88 88C168 248.6 207.4 288 256 288s88-39.4 88-88C344 151.4 304.6 112 256 112zM256 240c-22.06 0-40-17.95-40-40C216 177.9 233.9 160 256 160s40 17.94 40 40C296 222.1 278.1 240 256 240zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-46.73 0-89.76-15.68-124.5-41.79C148.8 389 182.4 368 220.2 368h71.69c37.75 0 71.31 21.01 88.68 54.21C345.8 448.3 302.7 464 256 464zM416.2 388.5C389.2 346.3 343.2 320 291.8 320H220.2c-51.36 0-97.35 26.25-124.4 68.48C65.96 352.5 48 306.3 48 256c0-114.7 93.31-208 208-208s208 93.31 208 208C464 306.3 446 352.5 416.2 388.5z"/></svg>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<MainHeader/>);