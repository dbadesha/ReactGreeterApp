var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

setInterval(function(){
  ReactDOM.render(
      <Greeter/>,
      document.getElementById('app')
  )
}, 500);
