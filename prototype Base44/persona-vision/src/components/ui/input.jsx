import React from "react";

/**
 * Basic input component that forwards props to the underlying input.
 * The Base44 project wraps this with custom styling and focus
 * handling.  Consumers can add their own Tailwind classes via the
 * `className` prop.
 */
export function Input({ className = "", ...props }) {
  return (
    <input
      className={`border border-gray-300 rounded px-3 py-2 w-full ${className}`}
      {...props}
    />
  );
}

export default Input;