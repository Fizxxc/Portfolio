import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/pf.jpg";
import emotion from "../../Assets/Projects/pf2.jpg";
import editor from "../../Assets/Projects/posterr.png";
import chatify from "../../Assets/Projects/projectt1.png";
import suicide from "../../Assets/Projects/pf2.jpg";
import bitsOfCode from "../../Assets/Projects/pf.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="GFX Design"
              description="GFX (Graphic Effects) typically refer to visual elements used in media such as videos, websites, games, and other digital content to enhance the overall appearance or provide dynamic visual interaction. These effects can range from simple transitions and animations to complex visual manipulations. 
              Here's a breakdown of common types of GFX:"
              ghLink="https://deposit.pictures/p/83c4ae74ff164a5dbb3f5308718facaf"
              demoLink="https://www.instagram.com/p/DCdm3rmJCPq/?igsh=MW5lanppN3Q1eXZ1dA=="
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Typograph Edit V1"
              description=""
              ghLink=""
              demoLink="https://www.instagram.com/reel/DEPmySYzm9G/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Poster Design V1"
              description=""
              ghLink="https://i.ibb.co.com/DH3xxCRJ/posterr.png"
              demoLink="https://www.instagram.com/p/DF9QnZvSCbs/?utm_source=ig_web_copy_link"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="-"
              description=""
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Typograph Edit V2"
              description=""
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="-"
              description=""
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
