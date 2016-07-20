import React from 'react';

class Hello extends React.Component{
    constructor(){
        super();
        this.state = {
            alias: 'Standford'
        }
        this.clickCallBack = this.clickCallBack.bind(this);
    }
    clickCallBack(){
        this.setState({
            alias: "YOYOYO"
        })
    }
    render(){
        const name = "VIDEO INPUT";
        return (<div>
                    <h1> Input your name </h1>
                    <p><input type="text" 
                    onChange={this.setUsername.bind(this)}/> </p>
            </div>);
    }

}

export default Hello;