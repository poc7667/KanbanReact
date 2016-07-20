import React from 'react';

class Hello extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            username: ''
        }
    }
    setUsername(evt){
        console.log(evt.target.value);
        this.setState({
            username: evt.target.value
        })
    }
    render(){
        var message = "";
        if(this.state.username){
            message = (
                <h1> Hello {this.state.username}</h1>
                )
        }
        return (
                <div>
                    <h1> Input your name </h1>
                    <p><input type="text" 
                    value={this.state.username}
                    onChange={this.setUsername.bind(this)}/> </p>
                    {message}
                </div>
            );
    }

}

export default Hello;