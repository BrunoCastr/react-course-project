console.log("App.js is running")

// JSX - JavaScript XML
var application = {
    title: 'Askaban',
    subtitle: "You don't know nothing!"
}

var template = (
    <div>
        <h1>{application.title}</h1>
        <p>{application.subtitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var user = {
    name: 'Bruno',
    age: 23,
    location: 'Brazil'
}
var userName = 'Deko';
var userAge = 23;
var userLocation = 'Brazil';
var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

//var template = React.createElement("p", {id: "id"}, "This is JSX from app.js!");
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
