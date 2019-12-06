import React, { Component } from 'react'

export default class Message extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             msg:"",
             name:"",
             email:"gmail.com"
        }
    }
    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value        })
    }
    saveValues=(event)=>{
    event.preventDefault();
let tb=document.getElementById("tab");
let tP=document.createElement("tbody")
let tr=document.createElement("tr");
let cell1=document.createElement("td");
let cell2=document.createElement("td");
let cell3=document.createElement("td");
cell1.innerText=this.state.name
cell2.innerText=this.state.email
cell3.innerText=this.state.msg
tP.appendChild(tr);
tr.appendChild(cell1);
tr.appendChild(cell2);
tr.appendChild(cell3);
tb.appendChild(tP);
    }
selectgender=(event)=>{
    this.setState({
        [event.target.name]:event.target.value })

}
    
    render() {
        return (
            <div>
               <form onSubmit={this.saveValues}>
                   <input name="name" value={this.state.name} onChange={this.handleChange}/>
                   <input name="email" value={this.state.email} onChange={this.handleChange}/>
                   <input name="msg" value={this.state.msg} onChange={this.handleChange}/>
                   <button>add </button>
                   </form > 
                   <select onChange={this.selectgender}  value={this.state.gender}name="gender" >
                       <option name="male">male</option>
                       <option name="ffemale">female</option>
                     
                   </select>
                    <table id="tab">
                        <thead><td>name</td>
                        <td>email</td>
                        <td>message</td>
                         </thead>

      </table>
            </div>
        )
    }
}
