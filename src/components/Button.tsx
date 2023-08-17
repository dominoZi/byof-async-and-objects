import clsx from "clsx";
import { HtmlHTMLAttributes } from "react";

export const Button = (props: HtmlHTMLAttributes<HTMLButtonElement>) => {
  const { className, children, ...other } = props;
  return (
    <button className={clsx(className, "bg-slate-200 p-2")} {...other}>
      {children}
    </button>
  );
};
