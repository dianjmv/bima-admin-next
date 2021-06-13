// @flow
import * as React from "react";
import classNames from "classnames";

type ButtonType = "primary" | "secondary" | "outlined" | "alert";

type Props = {
  className?: string;
  typeButton: ButtonType;
  props?: any;
  children?: React.ReactNode;
  type: "button" | "submit" | "reset";
  disabled: boolean
};
export default function ButtonBima(props: Props) {
  const className = classNames(props.className, {
    "bg-blue-600 mx-auto px-4 py-2 rounded-lg hover:bg-blue-500 text-white focus:outline-none active:bg-blue-600":
      props.typeButton === "primary",
  });
  return (
    <button type={props.type} className={className} disabled={props.disabled}>
      {props.children}
    </button>
  );
}
