var React = require('react');


var GreeterTime= React.createClass({
      render: function(){
        return (
          <h1>Time is:{this.props.date.toTimeString()}</h1>
        );
      }
});

module.exports = GreeterTime;
