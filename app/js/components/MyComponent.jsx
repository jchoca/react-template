var React = require('react');

export default class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello " + props.name
        }
    }

    render() {
        return <div>{this.state.message}</div>;
    }
}