import React from "react";
import AddOption from "./AddOption";
import Header from "./Header";
import Options from "./Options";
import { Redirect } from "react-router-dom";

export default class ToDoApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.location.uName,
      index: null,
      options: []
    };
  }
  //-------------------------------------------------
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };
  //----------------------------------------------------
  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(
        option => optionToRemove !== option.todoTask
      )
    }));
  };
  //-------------------------------------------
  handleAddOption = option => {
    if (!option.todoTask || !option.description) {
      return "Enter valid value to add item";
    }
    for (var i = 0; i < this.state.options.length; i++) {
      if (option.todoTask === this.state.options[i].todoTask) {
        return "Same Task Already exits Enter Different Task";
      }
    }
    this.setState(prevState => ({
      options: prevState.options.concat(option)
    }));
  };

  //-------------------------------------------------------

  handleEditOption = (option, description) => {
    for (var i = 0; i < this.state.options.length; i++) {
      if (option === this.state.options[i].todoTask) {
        let opt = this.state.options;
        opt[i].description = description;
        this.setState({
          options: opt
        });
      }
    }
  };

  //--------------------------------------------------------
  handleDoneOption = option => {
    for (var i = 0; i < this.state.options.length; i++) {
      if (option === this.state.options[i].todoTask) {
        let opt = this.state.options;
        opt[i].doneStatus = true;

        this.setState({
          options: opt
        });
      }
    }
  };
  //---------------------------------------------------------
  handleLogout = () => {
    this.setState({ user: null });
  };
  //---------------------------------------------------------
  componentDidMount() {
    try {
      let data = JSON.parse(localStorage.getItem("UserData"));
      let index = 0;
      for (var i = 0; i < data.length; i++) {
        if (data[i].uName == this.state.user) {
          this.setState({ index: i });
          index = i;
          break;
        }
      }

      let options = data[index].options;

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }
  //=================================
  componentDidUpdate(prevProps, prevState) {
    let data = JSON.parse(localStorage.getItem("UserData"));
    data[this.state.index].options = this.state.options;
    let finalData = JSON.stringify(data);
    localStorage.setItem("UserData", finalData);
  }

  render() {
    const subtitle = "Enter The Tasks To Be Done";

    return (
      <div className="main-container">
        <button className="btn logout" onClick={this.handleLogout}>
          Logout
        </button>
        <Header subtitle={subtitle} />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
          handleEditOption={this.handleEditOption}
          handleDoneOption={this.handleDoneOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
        {!this.state.user && <Redirect to="/" />}
      </div>
    );
  }
}
