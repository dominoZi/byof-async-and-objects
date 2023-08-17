import clsx from "clsx";
import { HtmlHTMLAttributes } from "react";

export interface TagProps extends HtmlHTMLAttributes<HTMLSpanElement> {}
export interface SelectableTagProps extends TagProps {
  selected: boolean;
}

export const Tag = ({ children, className, ...other }: TagProps) => (
  <span
    className={clsx(
      "inline-block bg-slate-50 border border-slate-200 px-1",
      className
    )}
    {...other}
  >
    {children}
  </span>
);

export const SelectableTag = (props: SelectableTagProps) => {
  const { className, children, selected, ...other } = props;
  return (
    <span
      className={clsx(
        "inline-block border",
        "cursor-pointer",
        selected
          ? "bg-green-50 border-green-200"
          : "bg-slate-50 border border-slate-200",
        className
      )}
      {...other}
    >
      {children}
    </span>
  );
};

export const HtmlTag = (props: { tagName: string }) => (
  <Tag>&lt;{props.tagName}&gt;</Tag>
);
