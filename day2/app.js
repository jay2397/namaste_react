/*
 *
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev abd Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 *
 *
 *
 * Transitive Dependencies
 */


// creating react element and rendering in root_react

// HMR - Hot module reloading - keeps refreshing the page based on any change
// File Watcher is looking for any chnage in any file by using file wathcing alogorith and it is written in c++

//importing react and react-dom from node_modules

import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("h1",{id:"title"},"Hello World");
const root_react = ReactDOM.createRoot(document.getElementById("root_react")); 
root_react.render(heading);
const heading1 = React.createElement("h1" ,{id:"title1"}, "Heading 1");
const heading2 = React.createElement("h2" ,{id:"title2"}, "Heading 2");
const root = ReactDOM.createRoot(document.getElementById("root"));
const heading_main = React.createElement("div", {id:"title"} , [heading1,heading2]);
root.render(heading_main);

// const heading = React.createElement("h1", {id: "title"}, "Namaste React using React");
// const root_react = ReactDOM.createRoot(document.getElementById("root_react"));
// root_react.render(heading);