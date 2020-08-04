console.log("App.js is running")

// if statements
// ternary operators
// logical and operator

// JSX - JavaScript XML
const application = {
    title: 'Askaban',
    subtitle: "You don't know nothing!",
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if(option) {
        application.options.push(option);
        e.target.elements.option.value = '';
    }

    renderAppOption();
};

const removeAll = () => {
    application.options = []; 
    renderAppOption();
} 

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

const appRoot = document.getElementById('app');

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * application.options.length);
    const option = application.options[randomNum];
    alert(option);
};

const renderAppOption = () =>{
    const template = (
        <div>
            <h1>{application.title}</h1>
            {application.subtitle && <p>{application.subtitle}</p>}
            <p>{(application.options.length) > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{application.options.length}</p>
            <ol>
                {
                    application.options.map((n) => {
                        return <li key={n}>{n}</li>
                    })
                }
            </ol>
            <button disabled={!application.options.length} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove all</button>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    );
    ReactDOM.render(template,appRoot);
};


renderAppOption();
