import React from "react";
import styled from "styled-components";
import Casilla from "./Casilla.js";

const FilaCasilla = styled.div`
  display: flex;
  width: 100%
`;


class Tablero extends React.Component {

  constructor(props) {
    super(props);

    this.estadoInicial = {
      casillas: Array(9).fill(null),
      turnoJugadorAzul : true
    }
    
    this.state = this.estadoInicial
    this.resetearJuego = this.resetearJuego.bind(this)
  }

  handleClick(i) {
    const casillas = this.state.casillas.slice();
    if (calcularGanador(casillas) || casillas[i]) {
      return;
    }
    casillas[i] = this.state.blueIsNext ? 'blue' : 'red';
    this.setState({
      casillas: casillas,
      blueIsNext: !this.state.blueIsNext,
    });
  }

  renderCasilla(i) {
    return (
      <Casilla
        value={this.state.casillas[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const ganador = calcularGanador(this.state.casillas);
    var estado;
    if (ganador) {
      estado = "El ganador es: " + ganador;
    } else {
      estado = "Siguiente jugador: " + (this.state.blueIsNext ? "blue" : "red");
    }
    return (
      <div>
        <FilaCasilla>
          {this.renderCasilla(0)}
          {this.renderCasilla(1)}
          {this.renderCasilla(2)}
        </FilaCasilla>
        <FilaCasilla>
          {this.renderCasilla(3)}
          {this.renderCasilla(4)}
          {this.renderCasilla(5)}
        </FilaCasilla>
        <FilaCasilla>
          {this.renderCasilla(6)}
          {this.renderCasilla(7)}
          {this.renderCasilla(8)}
        </FilaCasilla>
        <div className="estado">{estado}</div>
        <button onClick={this.resetearJuego}>Resetear juego</button>
      </div>
    );
  }

  resetearJuego(){
    this.setState(this.estadoInicial);
  }
}

function calcularGanador(casillas) {
  const combinacionesGanadoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < combinacionesGanadoras.length; i++) {
    const [a, b, c] = combinacionesGanadoras[i];
    if (casillas[a] && casillas[a] === casillas[b] && casillas[a] === casillas[c]) {
      return casillas[a];
    }
  }
  return null;
}
export default Tablero;
