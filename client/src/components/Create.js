import React from 'react';

class Create extends React.component {
  constructor(props) {
    super(props)
    this.state = {
      item: ''
    }
  }

  handleChange = (event) => {
    this.setState({ item: event.target.value });
  }

  handleInput = (event) => {
    event.preventDefault()
    this.props.addItem(this.state.item);
  }

  render() {
    return (
      <div className="center">
        <form action="" onSubmit={ this.handleInput }>
          <input type="text" onChange={ this.handleChange }/>
          <button type="submit">add</button>
        </form>
      </div>
    )
  }
}

export default Create;