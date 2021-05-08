import React from "react";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

function TraineeComment(props) {
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });

  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("/trainee/signup/step11");
  };
  const backClick = () => {
    props.history.push("/trainee/signup/step9");
  };
  const homeClick = () => {
    props.history.push("/");
  };
  return (
    <div className="mainAddComment">
      <form
        className="addComment
      Form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>Do you want to add something ?</h1>
        <h2>
          Or click the arrow to pass the question. Here you can mention an
          instructor you already know.
        </h2>
        <input
          type="text"
          className="addComment"
          name="addComment"
          placeholder="Type your answer here..."
          {...register("addComment")}
        />

        <input type="submit" className="inputSubmit" value="OK" />
        <button className="button" onClick={backClick}>
          return
        </button>
        <button className="button" onClick={homeClick}>
          Home
        </button>
      </form>
    </div>
  );
}

export default TraineeComment;
