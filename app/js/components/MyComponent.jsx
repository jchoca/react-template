var React = require('react');

export default class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log("My Component");
    }

    render() {
        return <div>My Component</div>;
    }
}