var React = require('react');

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello " + props.name
        };
    }

    render() {
        return (
            <div>
                {this.state.message}
            </div>
        );
    }
}

module.exports = MyComponent;