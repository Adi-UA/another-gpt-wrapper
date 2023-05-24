import { Message } from "@/interfaces";
import UserInput from "./UserInput";

interface BottomSectionProps {
  updatePage: (input: string, msg: Message) => void;
}

const BottomSection = (props: BottomSectionProps) => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-[2%] px-[2%]">
      <UserInput updatePage={props.updatePage}></UserInput>
      <p className="text-[0.8em] py-[5%] px-[0%] text-[rgba(255, 255, 255, 0.5)]">
        Free Research Preview. ChatGPT may produce inaccurate information about
        people, places, or facts. Cannot remember context because tokens cost
        money lol.
      </p>
    </div>
  );
};

export default BottomSection;
