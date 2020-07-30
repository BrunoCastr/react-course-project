"use strict";

console.log("App.js is running");

// JSX - JavaScript XML
var application = {
    title: 'Askaban',
    subtitle: "You don't know nothing!"
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        application.title
    ),
    React.createElement(
        "p",
        null,
        application.subtitle
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

var user = {
    name: 'Bruno',
    age: 23,
    location: 'Brazil'
};
var userName = 'Deko';
var userAge = 23;
var userLocation = 'Brazil';
var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    React.createElement(
        "p",
        null,
        "Location: ",
        user.location
    )
);

//var template = React.createElement("p", {id: "id"}, "This is JSX from app.js!");
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
