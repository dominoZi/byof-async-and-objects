import clsx from "clsx";
import { HtmlHTMLAttributes } from "react";

export const BlockCode = (props: HtmlHTMLAttributes<HTMLSpanElement>) => {
  const { className, children } = props;
  return (
    <span
      className={clsx(
        className,
        "bg-slate-50 border border-slate-300 rounded-sm p-0.5"
      )}
    >
      {children}
    </span>
  );
};
