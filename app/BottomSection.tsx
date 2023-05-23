import UserInput from "./UserInput";

interface BottomSectionProps {
  sendMessagehandler: (input: string) => void;
  curTitle: string | null;
}

const BottomSection = (props: BottomSectionProps) => {
  return (
    <div className="bottom-section">
      <UserInput
        curTitle={props.curTitle}
        sendMessagehandler={props.sendMessagehandler}
      ></UserInput>
      <p className="info">
        Free Research Preview. ChatGPT may produce inaccurate information about
        people, places, or facts. Cannot remember context because tokens cost
        money lol.
      </p>
    </div>
  );
};

export default BottomSection;
