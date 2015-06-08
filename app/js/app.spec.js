require('./test_helpers/testdom')('<html><body></body></html>');
var React = require('react');
var ReactAddons = require('react/addons');
var ReactTestUtils = React.addons.TestUtils;
var _ = require('lodash');
var defaultProps = {};

function render(newProps, callback) {
    var props = _.merge(defaultProps, newProps)
    return React.renderComponent(Component(props), document.body, function() {
        if (typeof callback === 'function') setTimeout(callback)
    })
}