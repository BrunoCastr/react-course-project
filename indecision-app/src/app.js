console.log("App.js is running")

// JSX - JavaScript XML
var template = <h1>Indecision App</h1>;
//var template = React.createElement("p", {id: "id"}, "This is JSX from app.js!");
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
