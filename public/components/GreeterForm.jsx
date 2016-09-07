var React = require('react');

var GreeterForm = React.createClass({
      onSubmission: function(e){
        e.preventDefault();
        var updates={};
        var name = this.refs.name.value;
        var message = this.refs.message.value;
        if(name.length > 0 ){
          this.refs.name.value = '';
          updates.name=name;
        }
        if(message.length > 0 ){
          this.refs.message.value = '';
          updates.message= message;
        }
        this.props.onNewData(updates);

      },
      render: function(){
        return(
          <form onSubmit = {this.onSubmission}>
            <div>
            <input type = "text" ref = "name" placeholder="Please Enter Your Name"/><br/>
            <textarea ref = "message" placeholder="Please Enter Your Message" rows="20" cols="50"/><br/>
            <button>Submit</button>
            </div>
          </form>
        );
      }
});

module.exports = GreeterForm;
