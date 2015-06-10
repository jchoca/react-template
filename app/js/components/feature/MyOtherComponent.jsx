var React = require('react');

class MyOtherComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            message: "React Template"
        };
    }

    render() {
        return <h1>{this.state.message}</h1>;
    }
}

module.exports = MyOtherComponent;