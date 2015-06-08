// // Create a fake global `window` and `document` object:
// require('./test_helpers/testdom')('<html><body></body></html>');

// // Replace BigComplicatedComponent.js with a stub component.
// global.reactModulesToStub = [
//   'MyComponent.jsx',
//   'MyOtherComponent.jsx'
// ];

// var assert = require('assert');

// describe('App', function() {
//   it('changes the text after click', function() {
//     var React = require('react/addons');
//     var App = require('./app.jsx');
//     var TestUtils = React.addons.TestUtils;

//     // Render a checkbox with label in the document
//     var appComponent = TestUtils.renderIntoDocument(
//       <App />
//     );

//     // Verify that it's Off by default
//     var label = TestUtils.findRenderedDOMComponentWithTag(appComponent, 'App');
//     assert.equal(label.getDOMNode().textContent, 'Off');

//     // Simulate a click and verify that it is now On
//     var input = TestUtils.findRenderedDOMComponentWithTag(
//       checkbox, 'input');
//     TestUtils.Simulate.change(input);
//     assert.equal(label.getDOMNode().textContent, 'On');
//   });
// });