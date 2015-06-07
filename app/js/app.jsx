var React = require("react");
var MyComponent = require('./components/MyComponent.jsx');

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log("Test");
    }

    render() {
        return (
            <div>
                <MyComponent />
            </div>
        );
    }
}

React.render(<App/>, document.body);