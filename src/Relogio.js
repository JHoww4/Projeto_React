import React, { Component } from 'react';

class Relogio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
    this.intervalID = null;
  }

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    const { time } = this.state;
    return (
      <div>
        <h2>Relógio Digital</h2>
        <p>Agora é {time.toLocaleTimeString()}.</p>
      </div>
    );
  }
}
export default Relogio;