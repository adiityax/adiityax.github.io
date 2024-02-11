import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";
import { Cmd } from "../styles/Help.styled";

const Internships: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "internships")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="internships" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        Here are some of my internships you shouldn't miss. 
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Python Developer Intern at Goognu Data Services Pvt. Ltd., Gurugram, India",
    desc: `● Redesigned the front page of the website of the company being a part of the Front-End team.
    ● Created a script in Python to attach a watermark to videos on a particular web page needed by the
    company to automatically watermark tutoring videos.
    ● Undertook a project requiring cleaning and organizing of data along with API designing using Python
    and MongoDB.`,
    url: "",
  },
  {
    id: 2,
    title: "Intern at Magnifi.ai, India",
    desc: "● Created a chatbot using the AI tools from a certified course and an automated customer response feedback form.",
    url: "",
  },
  {
    id: 3,
    title: "Front-End Developer Intern at datadecode.ai, India",
    desc: ` ● Designed the front end of a government-affiliated website using HTML5, CSS and ReactJS
    ● Constructed and helped with the designing of the company's website using ReactJS and other
    Javascript libraries such as ExpressJS and NodeJS.`,
    url: "",
  },
];

export default Internships;