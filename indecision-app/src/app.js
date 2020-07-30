console.log("App.js is running")

// if statements
// ternary operators
// logical and operator

// JSX - JavaScript XML
var application = {
    title: 'Askaban',
    subtitle: "You don't know nothing!",
    options: ['One', 'Two']
}

var template = (
    <div>
        <h1>{application.title}</h1>
        {application.subtitle && <p>{application.subtitle}</p>}
        <p>{(application.options.length) > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item tw2o</li>
        </ol>
    </div>
);

var user = {
    name: 'Bruno',
    age: 18,
    location: 'Brazil'
}

function getLocation(location){
    if (location){
        return <p>Location: {location}</p>;
    }
}

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

//var template = React.createElement("p", {id: "id"}, "This is JSX from app.js!");
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
