import React from "react";
import Option from "./Option";

const Options = props => {
  return (
    <div>
      {props.options.length > 0 && (
        <button className="btn" onClick={props.handleDeleteOptions}>
          Remove All
        </button>
      )}
      {props.options.length === 0 && (
        <p>Please add an option to get started!</p>
      )}
      {props.options.map(option => (
        <Option
          key={option.todoTask}
          optionText={option.todoTask}
          description={option.description}
          status={option.doneStatus}
          handleDeleteOption={props.handleDeleteOption}
          handleEditOption={props.handleEditOption}
          handleDoneOption={props.handleDoneOption}
        />
      ))}
    </div>
  );
};

export default Options;
