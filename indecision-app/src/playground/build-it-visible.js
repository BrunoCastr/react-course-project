class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.showDetails = this.showDetails.bind(this);
        this.state = {
            detail: false
        };
    }

    showDetails(){
        this.setState((prevState) => {
            return {
                detail: !prevState.detail
            }
        })
    }
    
    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.showDetails}>{this.state.detail ? 'Hide details' : 'Show details'}</button>
                {(this.state.detail) && <div><p>Here have some details my friend!</p></div>}
            </div>
        );
    };
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

{/*let detail = false;

const appRoot = document.getElementById('app')

const showDetails = () => {
    detail = !detail;
    renderAppOption();
}


const renderAppOption = () =>{
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button id="button" onClick={showDetails}>{detail ? 'Hide details' : ' Show details'}</button>
            {(detail) && (<div><p id="detail">Hey. These are some details you can now see!</p></div>)}
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderAppOption();*/}