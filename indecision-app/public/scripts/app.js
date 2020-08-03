"use strict";

console.log("App.js is running");

// if statements
// ternary operators
// logical and operator

// JSX - JavaScript XML
var application = {
    title: 'Askaban',
    subtitle: "You don't know nothing!",
    options: ['0']
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;

    if (option) {
        application.options.push(option);
        e.target.elements.option.value = '';
    }

    renderAppOption();
};

var removeAll = function removeAll() {
    application.options = [];
    renderAppOption();
};

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

var appRoot = document.getElementById('app');

var renderAppOption = function renderAppOption() {
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
            "p",
            null,
            application.options.length
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
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add option"
            ),
            React.createElement(
                "button",
                { onClick: removeAll },
                "Remove all"
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderAppOption();
