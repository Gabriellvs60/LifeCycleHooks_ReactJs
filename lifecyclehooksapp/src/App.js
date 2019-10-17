import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './child'

class App extends Component{


  state = {
    name : 'peter'
  }
  //objeto inicializado, criado
  constructor(){
    super();
    this.state = {
      name:'john'
    };
    console.log('constructor')
  }

  //lugar ideal para mudar o estado antes de renderizar
  //baseado nas props
  //antes do render
  componentWillMount(){
    if(window.innerWidth < 500){
      this.setState({innerWidth:window.innerWidth});
    }
    console.log('componentWillMount');
  }

  //depois do render
  //bom lugar para requisições ajax
  componentDidMount(){
    console.log('ComponentDidMount')
  }
  
    //quer renderizar ou nao
  shouldComponentUpdate(nextprops, nextState){
      console.log('shouldComponent Update')
      return true;
    }

  componentWillUpdate(){
    console.log('ComponentillUpdate')  
    }
  
  componentDidUpdate(prevProps, prevState){
    console.log('ComponentDidUpdate')
  }

  //contrario de mount
  componentWillUnmount(){
    console.log('componentWillUnmount');
  }
  changeState(){
    this.setState({name:'jill'})
  }
 
  //esvazia o component
  unmountChild(){
    this.setState({name: 'robert'});
  }
  
  //ciclo de vida de um componente
  //1 - primeiro render
  //2 - muda algo, tipo estado
  //3 - destruição

  render(){
    console.log('render'); 
    if(this.state.name === 'robert'){
      return(<div/>);
    }
    return(
      <div className="App">
        name:{this.state.name}
        innerWidth:{this.state.innerWidth }
      <Child name={this.state.name}/>
      <button onClick={this.changeState.bind(this)}>Change State</button>
      <button onClick={this.unmountChild.bind(this)}>Unmount Child</button>
      </div>
    );
  }
}


export default App;
