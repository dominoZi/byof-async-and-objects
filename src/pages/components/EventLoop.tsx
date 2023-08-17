import { ReactNode } from "react";

export interface CallbackItemProps {
  label: string;
}

export const CallbackItem = ({ label }: CallbackItemProps) => (
  <div className="p-2 m-1 bg-white rounded-[2px] border border-dashed">
    {label}
  </div>
);

export interface EventLoopProps {
  renderQueue?: () => ReactNode;
  renderHeap?: () => ReactNode;
  renderStack?: () => ReactNode;
}

export const EventLoop = (props: EventLoopProps) => {
  const { renderQueue, renderHeap, renderStack } = props;
  return (
    <div className="w-[480px] p-2 border border-dashed rounded-[4px]">
      <div className="flex flex-row h-[240px] ">
        <div className="w-[180px] bg-blue-200 p-2 mr-2 rounded-[4px]">
          Call stack
          {renderStack && renderStack()}
        </div>
        <div className="flex-grow bg-green-200 p-2 rounded-[4px]">
          Heap
          {renderHeap && renderHeap()}
        </div>
      </div>
      <div className="block h-[120px] bg-yellow-200 p-2 mt-2 rounded-[4px]">
        Queue
        <div className="flex flex-row">{renderQueue && renderQueue()}</div>
      </div>
    </div>
  );
};
