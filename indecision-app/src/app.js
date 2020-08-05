class IndecisionApp extends React.Component {
    render(){
        const title = "Indecision";
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Thing one', 'Thing Two', 'Thing Three'];
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options  options = {options}/>
                <AddOption title = {title}/>
            </div>
        );
    }
}

class Header extends React.Component {
    render(){
        console.log(this.props.title)
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
};

class Action extends React.Component {
    handlePick(){
        alert('handlePick');
    }
    render(){
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component{
    handleRemoveAll(){
        alert('handleRemoveAll')
    }
    render(){
        return(
            <div>
                <button onClick={this.handleRemoveAll}>Remove all</button>
                {
                    this.props.options.map((option) => 
                        <Option key={option} optionText={option} />
                    )
                }
                
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}

class AddOption extends React.Component {
    handleAddOption (e) {
        e.preventDefault();
        const value = e.target.elements.option.value.trim();
        if(value){
            alert('Have a text!');
        }
    }
    render(){
        return(
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option"/>
                <button>Send</button>
            </form>
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