let detail = false;

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

renderAppOption();