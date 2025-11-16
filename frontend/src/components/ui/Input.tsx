import { forwardRef } from "react";

const Input = forwardRef<HTMLInputElement, any>((props, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className={`input ${props.className || ""}`}
    />
  );
});

Input.displayName = "Input";

export default Input;
