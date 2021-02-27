import { render } from '@testing-library/react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './index.module.css';

class Figure extends Component {

  constructor(props) {
    super(props);
    this.state = {

       k: null,
       yourcount: 0,
       compcount: 0     

    }
  }

  clickC = () => {

      console.log(' начало твой счет ' +this.state.yourcount)
      console.log('вы выбрали ' +this.props.value)
      let m = ['stone','scissors','paper'];   
      let n = m[Math.floor(Math.random()*m.length)];
      console.log('соперник выбрал ' +n)
      if (this.props.value === n) {console.log('ничья')} 
      else if (this.props.value === 'stone' && n === 'scissors') {this.setState({ yourcount: this.state.yourcount + 1 }) }
      else if (this.props.value === 'stone' && n === 'paper') {console.log('comp win')}
      else if (this.props.value === 'scissors' && n === 'paper') {this.setState({ yourcount: this.state.yourcount + 1 }) }
      else if (this.props.value === 'scissors' && n === 'stone') {console.log('comp win')  }
      else if (this.props.value === 'paper' && n === 'scissors') {console.log('comp win')}
      else if (this.props.value === 'paper' && n === 'stone') {this.setState({ yourcount: this.state.yourcount + 1 }) }
      console.log('конец твой счет ' +this.state.yourcount)

  }

  billHandler = () => {
    
  }

  

  render(
  
    )  {

    return (
      <div className={styles.Element} 
            onClick={this.clickC} >
            {this.props.value}
      </div>


      
    )
  }
}

function Bill() {

  render() {
    return (
      <div>
      <p>{props.y}</p>
      <p>{props.c}</p>
      </div>
    )
  }

}



class Choose extends Component {


  renderCard(i) {
    
    return <Figure value={i}/>
  }

  clickCard(i) {
 
   
  }

  render() {
    return <div className={styles.Choose}>
          {this.renderCard('stone')}
          {this.renderCard('scissors')}
          {this.renderCard('paper')}
          <p>you choose </p>
          </div>
  }
}





ReactDOM.render(
  <Choose />,
  document.getElementById('root')
);