import React from 'react';
 
class Row extends React.Component {
  

  render() {
    const data=this.props.submittedData
    return (
      <div>
   <table border="1">
     <thead>
       <tr>
         <td>#</td>
         <td>name</td>
         <td>address</td>
         <td>message</td>
         <td>delete</td>
       </tr>
     </thead>
     {data.map((item,index)=>{
    return(
      <tr>
     <td>{index+1}</td>
      <td>{item.name}</td>
      <td>{item.address}</td>
      <td>{item.message}</td>
      <td><button onClick={this.props.remove.bind(this,index)}>delete</button></td>
    </tr>
    )
     })
    }
   </table>
      </div>
    )
  }
}
 
export default Row;