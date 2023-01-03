// creating react element and rendering in root_react

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



