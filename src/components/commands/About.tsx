import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Aditya Gupta</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a full-stack developer</HighlightAlt> based in Arizona,
        USA.
      </p>
      <p>
        I am passionate about developing softwares, <br />
        developing web applications to solve real-life challenges and the rising development in the field of Cybersecurity.
      </p>
    </AboutWrapper>
  );
};

export default About;
