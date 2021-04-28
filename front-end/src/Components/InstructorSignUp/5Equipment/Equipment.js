/** 
 *  components/InstructorSignUp/5Equipment.js - Equipment component 
 * */

/* Imports */
import { useState } from "react";
import "./equipment.css";
import 'bootstrap/dist/css/bootstrap.css';
/**
 *  Contact component */
function Equipment() {

    /*create state for each input*/
    const [equipment, setEquipment] = useState([""]);

    {/** TO DO
- tick after every selected item 
*/}

    return (
        <div className="Equipment">    

            {/* Form to submit new Message
            NEED COMPLETION BAR AT THE BOTTOM
            */}
            <form className="submitSignUp">

                {/* 5 Sim Equipment Input */}
                <div className="formSection">
                    <div className="form-group">
                        <div className="numberQuestion">
                            <p>5</p>
                            {/* ADD ARROW ICON */}
                        </div>
                        <label for="equipment">What sim equipment do you have or plan to get?</label>
                        <p>
                            <em>
                                For most of the online trainings you will need at least a basic
                                joystick with yaw axis (39€).
                            </em>
                        </p>
                        <p>Choose as many as apply</p>
                        <select 
                            id="equipment" 
                            name="equipment" 
                            size="6" 
                            value={equipment}
                            onChange={(e) => setEquipment(e.target.value[0])}
                            multiple
                        >
                            <option value="joystick">Joystick</option>
                            <option value="yoke">Yoke</option>
                            <option value="rudder">Rudder pedals</option>
                            <option value="force">Force feed back yoke</option>
                            <option value="jet">
                                VR/MR headset (FYI : Already in use during type ratings)
                            </option>
                            <option value="LVO">Other</option>
                        </select>
                    </div>
                    <div className="buttonSection">
                        <button
                            className="buttonOK"
                            type="submit"
                            className="btn btn-block buttonSubmit"
                        /* onClick={ } */
                        >
                            OK
                        </button>
                        <p
                            className="enter"
                        /* onChange={ } */
                        >
                            Press Enter
                        </p>
                    </div>
                </div>

            </form>

        </div>

    );
}

/* Export */
export default Equipment;