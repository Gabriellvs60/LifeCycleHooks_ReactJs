import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Child extends Component{
  constructor(){
    super();
    console.log('child constructor')
  }

  componentWillMount(){
    console.log('child componentWillMount');
  }

  //depois do render
  componentDidMount(){
    console.log('child ComponentDidMount')
  }

  componentWillReceiveProps(){
    console.log('Child willreceiveprop')
  }

   //quer renderizar ou nao
   shouldComponentUpdate(nextprops, nextState){
    console.log('child shouldComponent Update')
    return true;
  }

  componentWillUpdate(){
      console.log('child componentWillUpdate')
  }

  componentDidUpdate(prevProps, prevState){
      console.log('child prevprops', prevProps)
      console.log('child prevState', prevState)
      console.log('child ComponentDidUpdate')
    }

  //ciclo de vida de um componente
  //1 - primeiro render
  //2 - muda algo, tipo estado
  //3 - destruição

  render(){
    console.log('child render'); 
    return(
      <div className="App">
          child name : {this.props.name}
      </div>
    );
  }
}

export default Child;
