import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.textInput = React.createRef();
  }
  handledSubmit = (e) => {
    e.preventDefault();
  setState({ value: this.textInput.current.value });
  };

  render() {
    return (
      <>
        <h1> My Count Value:{this.state.value}</h1>
        <form onSubmit={this.handledSubmit}>
          Name: <input type="text" ref={this.textInput} />
          <input type="Submit" value="Submit" />
        </form>
      </>
    );
  }
}
export default App;