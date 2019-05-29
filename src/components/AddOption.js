import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };
  handleAddOption = (e) => {
    e.preventDefault();
    const todoTask = e.target.elements.option.value.trim();
    const description =  e.target.elements.desription.value.trim();
    const obj = {todoTask, description, doneStatus : false};
    const error = this.props.handleAddOption(obj);
    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
      e.target.elements.desription.value='';
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption} autoComplete="off" >
          <input  className="form" type="text" name="option" placeholder="Option" />
          <input  className="form" type="text" name="desription" placeholder="Description"/>
          <button className="btn">Add Option</button>
        </form>
      </div>
    );
  }
}
