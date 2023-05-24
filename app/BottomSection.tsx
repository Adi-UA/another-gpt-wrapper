import UserInput from "./UserInput";

interface BottomSectionProps {
  sendMessagehandler: (input: string) => void;
  curTitle: string | null;
}

const BottomSection = (props: BottomSectionProps) => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-[0.5%] px-[2%]">
      <UserInput
        curTitle={props.curTitle}
        sendMessagehandler={props.sendMessagehandler}
      ></UserInput>
      <p className="text-[0.8em] py-[5%] px-[0%] text-[rgba(255, 255, 255, 0.5)]">
        Free Research Preview. ChatGPT may produce inaccurate information about
        people, places, or facts. Cannot remember context because tokens cost
        money lol.
      </p>
    </div>
  );
};

export default BottomSection;
