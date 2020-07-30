"use strict";

console.log("App.js is running");

// JSX - JavaScript XML
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Indecision App"
    ),
    React.createElement(
        "p",
        null,
        "This is some info"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item one"
        ),
        React.createElement(
            "li",
            null,
            "Item two"
        )
    )
);

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Bruno Lima"
    ),
    React.createElement(
        "p",
        null,
        "Age: 23"
    ),
    React.createElement(
        "p",
        null,
        "Location: Brazil"
    )
);

//var template = React.createElement("p", {id: "id"}, "This is JSX from app.js!");
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
