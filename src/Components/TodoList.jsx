import React, { Component } from 'react'
import Header from './Header'
import TodoForm from './TodoForm'
import TodoContainer from './TodoContainer'
import styles from '../Styles/TodoList.module.css'

class TodoList extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: { text: '', key: '' },
    }
  }

  handleInput = event => {
    const itemText = event.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })
  }

  addItem = event => {
    event.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      })
    }
  }
  
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }

  render() {
    return (
      <div className={styles.todoList}>
        <Header name={this.props.user} />
        <TodoForm 
          addItem={this.addItem}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <TodoContainer 
          todos={this.state.items} 
          onClick={this.deleteItem}
        />
      </div>
    )
  }
}
export default TodoList