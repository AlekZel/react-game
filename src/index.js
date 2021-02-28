import { render } from '@testing-library/react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './index.module.css';

class Figure extends Component {

  //clickC = () => 

  //billHandler = () => {
    
  //}

  render()  {

    return (
      <div className={styles.Element} 
            onClick={() => this.props.clickCC()} >
            {this.props.value}
      </div>


      
    )
  }
}

function Bill(props) {
  
    return (
      <div>
      <p>{props.y}</p>
      <p>{props.c}</p>
      </div>
    )
  }

class Choose extends Component {

  constructor(props) {
    super(props);
    this.state = {

       k: null,
       yourcount: 0,
       compcount: 0,
       i: null     

    }
  }


  renderCard(i) {
    
    return <Figure value={i}
                    clickCC={() => this.clickCard(i)}/>
  }

  clickCard(i) {
  
      //this.setState({k: i})
      //remove comprender
      console.log(' начало твой счет ' +this.state.yourcount)
      console.log('вы выбрали ' +i)
      let m = ['stone','scissors','paper'];   
      let n = m[Math.floor(Math.random()*m.length)];
      console.log('соперник выбрал ' +n)
      if (i === n) {console.log('ничья')} 
      else if (i === 'stone' && n === 'scissors') {this.setState({ yourcount: this.state.yourcount + 1 }) }
      else if (i === 'stone' && n === 'paper') {this.setState({ compcount: this.state.compcount + 1 })    }
      else if (i === 'scissors' && n === 'paper') {this.setState({ yourcount: this.state.yourcount + 1 }) }
      else if (i === 'scissors' && n === 'stone') {this.setState({ compcount: this.state.compcount + 1 }) }
      else if (i === 'paper' && n === 'scissors') {this.setState({ compcount: this.state.compcount + 1 }) }
      else if (i === 'paper' && n === 'stone') {(this.setState({ yourcount: this.state.yourcount + 1 }))  }
      console.log('---конец твой счет--- ' +this.state.yourcount)
   
  }

  //compRenderCard(i) {
    
  //  return <Figure value={i}
  //                  clickCC={() => this.clickCard(i)}/>
  //}



  render() {
    return <div className={styles.Choose}>
          {this.renderCard('stone')}
          {this.renderCard('scissors')}
          {this.renderCard('paper')}
          <p>твой счет {this.state.yourcount}</p>
          <p>комп счет {this.state.compcount}</p>
          <p></p>
          </div>
  }
}





ReactDOM.render(
  <Choose />,
  document.getElementById('root')
);