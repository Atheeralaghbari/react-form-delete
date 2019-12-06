import React, { Component } from 'react'

import './App.css';
// import Message from './message.js';
import Row from './Row.js'
import Form from './Form.js'
export default class App extends Component {


  state = {
   
    name:"",
    address:"",
    message:"",
    submittedData: []
  }
 
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
remove=(index)=>{   
  const copyArray=Object.assign([],this.state.submittedData) 
  copyArray.splice(index,1)
this.setState( { submittedData: copyArray } )
}
 
  handleSubmit = event => {
    event.preventDefault()
    let formData = {name: this.state.name, address: this.state.address,message:this.state.message }
    let dataArray = this.state.submittedData.concat(formData)
    this.setState({submittedData: dataArray})
  }
 
  // listOfSubmissions = () => {
  //   return this.state.submittedData.map(function (data,index) {
  //     return(<tr>
  //           <td key={index+1}>{index+1}</td>
  //           <td>{data.firstName}</td>
  //           <td>{data.lastName}</td>
  //           <td><button onClick={e=>this.delete(this,index)}>delete</button></td>
  //         </tr>)

  //   })
  // }
  render() {
  return (
    <div className="App">
  <Form   handleSubmit={this.handleSubmit} handleChange={this.handleChange}  name={this.name} address={this.address} message={this.message}/>
  <Row  submittedData={this.state.submittedData} remove={this.remove}/>
    </div>
  )
  }
}