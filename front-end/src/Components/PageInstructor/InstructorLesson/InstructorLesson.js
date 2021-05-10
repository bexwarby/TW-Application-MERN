/**
 * Lesson overview instructor
 */

import { CircularProgressbar } from 'react-circular-progressbar';
import "./instructorLesson.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-slideshow-image/dist/styles.css';

import { Slide } from 'react-slideshow-image';

import photo from './eva.jpg'
import photo3 from './face.jpg'
import 'react-circular-progressbar/dist/styles.css';
import React from "react";

function InstructorLesson() {

  const percentage = "50";
  const value = 10;
  const maxValue = 100;

  return (
    <div>
      <p className="h2 blockquote text-center">Your Lessons</p>
      {/* Percentage Success */}
      <div className="d-flex flex-row justify-content-center text-align-center">

        <div
          className="display-1 p-2 percentage"
          style={{ color: "orange", fontSize: 100 }}
        >
          <p><b>{percentage}</b></p>
        </div>

        <div className="p-2 d-flex align-items-center">
          <p className="p-1">% <br /> success rate</p>
        </div>

      </div>

      {/* Instructors trainees */}

      <div>
        <Slide easing="ease">
          {/* 3 levels */}
          <div className="each-slide">
            <div style={{ 'color': 'black', 'height': 250 }}>
              <span>
                <div className="list-inline d-flex justify-content-around">
                  <img className="list-inline-item img-fluid img-thumbnail rounded-circle"
                    alt=""
                    src={photo}
                    style={{ width: 60, height: 60 }}
                  ></img>
                  <p className="list-inline-item d-flex align-items-center text-light"
                    style={{ width: 60, fontSize: 10 }}>
                    Eva Longoria
                  </p>
                  <div style={{ width: 60, height: 60 }}
                    className="list-inline-item circle"
                  >
                    <CircularProgressbar
                      /* onLoad={onLoad} */
                      value={20}
                      maxValue={maxValue}
                      text={`${20 / maxValue * 100}%`}
                    />
                  </div>
                  <p className="list-inline-item d-flex align-items-center text-light"
                    style={{ fontSize: 10, width: 60 }}>
                    Expert wings <br />phase 2
                  </p>
                </div>

                <div className="list-inline d-flex justify-content-around">
                  <img className="list-inline-item img-fluid img-thumbnail rounded-circle"
                    alt=""
                    src={photo3}
                    style={{ width: 60, height: 60 }}
                  >
                  </img>
                  <p className="list-inline-item d-flex align-items-center text-light"
                    style={{ fontSize: 10, width: 60 }}>
                    Joseph Perfect
                  </p>
                  <div style={{ width: 60, height: 60 }}
                    className="list-inline-item circle"
                  >
                    <CircularProgressbar
                      /* onLoad={onLoad} */
                      value={value}
                      maxValue={maxValue}
                      text={`${value / maxValue * 100}%`}
                    />
                  </div>
                  <p className="list-inline-item d-flex align-items-center text-light"
                    style={{ fontSize: 10, width: 60 }}>
                    Pro wings <br />phase 3
                  </p>
                </div>

                <div className="list-inline d-flex justify-content-around">
                  <img className="list-inline-item img-fluid img-thumbnail rounded-circle"
                    style={{ width: 60, height: 60 }}
                    alt=""
                    src={photo3}>
                  </img>
                  <p className="list-inline-item d-flex align-items-center text-light"
                    style={{ fontSize: 10, width: 60 }}>
                    Guillaume !
                  </p>
                  <div style={{ width: 60, height: 60 }}
                    className="list-inline-item circle"
                  >
                    <CircularProgressbar
                      /* onLoad={onLoad} */
                      value={90}
                      maxValue={maxValue}
                      text={`90%`}
                    />
                  </div>
                  <p className="list-inline-item d-flex align-items-center text-light"
                    style={{ fontSize: 10, width: 60 }}>
                    Private wings <br />phase 2
                  </p>
                </div>

                <div className="list-inline d-flex justify-content-around">
                  <img className="list-inline-item img-fluid img-thumbnail rounded-circle"
                    alt=""
                    src={photo3}
                    style={{ width: 60, height: 60 }}
                  >
                  </img>
                  <p className="list-inline-item d-flex align-items-center text-light"
                    style={{ fontSize: 10, width: 60 }}>
                    Thomas Pesquet
                  </p>
                  <div style={{ width: 60, height: 60 }} className="list-inline-item circle">
                    <CircularProgressbar
                      /* onLoad={onLoad} */
                      value={75}
                      maxValue={maxValue}
                      text={`${75 / maxValue * 100}%`}
                    />
                  </div>
                  <p className="list-inline-item d-flex align-items-center text-light"
                    style={{ fontSize: 10, width: 60 }}>
                    Private wings <br />phase 1
                  </p>
                </div>
              </span>
            </div>
          </div>

        </Slide>
      </div>

    </div>

  );
}

export default InstructorLesson;
