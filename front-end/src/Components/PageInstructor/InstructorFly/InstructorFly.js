/**
 * Fly instructeur
 */

import './InstructorFly.css'
import photo from './eva.jpg'
import photo2 from './guy.jpg'
import 'react-slideshow-image/dist/styles.css';

import { Slide } from 'react-slideshow-image';


function InstructorFly() {

  const number = 5;
  const date = "12/05/2021";
  const time = "11:00-12:00"

  return (
    <div className="fly">
      <button type="button" className="btn btn-dark bg-dark flyButton">FLY</button>
      <hr className="solid" />

      <div>
        <Slide easing="ease">
          {/* 3 levels */}
          <div className="each-slide">
            <div style={{ 'backgroundColor': 'transparent' }}>
              <span>
                <img className="img-fluid img-thumbnail rounded-circle eva" alt="" src={photo}></img>
                <p className="timing fly">Lesson {number}, {date}, {time}</p>
              </span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ 'backgroundColor': 'transparent' }}>
              <span>
                <img className="img-fluid img-thumbnail rounded-circle eva" alt="" src={photo2}></img>
                <p className="timing fly">Lesson {number}, {date}, {time}</p>
              </span>
            </div>
          </div>
        </Slide >
      </div>

      <button type="buttonBottom" className="btn btn-dark bg-dark plan">Begin planned lesson</button>


    </div>
  );
}

export default InstructorFly;
