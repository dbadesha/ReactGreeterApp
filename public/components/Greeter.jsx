var React = require('react');
var GreeterForm = require('GreeterForm');
var GreeterMessage = require('GreeterMessage');
var GreeterTime = require('GreeterTime');

var Greeter = React.createClass({
        getDefaultProps: function(){
          return {
            name: "Sir",
            message: "Welcome, This is default greeting message. Good to see you"
           };
        },
        getInitialState: function(){
          return {
            name: this.props.name,
            message: this.props.message
          };
        },
        handleNewData: function(updates){
        this.setState(updates);
        },
        //Greeter Render
        render: function () {
            var name = this.state.name;
            var message = this.state.message;
            return(
            <div>
            <GreeterMessage name ={name} message={message} />
            <GreeterForm onNewData={this.handleNewData}/>
            <GreeterTime date={new Date()}/>
            </div>
          );
          }
  });

  module.exports= Greeter;
