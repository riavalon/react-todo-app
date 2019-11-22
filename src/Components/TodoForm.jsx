import React from 'react'
import Button from './Button'
import Input from './Input'

class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <form onSubmit={this.props.addItem}>
        <Input 
          placeholder="Start typing here..." 
          value={this.props.currentItem.text}
          onChange={this.props.handleInput}
        />
        <Button text="Add Task" />
      </form>
    )
  }
}

export default TodoForm