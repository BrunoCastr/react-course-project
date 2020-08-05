class IndecisionApp extends React.Component {
    render(){
        return (
            <div>
                <Header />
                <Action />
                <Options></Options>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        );
    }
};

class Action extends React.Component {
    render(){
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component{
    render(){
        return(
            <div>Options component here <Option /> </div>
           
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>Option component here </div>
        );
    }
}

class AddOption extends React.Component {
    render(){
        return(
            <input></input>
        );
    }
}

const jsx = (
    <div>
        <h1>Title</h1>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
);

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));