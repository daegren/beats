var React = require('react');

class BeatsApp extends React.Component {
  render() {
    return (
      <div>
        Test from react.
      </div>
    );
  }
}

module.exports = function(mountElement) {
  React.render(<BeatsApp />, mountElement);
};
