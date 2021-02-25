import React, { Component } from 'react';
import { Button, Input } from 'antd';
import axios from 'axios'

class App extends Component {
  state = {
    textInputByUser: "",
    numberToCut: "",
    resultNewString: "",
    randomNumber: "",
  }

  handleInputText = (event) => {
    this.setState({textInputByUser: event.target.value})
  }

  handleInputNumber = (event) => {
    this.setState({numberToCut: event.target.value})
  }

  sendStringToCutToBackend = () => {
    var self = this;
    axios.get("l'url de votre api" + this.state.textInputByUser + "&cut=" + this.state.numberToCut)
    .then(response => {
      self.setState({resultNewString: response.data})
    })
  }

  sendNbrToBackend = () => {
    var self = this;
    axios.get("l'url de votre api")
    .then(response => {
      self.setState({randomNumber: response.data})
    })
  }

  render() {
    return (
      <div>
        <div style={{width: "30%", marginLeft: "35%", marginRight: "35%", paddingTop: "2%"}}>
          <p>texte :</p>
          <Input onChange={this.handleInputText}/>
          <p>Nombre :</p>
          <Input onChange={this.handleInputNumber}/>
          <Button style={{width: "100%", marginTop: "2%"}} onClick={this.sendStringToCutToBackend}>Découper mon texte</Button>
          <div style={{marginTop: "2%"}}>Résultat : {this.state.resultNewString}</div>
        </div>
        <div style={{width: "30%", marginLeft: "35%", marginRight: "35%", paddingTop: "2%"}}>
          <Button style={{width: "100%", marginTop: "2%"}} onClick={this.sendNbrToBackend}>Démander un nombre aléatoire</Button>
          <div style={{marginTop: "2%"}}>Résultat : {this.state.randomNumber}</div>
        </div>
      </div>
    );
  }
}

export default App;
