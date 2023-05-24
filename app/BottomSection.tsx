import { Message } from '@/interfaces';
import UserInput from './UserInput';

interface BottomSectionProps {
  updatePage: (input: string, msg: Message) => void;
}

function BottomSection(props: BottomSectionProps) {
  const { updatePage } = props;
  return (
    <div className="w-full flex flex-col justify-center items-center py-[2%] px-[2%]">
      <UserInput updatePage={updatePage} />
      <p className="text-[0.8em] py-[5%] px-[5%] text-[rgba(255, 255, 255, 0.5)]">
        AdiGPT may produce inaccurate information about people, places, or
        facts. It also cannot remember context and may send incomplete responses
        due to token limitations put in place for cost purposes.
      </p>
    </div>
  );
}

export default BottomSection;
