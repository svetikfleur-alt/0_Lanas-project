import React from "react";

/**
 * Label component used to tie form inputs to their descriptions.
 */
export function Label({ htmlFor, children, className = "" }) {
  return (
    <label htmlFor={htmlFor} className={`block text-sm font-medium ${className}`}>
      {children}
    </label>
  );
}

export default Label;