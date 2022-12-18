import React, { Component } from 'react'
import * as Icons  from "react-icons/fi";

class Footer extends Component {
  render() {
    return (
      <footer>
        Coded by&nbsp;<a href="https://github.com/MrAhito" target="_blank" rel="noreferrer" >MrAhito</a>&nbsp;with&nbsp;<Icons.FiCoffee />&nbsp;&&nbsp;<Icons.FiHeart />
      </footer>
    )
  }
}

export default Footer