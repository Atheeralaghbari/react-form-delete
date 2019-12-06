import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div>
                  <form onSubmit={this.props.handleSubmit}>
          <input
            type="text"
            onChange={ this.props.handleChange}
            value={this.props.name}
            name="name"
          />
           <input
            type="text"
            onChange={ this.props.handleChange}
            value={this.props.address}
            name="address"
          />
          <input
            type="text"
            onChange={ this.props.handleChange}
            value={this.props.message}
            name="message"
          />
          <input type="submit"/>
        </form>
            </div>
        )
    }
}
