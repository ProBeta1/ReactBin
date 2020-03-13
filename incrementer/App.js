import React from "react"

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            count : 0
        }
        this.handleClick = this.handleClick.bind(this)
    }   
    handleClick(){
        this.setState(prevState =>{
            return{
                count : prevState.count + 1
            }
        })
    
    }
    
    render(){
        if(this.state.count===10)
            return(
                <div className = "box">
                     <h2>You are really doin great !! Keep It up </h2>
                     <h1>{this.state.count}</h1>
                     <button className = "bt" onClick = {this.handleClick}>Increment me</button>
                </div>
            )
        else if(this.state.count>12)
            return(
                <div className = "box">
                    <h3>You really dont have anything better to do ? </h3>
                    <h1>{this.state.count}</h1>
                    <button className = "bt" onClick = {this.handleClick}>Increment me</button>
                </div>
            )
        return(
            <div className = "box">
                <h1>{this.state.count}</h1>
                <button className = "bt" onClick = {this.handleClick}>Increment me</button>
            </div>
        )
    }
     
}

export default App;

