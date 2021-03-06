class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handlePick = this.handlePick.bind(this)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: [],
        }
    }
    handleDeleteOptions(){
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    
    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add item';
        } else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }
        this.setState((prevState)=>{
            return {
                options: prevState.options.concat([option])
            }
        })
    }

    handlePick(){
        alert(this.state.options[(Math.floor(Math.random() * this.state.options.length))])
    }

    render(){
        const title = "Indecision";
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0} handlePick = {this.handlePick}/>
                <Options  options = {this.state.options} handleDeleteOptions = {this.handleDeleteOptions}/>
                <AddOption title = {title} handleAddOption={this.handleAddOption}/>
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
    render(){
        return (
            <div>
                <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove all</button>
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
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption (e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        
        this.setState(() => {
            return {
                error: error
            }
        })
    }
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Send</button>
                </form>
            </div>
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