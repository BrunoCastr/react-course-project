"use strict";

console.log("App.js is running");

// if statements
// ternary operators
// logical and operator

// JSX - JavaScript XML
var application = {
    title: 'Askaban',
    subtitle: "You don't know nothing!",
    options: ['One', 'Two']
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        application.title
    ),
    application.subtitle && React.createElement(
        "p",
        null,
        application.subtitle
    ),
    React.createElement(
        "p",
        null,
        application.options.length > 0 ? 'Here are your options' : 'No options'
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
            "Item tw2o"
        )
    )
);

//const user = {
//    name: 'Bruno',
//    age: 18,
//    location: 'Brazil'
//}

//function getLocation(location){
//  if (location){
//        return <p>Location: {location}</p>;
//    }
//}

//const templateTwo = (
//    <div>
//        <h1>{user.name ? user.name : 'Anonymous'}</h1>
//        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//        {getLocation(user.location)}
//    </div>
//);

var count = 0;
var addOne = function addOne() {
    count++;
    console.log(count);
};
var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Count: ",
        count
    ),
    React.createElement(
        "button",
        { onClick: addOne },
        "+1"
    ),
    React.createElement(
        "button",
        { onClick: function onClick() {
                console.log('-1');
            } },
        "-1"
    ),
    React.createElement(
        "button",
        { onClick: function onClick() {
                console.log('reset');
            } },
        "reset"
    )
);

console.log(templateTwo);

//var template = React.createElement("p", {id: "id"}, "This is JSX from app.js!");
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
