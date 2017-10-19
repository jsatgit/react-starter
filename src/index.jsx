import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.PureComponent {
  state = {
    name: 'James',
  };

  render() {
    return (
      <div>
        {this.state.name}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
