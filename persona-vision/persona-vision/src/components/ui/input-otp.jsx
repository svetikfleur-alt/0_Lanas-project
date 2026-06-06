import React from "react";

/**
 * Minimal placeholder implementations for the OTP input components used
 * in the Base44 project.  The original implementation divides the
 * input into multiple slot components; here we simply render a
 * single input field and forward value changes to the parent.
 */
export function InputOTP({ value, onChange, maxLength, children, ...props }) {
  return (
    <input
      type="text"
      inputMode="numeric"
      maxLength={maxLength}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border border-gray-300 rounded px-3 py-2 text-center tracking-widest"
      {...props}
    />
  );
}

// The grouping and slot components are present for API compatibility
// but simply render their children.  In the real project, these
// would arrange the slots evenly across a horizontal space.
export function InputOTPGroup({ children }) {
  return <div className="flex gap-2">{children}</div>;
}

export function InputOTPSlot({ index }) {
  return <div className="flex-1 border border-gray-300 rounded px-3 py-2 text-center"> </div>;
}

export default InputOTP;