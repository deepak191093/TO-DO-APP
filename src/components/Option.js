import React from "react";

class Option extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      edit: false
    };
    this.showDescription = this.showDescription.bind(this);
    this.showEdit = this.showEdit.bind(this);
  }
  showDescription() {
    this.setState({ show: !this.state.show });
  }
  showEdit()
  {
    console.log("clicked");
    this.setState({edit: !this.state.edit})
  }
  render() {
    //----------------------------

    if(!this.state.edit)
      { return(
        <div className="options">
          <h3>Tasks:</h3>
          <h2 onClick={this.showDescription}>{this.props.optionText}</h2>
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
          <button
            className="btn"
            onClick={e => {
              this.props.handleDoneOption(this.props.optionText);
            }}
          >
            Done
          </button>
          <button
            className="btn"
            onClick={this.showEdit}
          >
            Edit
          </button>
        </div>);
      }
      else if(this.state.edit){

        return(
          <div className="options">
            <h3>Tasks:</h3>
            <h2>{this.props.optionText}</h2>
            <input type="text" className="form-group1" />
            <button
            className="btn"
            onClick={this.showEdit}
          >
            Edit Discription
          </button>

          </div>


        );

      }
      
     
      
    

    //------------------------------
  }
}

export default Option;
