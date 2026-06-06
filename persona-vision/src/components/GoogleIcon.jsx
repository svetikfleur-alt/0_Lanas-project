import React from "react";

/**
 * Simple Google icon represented by the multicoloured G.  The Base44
 * project uses an external SVG file; here we embed a small SVG
 * inline to avoid external dependencies.
 */
export default function GoogleIcon({ className = "", ...props }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="#EA4335"
        d="M12 10.2v3.6h5.056c-.217 1.182-1.3 3.464-5.056 3.464A5.808 5.808 0 016.2 12 5.8 5.8 0 0112 6.2c1.652 0 2.763.708 3.397 1.32l2.309-2.309C16.147 3.68 14.268 2.8 12 2.8 6.477 2.8 2 7.277 2 12.8s4.477 10 10 10 9.923-4.4 9.923-10c0-.667-.06-1.173-.164-1.666H12z"
      />
    </svg>
  );
}