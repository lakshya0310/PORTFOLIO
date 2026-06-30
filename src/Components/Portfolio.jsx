/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "NaviSight – Edge AI Wearable for the Visually Impaired",
    description:
      "Fine-tuned a YOLOv11 model and built an offline-first computer vision pipeline for assistive navigation in real-world Indian environments.",
    url: "https://navisight.in/",
  },
  {
    title: "LiDAR-Camera Calibration",
    description:
      "Implemented the MDPCalib paper from scratch, building a complete feature extraction, correspondence matching, and optimization pipeline for accurate sensor fusion.",
    url: "https://github.com/vramanrs/MR_Lidar_Cam_Calib",
  },
  {
    title: "RISC-V Processor Design",
    description:
      "Designed sequential and 5-stage pipelined RISC-V processors in SystemVerilog with hazard detection, data forwarding, and comprehensive verification.",
    url: "https://github.com/lakshya0310/RISC-V-Processor",
  },
  {
    title: "Object Detection Robot",
    description:
      "Developed a ROS1 and Gazebo-based autonomous robot integrating YOLOv5 for real-time object detection, localization, and navigation.",
    url: "https://github.com/lakshya0310/Object_Detection_Bot",
  },
  {
    title: "Research on Motion Planning Infeasibility",
    description:
      "Research at IIIT Hyderabad implementing and extending Li & Dantam (2023) to develop scalable algorithms for infeasibility proofs in robotic motion planning.",
    url: "https://github.com/lakshya0310/Li_Dantam_2023_Paper_implementation",
  },
  {
    title: "Custom Unix Shell",
    description:
      "Built a POSIX-compliant shell in C supporting piping, redirection, process management, networking utilities, and persistent command history.",
    url: "YOUR_GITHUB_LINK",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
