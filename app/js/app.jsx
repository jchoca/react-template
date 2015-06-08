var React = require("react");
var MyComponent = require('./components/MyComponent.jsx');
var MyOtherComponent = require('./components/feature/MyOtherComponent.jsx');

class App extends React.Component {
    render() {
        return (
            <div>
                <MyOtherComponent />
                <MyComponent name="World" />
            </div>
        );
    }
}

React.render(<App/>, document.body);