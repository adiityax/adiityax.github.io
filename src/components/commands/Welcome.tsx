import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
          <PreName>
            {`        
  ────╔╦╦╗────────────╔╗
  ╔═╗╔╝╠╣╚╦╦╦═╗─╔═╦╦╦═╣╚╦═╗
  ║╬╚╣╬║║╔╣║║╬╚╗║╬║║║╬║╔╣╬╚╗
  ╚══╩═╩╩═╬╗╠══╝╠╗╠═╣╔╩═╩══╝
  ────────╚═╝───╚═╝─╚╝
            `}
          </PreName>
        <div>Welcome to my terminal portfolio.</div>
        <Seperator>----</Seperator>
        <div>
          This project's source code can be found in this project's{" "}
          <Cmd><Link href="https://github.com/adiityax/PersonalWebsite">
            GitHub repo
          </Link>
          </Cmd>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
