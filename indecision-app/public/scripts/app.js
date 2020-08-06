'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VisibilityToggle = function (_React$Component) {
    _inherits(VisibilityToggle, _React$Component);

    function VisibilityToggle(props) {
        _classCallCheck(this, VisibilityToggle);

        var _this = _possibleConstructorReturn(this, (VisibilityToggle.__proto__ || Object.getPrototypeOf(VisibilityToggle)).call(this, props));

        _this.showDetails = _this.showDetails.bind(_this);
        _this.state = {
            detail: false
        };
        return _this;
    }

    _createClass(VisibilityToggle, [{
        key: 'showDetails',
        value: function showDetails() {
            this.setState(function (prevState) {
                return {
                    detail: !prevState.detail
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Visibility Toggle'
                ),
                React.createElement(
                    'button',
                    { onClick: this.showDetails },
                    this.state.detail ? 'Hide details' : 'Show details'
                ),
                this.state.detail && React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'p',
                        null,
                        'Here have some details my friend!'
                    )
                )
            );
        }
    }]);

    return VisibilityToggle;
}(React.Component);

ReactDOM.render(React.createElement(VisibilityToggle, null), document.getElementById('app'));

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
