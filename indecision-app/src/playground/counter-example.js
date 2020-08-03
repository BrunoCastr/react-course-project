let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};


//var template = React.createElement("p", {id: "id"}, "This is JSX from app.js!");
const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => {count++;renderCounterApp();}}>+1</button>
            <button onClick={() => {count--;renderCounterApp();}}>-1</button>
            <button onClick={() => {count = 0;renderCounterApp();}}>reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();