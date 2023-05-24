'use client';

import { useQuery } from '@tanstack/react-query';
import { ChangeEvent, useEffect, useState } from 'react';
import { Message, SendMessageRequest } from '@/interfaces';
import LoadingSpinner from './LoadingSpinner';

interface UserInputProps {
  updatePage: (input: string, msg: Message) => void;
}

function UserInput(props: UserInputProps) {
  const [inputValue, setInputValue] = useState('');
  const { updatePage } = props;

  const { isFetching, refetch } = useQuery({
    queryKey: ['completions'],
    queryFn: async () => {
      const options: SendMessageRequest = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputValue,
        }),
      };
      const response = await fetch('/api/completions', options);
      const data = await response.json();
      const msg: Message = data.choices[0].message;
      updatePage(inputValue, msg);
      return msg;
    },
    enabled: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    setInputValue('');
  }, [isFetching]);

  return (
    <div className="relative w-full max-w-[650px]">
      <input
        className="w-full rounded py-[2%] px-[3%] text-[1em] bg-slate-700 shadow-2xl"
        value={inputValue}
        onChange={(e: ChangeEvent) => {
          const target = e.target as HTMLTextAreaElement;
          setInputValue(target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !isFetching) {
            refetch();
          }
        }}
        placeholder="Submit a new message"
        type="text"
      />
      {isFetching && <LoadingSpinner />}
      {!isFetching && (
        <button
          type="button"
          className="absolute cursor-pointer bottom-[25%] right-[2%]"
          onClick={() => {
            refetch();
          }}
        >
          →
        </button>
      )}
    </div>
  );
}

export default UserInput;
