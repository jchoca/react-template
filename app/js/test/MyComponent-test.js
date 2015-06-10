// Create a fake global `window` and `document` object:
require('./test_helpers/testdom')('<html><body></body></html>');

// This component has no dependencies
global.reactModulesToStub = [];

var assert = require('assert');

describe('MyComponent', function() {
  it('interpolates the message property', function() {
    var React = require('react/addons');
    var MyComponent = require('../components/MyComponent.jsx');
    var TestUtils = React.addons.TestUtils;

    // Render a checkbox with label in the document
    var component = TestUtils.renderIntoDocument(
      React.createElement(MyComponent, {name: "Test"})
    );

    // Verify that the content was interpolated
    var div = TestUtils.findRenderedDOMComponentWithTag(component, 'div');
    assert.equal(div.getDOMNode().textContent, 'Hello Test');
  });
});