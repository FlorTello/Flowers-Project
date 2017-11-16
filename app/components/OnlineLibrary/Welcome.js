import React from 'react'

import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'

const style = {
  container : {
    height: '100vh',
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'space-around',
    'align-items': 'center',
    background:'-webkit-linear-gradient(left,rgba(255,0,0,0),rgba(255,0,0,1))', /*Safari 5.1-6*/
    background:'-o-linear-gradient(right,rgba(255,0,0,0),rgba(255,0,0,1))', /*Opera 11.1-12*/
    background:'-moz-linear-gradient(right,rgba(255,0,0,0),rgba(255,0,0,1))', /*Fx 3.6-15*/
    background:'linear-gradient(to bottom right, red, yellow)', /*Standard*/
  },
  frase : {
    'font-size': '6rem',
    color: 'white',
    'text-align': 'center',
  }

}

const Welcome = ()=> (
  <div container style = {style.container}>
    <img src = "https://cdn0.iconfinder.com/data/icons/Android-R2-png/512/Books-Android-R.png"/>
    <div style = {style.frase}>
      <h4>KEEP</h4>
      <h4>CALM</h4>
      <h6>AND</h6>
      <h4>READ</h4>
      <h4>BOOKS</h4>
    </div>
  </div>
);

export default Welcome;
