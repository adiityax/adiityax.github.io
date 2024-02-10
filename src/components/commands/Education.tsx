import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my educational background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "B.Tech (Hons) in Electrical Engineering",
    desc: "Netaji Subhas University of Technology, Delhi | 2019 ~ 2023",
  },
  {
    title: "MS in Software Engineering with Specialisation in Cybersecurity",
    desc: "Arizona State University | 2023 - 2025",
  },
];

export default Education;
