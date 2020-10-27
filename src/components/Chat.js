import React from 'react'
import "./Chat.css";

class Chat extends React.Component{

    constructor(){
        super();
        this.state = {
            toggle:false
        }
    }

    render(){
        return(
            <div>
                {
                  this.state.toggle ?
                  
                      <button className="chat_button" >SATRT CONVERSATION</button>
                  : null
                }
                <div className="chat" onClick={()=>{this.setState({toggle:!this.state.toggle})}}>
                <img className="chat_logo" src="./images/Sparrow_Bird.png" alt="chat_logo"/>
</div>

            </div>
        );
    }
}

export default Chat;

