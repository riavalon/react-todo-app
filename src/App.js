import React from 'react';
import TodoList from './Components/TodoList'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: 'Bob'
    }
  }
  render() {
    return (
      <div className='app'>
        <TodoList user={this.state.user} />
      </div>
    );
  }
}

export default App;