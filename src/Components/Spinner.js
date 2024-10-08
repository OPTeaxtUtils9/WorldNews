import React, { Component } from 'react'
import loading from './loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center " style={spinnerStyle} >
        <img src={loading} alt="loading" />
        
      </div>
    )
  }
}

const spinnerStyle = {
  display: 'flex',
  justifyContent: 'center', // Centers horizontally
  alignItems: 'center', // Centers vertically
  height: '100vh', // Takes up full viewport height

};
