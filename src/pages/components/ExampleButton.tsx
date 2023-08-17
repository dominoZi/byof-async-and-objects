import { HtmlHTMLAttributes } from "react";
import "./ExampleButton.styles.css";
import clsx from "clsx";

export interface ExampleButtonProps
  extends HtmlHTMLAttributes<HTMLButtonElement> {
  variants?: "red" | "yellow" | "green" | "gray";
  disabled?: boolean;
}

export const ExampleButton = (props: ExampleButtonProps) => {
  const {
    className,
    children,
    disabled = false,
    variants = "green",
    ...other
  } = props;
  return (
    <button
      className={clsx(
        className,
        "ExampleButton-root",
        variants,
        disabled ? "disabled" : ""
      )}
      {...other}
    >
      {children}
    </button>
  );
};
