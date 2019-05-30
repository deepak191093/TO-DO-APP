import React from "react";

class Option extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      edit: false,
      value: ""
    };
    this.showDescription = this.showDescription.bind(this);
    this.showEdit = this.showEdit.bind(this);
    this.handleChnage = this.handleChnage.bind(this);
    this.editDiscription = this.editDiscription.bind(this);
  }
  showDescription() {
    this.setState({ show: !this.state.show });
  }
  showEdit() {
    this.setState({ edit: !this.state.edit });
  }
  handleChnage(evt) {
    this.setState({
      value: evt.target.value
    });
  }
  editDiscription() {
    this.props.handleEditOption(this.props.optionText, this.state.value);
    this.setState({ edit: !this.state.edit });
  }
  render() {
    //----------------------------

    if (!this.state.edit) {
      return (
        <div className="options">
          <h3>Tasks:</h3>
          <h2
            onClick={this.showDescription}
            style={this.props.status ? { textDecoration: "line-through" } : {}}
          >
            {this.props.optionText}
          </h2>
          {this.state.show && (
            <p>
              Description:-
              <br />
              {this.props.description}
            </p>
          )}
          <button
            className="btn"
            onClick={e => {
              this.props.handleDeleteOption(this.props.optionText);
            }}
          >
            remove
          </button>
          {!this.props.status && (
            <button
              className="btn"
              onClick={e => {
                this.props.handleDoneOption(this.props.optionText);
              }}
            >
              Done
            </button>
          )}
          <button className="btn" onClick={this.showEdit}>
            Edit
          </button>
        </div>
      );
    } else if (this.state.edit) {
      return (
        <div className="options">
          <h3>Tasks:</h3>
          <h2>{this.props.optionText}</h2>
          <input
            type="text"
            placeholder="Description"
            className="form-group1"
            onChange={this.handleChnage}
          />
          <button className="btn" onClick={this.editDiscription}>
            Edit Discription
          </button>
        </div>
      );
    }

    //------------------------------
  }
}

export default Option;
