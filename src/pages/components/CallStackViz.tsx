import { useState } from "react";
import { CallbackItem } from ".";
import { Button } from "../../components";

export const CallStackViz = () => {
  const [step, setStep] = useState(1);
  const renderStack = () => {
    switch (step) {
      case 1:
        return <CallbackItem label={`console.log("Start")`} />;
      case 2:
        return <CallbackItem label={`setTimeout()`} />;
      case 3:
        return <CallbackItem label={`console.log("Done")`} />;
      case 4:
        return null;
      case 6:
        return <CallbackItem label={`timeout()`} />;
      case 7:
        return null;
      default:
        return null;
    }
  };
  const renderWebApi = () => {
    switch (step) {
      case 3:
      case 4:
        return <CallbackItem label={`setTimeout()`} />;
      default:
        return null;
    }
  };
  const renderQueue = () => {
    switch (step) {
      case 5:
        return <CallbackItem label={`console.log("Timeout callback!")`} />;
      case 6:
        return;
      default:
        return null;
    }
  };
  return (
    <div>
      <div className="w-[480px] p-2 border border-dashed rounded-[4px]">
        <div className="flex flex-row h-[240px] ">
          <div className="flex-grow bg-blue-200 p-2 mr-2 rounded-[4px]">
            Call stack
            {renderStack()}
          </div>
          <div className="flex-grow p-2 rounded-[4px] border border-dashed">
            Web API
            {renderWebApi()}
          </div>
        </div>
        <div className="block h-[120px] bg-yellow-200 p-2 mt-2 rounded-[4px]">
          Queue
          <div className="flex flex-row">{renderQueue()}</div>
        </div>
      </div>
      <div className="flex flex-row mt-6">
        <Button
          className="bg-slate-200 p-2"
          onClick={() => {
            setStep((prev) => {
              const next = prev - 1;
              return 0 === next ? 7 : next;
            });
          }}
        >
          Prev
        </Button>
        <div className="flex items-center justify-center w-[64px] text-center">
          {step}
        </div>
        <Button
          className="bg-slate-200 p-2"
          onClick={() => {
            setStep((prev) => {
              const next = prev + 1;
              return 7 < next ? 1 : next;
            });
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
