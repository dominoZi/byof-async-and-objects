import { SwitchBase } from ".";
export { Switch as SwitchBase } from "@headlessui/react";

export const Switch = (props: {
  checked: boolean;
  onChange: (checked: boolean) => void;
}) => {
  return (
    <SwitchBase
      checked={props.checked}
      onChange={props.onChange}
      className={`${
        props.checked ? "bg-blue-600" : "bg-gray-200"
      } relative inline-flex h-6 w-11 items-center rounded-full mr-2`}
    >
      <span className="sr-only">Block</span>
      <span
        className={`${
          props.checked ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </SwitchBase>
  );
};
