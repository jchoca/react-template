var React = require("react");
var MyComponent = require('./components/MyComponent.jsx');

class App extends React.Component {
    render() {
        return (
            <div>
                <MyComponent name="World" />
            </div>
        );
    }
}

React.render(<App/>, document.body);