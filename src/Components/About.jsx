/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm Lakshya Jindal, a B.Tech + MS (Research) student in Electronics and Communication Engineering at IIIT Hyderabad. I enjoy building intelligent systems at the intersection of robotics, computer vision, embedded systems, and AI, with a focus on solving real-world engineering problems.";

/**
 * Technologies and skills
 */
const skillsList = [
  "C/C++",
  "Python",
  "Robotics (ROS1/ROS2)",
  "Computer Vision",
  "Machine Learning",
  "SystemVerilog",
  "Embedded Systems",
  "MATLAB",
  "Gazebo",
  "Git & GitHub",
  "Linux",
  "SQL",
];

/**
 * About me
 */
const detailOrQuote =
  "I'm passionate about transforming research into practical engineering solutions. Whether it's autonomous robots, Edge AI, sensor fusion, or computer architecture, I enjoy designing efficient systems, learning new technologies, and tackling challenging problems through hands-on development.";
const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
