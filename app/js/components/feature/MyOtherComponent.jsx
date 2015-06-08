var React = require('react');

export default class MyOtherComponent extends React.Component {
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