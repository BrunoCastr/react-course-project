'use strict';

var detail = false;

var appRoot = document.getElementById('app');

var showDetails = function showDetails() {
    detail = !detail;
    renderAppOption();
};

var renderAppOption = function renderAppOption() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { id: 'button', onClick: showDetails },
            detail ? 'Hide details' : ' Show details'
        ),
        detail && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                { id: 'detail' },
                'Hey. These are some details you can now see!'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderAppOption();
