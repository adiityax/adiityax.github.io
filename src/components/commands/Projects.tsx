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

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't miss. <br />
        To view all of them you can further go to <Cmd><a href="https://github.com/adiityax">"https://github.com/adiityax"</a></Cmd>.
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
    title: "Aditya's Personal Website",
    desc: "My personal website in a terminal based design.",
    url: "https://github.com/adiityax/adiityax.github.io",
  },
  {
    id: 2,
    title: "IBM AI Chatbot",
    desc: "Developed in accordance with a course on Coursera, the chatbot responds accurately to intents, greetings and chit-chats",
    url: "",
  },
  {
    id: 3,
    title: "IEEE-NSUT-ANDROID-APPLICATION-2.0 ",
    desc: "IEEE NSUT Student Branch Android Application..",
    url: "https://github.com/adiityax/IEEE-NSUT-ANDROID-APPLICATION-2.0",
  },
  {
    id: 4,
    title: "Robofriends",
    desc: "",
    url: "https://github.com/adiityax/RoboFriends",
  },
];

export default Projects;