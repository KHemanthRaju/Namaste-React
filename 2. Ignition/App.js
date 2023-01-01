/*
*
*
* HMR - Hot Module Replacement 
* File Watcher Algorithm - written in C++
* Image-Optimization
* MINIFY
* BUNDLING
* Cleaning our code
* Dev and Production Build
* Caching while development
* Compression
* Compatible with older version of browser
* HTTPS on dev
* Consistent Hashing Algorithm
* 
* 
* 
*
* Transitive Dependencies
*/


import React from 'react';
import ReactDOM from 'react-dom/client';

const header1 = React.createElement(
    "h1",
    {
        id:"title"
    },
    "This is first Heading"
)

const header2 = React.createElement(
    "h1",
    {
        id:"title"
    },
    "This is Second Heading"
)

const container = React.createElement(
    "div",
    {
        id:"container"
    },
    [header1,header2]
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
