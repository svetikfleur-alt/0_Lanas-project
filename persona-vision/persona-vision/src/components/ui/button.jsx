import React from "react";

/**
 * A simple button component that forwards all props to the native
 * button element.  The Base44 project uses a styled version built
 * with Tailwind CSS; this stub provides basic functionality to
 * avoid missing component errors.
 */
export function Button({ children, className = "", variant, ...props }) {
  // Determine a rudimentary style based on variant
  const baseStyle =
    variant === "outline"
      ? "border border-gray-300 text-gray-700 bg-white"
      : "bg-blue-600 text-white";
  return (
    <button className={`px-4 py-2 rounded ${baseStyle} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;