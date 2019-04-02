import React from 'react';

class Titulo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hora: new Date()
    }
  }

  componentDidMount(){
    this.horaId = setInterval(
      () => this.atualizaSeg(),
      1000
    )
  }

  componentWillUnmount(){
    clearInterval(this.horaId)
  }

  atualizaSeg(){
    this.setState({
      hora: new Date()
    })
  }

  render(){
    return <h1>React -  {this.state.hora.toLocaleTimeString()}</h1>;
  }
}

export default Titulo;
