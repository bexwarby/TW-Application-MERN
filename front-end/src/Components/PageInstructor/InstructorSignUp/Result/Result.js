import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";
import { useForm } from "react-hook-form";
import "../general.css"

function Result(props) {
  const { state } = useStateMachine(updateAction);
  const { actions } = useStateMachine({ updateAction });
  const { handleSubmit } = useForm();
  const onSubmit = async () => {
    actions.updateAction();
    // props.history.push("/instructor");

    const message = await fetch(
      `${process.env.REACT_APP_SERVER}/usr/instructor/signup`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      }
    );
    console.log(message);
    const data = await message.json();

    if (data.instructorId) {
      window.location = ("/")
    } else {
      props.history.push("/instructor/signup/");
      // window.location = ("/instructor/signup/step1")
    }
    console.log(data);
  };

  return (
    <form className="submitSignUp" onSubmit={handleSubmit(onSubmit)}>
      <div className="formInput">
        <div className="mt-5 ml-3 mr-3">
          <p>
            Thank you very much for joining us.
            <br />
            We will be in touch very soon! 
            <br />
            <br />
            Have a great day.
          </p>
        </div>

        <input className="enter mt-5" type="submit" value="Finish" />
      </div>
    </form>
  );
}

export default Result;
