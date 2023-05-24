import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="absolute cursor-pointer bottom-[25%] right-[2%]">
      <div className="loading-spinner w-[1em] h-[1em] border-4 border-solid border-[#f3f3f3] border-t-[10px] border-t-[#383636] rounded-[50%] animate-spin"></div>
    </div>
  );
}
