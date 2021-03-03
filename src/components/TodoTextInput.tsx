import React, { Component } from 'react';
import classnames from 'classnames';


interface Props {
  onSave: (text: string) => void,
  text?: string,
  placeholder?: string,
  editing?: boolean,
  newTodo?: boolean
}


export default class TodoTextInput extends Component<Props, {text: string}> {

  state = {
    text: this.props.text || ''
  }

  handleSubmit = (e: React.KeyboardEvent) => {
    const text = (e.target as HTMLInputElement).value.trim()
    if (e.which === 13) {
      this.props.onSave(text)
      if (this.props.newTodo) {
        this.setState({ text: '' })
      }
    }
  }

  handleChange = (e: React.ChangeEvent) => {
    this.setState({ text: (e.target as HTMLInputElement).value })
  }

  handleBlur = (e: React.FocusEvent) => {
    if (!this.props.newTodo) {
      this.props.onSave((e.target as HTMLInputElement).value)
    }
  }

  render() {
    return (
      <input className={
        classnames({
          edit: this.props.editing,
          'new-todo': this.props.newTodo
        })}
        type="text"
        placeholder={this.props.placeholder}
        autoFocus={true}
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit} />
    )
  }
}
