import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";
import { useState } from "react";
function TraineeSimEquipment(props) {
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });

  const [otherLanguage, setOther] = useState("");
  function selectOther(e) {
    const language = {
      ...otherLanguage,
      [e.target.name]: e.target.value,
    };
    setOther(language);
  }

  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("/trainee/signup/step9");
  };
  const backClick = () => {
    props.history.push("/trainee/signup/step7");
  };
  const homeClick = () => {
    props.history.push("/");
    window.location = "/"
  };

  return (
    <div className="mainTraineeSoftware">
      <form className="TraineeSoftwareForm" onSubmit={handleSubmit(onSubmit)}>
        <h1>
          In which language do you prefer to be trained ?This question is
          required. *
        </h1>
        <h2>
          We recommend English as it's the aviation language and it's easier to
          find an instructor.
        </h2>
        <select {...register("language")} id="language" name="language">
          <option value="not selected">--Choose language--</option>
          <option value="english">English</option>
          <option value="french">French</option>
          <option value="italian">Italian</option>
          <option value="spanish">Spanish</option>
        </select>
        <input
          {...register("otherLanguage")}
          type="text"
          name="otherLanguage"
          placeholder="Other"
          onChange={selectOther}
        />
        <input type="submit" value="OK" />
        <button className="button" onClick={backClick}>
          Return
        </button>
        <button className="button" onClick={homeClick}>
          Home
        </button>
      </form>
    </div>
  );
}
export default TraineeSimEquipment;
