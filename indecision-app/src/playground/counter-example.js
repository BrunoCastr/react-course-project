
let counter = 0;

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    handleAddOne(){
        counter++;
    }
    handleMinusOne(){
        counter--;
    }
    handleReset(){
        counter=0;
    }
    
    render() {
        return (
            <div>
                <h1>Count: {counter}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

{/*let count = 0;
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

renderCounterApp();*/}