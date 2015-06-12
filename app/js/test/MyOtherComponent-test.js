// Create a fake global `window` and `document` object:
require('./helpers/testdom')('<html><body></body></html>');

// This component has no dependencies
global.reactModulesToStub = [];

var assert = require('assert');

describe('MyOtherComponent', function() {
  it('interpolates the message state param', function() {
    var React = require('react/addons');
    var MyComponent = require('../components/feature/MyOtherComponent.jsx');
    var TestUtils = React.addons.TestUtils;

    // Render a checkbox with label in the document
    var component = TestUtils.renderIntoDocument(
      React.createElement(MyComponent)
    );

    // Verify that the content was interpolated
    var div = TestUtils.findRenderedDOMComponentWithTag(component, 'h1');
    assert.equal(div.getDOMNode().textContent, 'React Template');
  });
});