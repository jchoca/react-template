// Create a fake global `window` and `document` object:
require('../test_helpers/testdom')('<html><body></body></html>');

// Replace BigComplicatedComponent.js with a stub component.
global.reactModulesToStub = [];

var assert = require('assert');

describe('MyComponent', function() {
  it('interpolates the message property', function() {
    var React = require('react/addons');
    var MyComponent = require('./MyComponent.jsx');
    var TestUtils = React.addons.TestUtils;

    // Render a checkbox with label in the document
    var component = TestUtils.renderIntoDocument(
      <MyComponent />
    );

    // Verify that it's Off by default
    var div = TestUtils.findRenderedDOMComponentWithTag(component, 'div');
    console.log(div);
    // assert.equal(label.getDOMNode().textContent, 'Off');

    // Simulate a click and verify that it is now On
    // var input = TestUtils.findRenderedDOMComponentWithTag(
    //   checkbox, 'input');
    // TestUtils.Simulate.change(input);
    // assert.equal(label.getDOMNode().textContent, 'On');
  });
});